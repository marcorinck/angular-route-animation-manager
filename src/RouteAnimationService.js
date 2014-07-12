define(function(){
	'use strict';

	var routeAnimationService = function()  {

		var _defaultAnimation = 'slideInRight';
		var _animationClass = { name:''};

		this.setDefaultAnimation = function(animation) {
			_defaultAnimation = animation;
		};

		this.$get = ['$rootScope', function($rootScope) {
			function setAnimationClass(currentRoute, nextRoute) {
				if (!currentRoute || !nextRoute || !nextRoute.originalPath) {
					return undefined;
				}

				_animationClass.name = $rootScope.nextAnimation || nextRoute.animation || _defaultAnimation;
				$rootScope.nextAnimation = null;
			}

			$rootScope.$on('$routeChangeStart', function(scope, next, current) {
				setAnimationClass(current, next );
			});

			return {
				animationClass: _animationClass
			};
		}];
	};

	routeAnimationService.$inject = [];

	return routeAnimationService;
});