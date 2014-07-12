# angular-route-animation-manager

This is a fork of [angular-route-animation-manager by yairhaimo](https://github.com/yairhaimo/angular-route-animation-manager)

I liked his idea of managing ng-view animations on the routes itself, but didn't like some aspects of his implementation.

Notable changes:

* directive is using routeManagerService directly, not via $rootScope in original project
* priority of selecting animation class for route change is as this:
*#$rootScope.nextAnimation property (if set, will be reset after route change)
*#nextRoute.animation property (if set)
*#defaultAnimation (can be configured via routeManangerServiceProvider.setDefaultAnimation() during angular config phase)
* all files are AMD modules, as internal project uses requireJS for which I coded this.


Usage of directive is the same as in original project.

```html
	<div route-animation-manager>
		<div ng-view class="view-animate"></div>
	</div>
```

There are some example animations defined in animations.css.

Sorry, there is no running demo for now.

