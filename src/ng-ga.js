/**
 * ng-google-analytics v0.1.0
 * (c) 2014 - Rafael Lima <http://www.github.com/rafael-lima>
 * License: MIT
 */

'use strict';

angular.module('ngGA', [])
	.directive('ngGoogleAnalytics', [function () {
		return {
			restrict: 'EA',
			scope: {
				domain: '@',
				code: '@'
			},
			link: function (scope, element, attrs) {

				scope.domain = scope.domain || 'default.com';
				scope.code = scope.code || 'UA-XXXX-X';
				
				var gaScript = (function () {

					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
				 
					ga('create', scope.code, scope.domain);
					ga('send', 'pageview');

				}());

			}
		};
	}]);
