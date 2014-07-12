define(function() {
	'use strict';

	function RouteAnimationDirective(routeAnimationService) {
		return {
			restrict: 'A',
			transclude: true,
			template: '<div class="view-animate-container" ng-class="animationClass.name" ng-transclude></div>',
			link: function(scope) {
				scope.animationClass = routeAnimationService.animationClass;
			}
		};
	}

	RouteAnimationDirective.$inject = ['routeAnimationService'];

	return RouteAnimationDirective;

});