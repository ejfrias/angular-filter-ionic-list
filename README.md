# angular-filter-ionic-list
A custom Angular filter for filtering Ionic list using a search box. Made for Angular 1.


<br />
### Requirements
AngularJs and Ionic


<br />
### Demo
[http://ejfrias.com/playground/angular-filter-ionic-list](http://ejfrias.com/playground/angular-filter-ionic-list)


<br />
## How to see it in action in your local server
1. Start an ionic app `ionic start app blank`
2. Copy `www` folder from this repo and replace the one inside the ionic app that you've just created
3. And voila! Open a browser, navigate to your app and you should see it work


<br />
## How to use
First, add a reference of `angular-filter-ionic-list.js` to your `index.html`
```
<script src="/path/to/angular-filter-ionic-list.js"></script>
```

Then, add the dependency in your `controllers.js` or `app.js` or to whichever file it is based on how you build your app structure. In this repo's case, it was added in `controllers.js`
```
angular.module('app.controllers', ['ionic', 'angular-filter-ionic-list'])
```

After that, just check out `controllers.js` and `templates/list.html` on how the list filter was implemented. The steps are straight forward so it should be easy to understand.

**Just to note**, be familiar with Ionic's `collection-repeat` directive and Angularjs' `filter` component.


<br />
### Contributing
Since this filter was made to be as simple as possible, requesting and/or proposing a feature would not be entertained. However, submitting bugs/issues are always welcome.
