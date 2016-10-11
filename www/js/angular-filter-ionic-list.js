angular.module('angular-filter-ionic-list', ['ionic'])

//sort list alphabetically
.filter('sort', function(){
	return function( list, field ){
		list.sort(function(a, b){
			a = a[field].replace(/['"]+/g, '').trim();
			b = b[field].replace(/['"]+/g, '').trim();
			
			return a.localeCompare(b);
		});
	}
})

//generate list dividers
.filter('generateDividers', function(){
	return function( list, field ){
		var prevLetter = '';
		var firstLetter = '';
		var items = [];
		
		for( var i = 0; i < list.length; i++ ){
			if( list[i][field] != '' ){
				firstLetter = list[i][field].replace(/['"]+/g, '').trim().substring(0, 1); //remove extra spaces and quotes

				//add divider
				if( prevLetter != firstLetter ){
					var item = { isDivider: true };
						item[field] = firstLetter;
					
					items.push(item);
				}

				list[i].isDivider = false; //set as not a divider
				items.push( list[i] );
				prevLetter = firstLetter;
			}
		}

		return items;
	}
})

//filter list during search
.filter('search', function(){
	return function( list, query ){
		var filtered = [];
		var letterMatch = new RegExp(query, 'i');
		var divider = '';
		
		if( query && query.trim() == '' ){
			return list;
		}
		
		angular.forEach(list, function( item ){
			//cater for dividers
			if( item.isDivider ){
				divider = item;
				divider.isAdded = false;
			}
			
			if( letterMatch.test(item.name) || (item.title && letterMatch.test(item.title)) ){
				//make sure to add the divider of matching names
				if( query && !divider.isAdded && typeof divider.name != 'undefined' && item.name.substring(0,1) == divider.name ){
					//make sure the divider shows only once per group
					if( item.name == divider.name ){
						divider.isAdded = true;
					}
					else {
						//make sure the divider shows only once, not for each and every name
						this.push( divider );
						divider.isAdded = true;
					}
				}
				
				this.push( item );
			}
		}, filtered);
		
		return filtered;
	}
})