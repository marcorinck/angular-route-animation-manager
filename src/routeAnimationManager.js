define(['angular', './RouteAnimationService', './RouteAnimationDirective'],
	function (angular, RouteAnimationService, RouteAnimationDirective) {
	'use strict';

	var routeAnimationManager = angular.module('route-animation-manager', []);
	routeAnimationManager.provider('routeAnimationService', RouteAnimationService);
	routeAnimationManager.directive('routeAnimationManager', RouteAnimationDirective);

	return routeAnimationManager;
});