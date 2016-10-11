angular.module('app.controllers', ['ionic', 'angular-filter-ionic-list'])

.controller('ListCtrl', function( $scope, $http, $filter ){
	//for example sake, we will just get the list in a json file 
	$http.get('js/list.json').success(function( list ){
		//lets sort the lsit alphabetically first
		$filter('sort')(list, 'name');

		//generate the dividers manually
		list = $filter('generateDividers')(list, 'name');

		//attach the list to the scope
		$scope.list = list;
	});
	
	$scope.clearSearch = function(){
		$scope.search = '';
	}

	$scope.getItemHeight = function( item, index ){
		return item.isDivider ? 36 : 74;
	}
})