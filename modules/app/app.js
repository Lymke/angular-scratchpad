var app = angular.module('myApp', 
[   'ngAnimate',
    'ui.bootstrap', 
    'ngRoute',
    'ngResource',
    'ngSanitize', 
    'ngStorage',
    'pascalprecht.translate', 
    'satellizer',
    
    'layoutModule',
]);

angular.module('myApp').path = '/modules/app/';

angular.module('myApp').config(['$httpProvider', function ($httpProvider) {

        // Pour le cross domaine
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);



angular.module('myApp').filter('trusted', ['$sce', function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

