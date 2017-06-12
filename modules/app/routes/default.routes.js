(function(){

    angular.module('myApp').config(['$locationProvider', '$routeProvider',
            function($location, $routeProvider) {
              $routeProvider.
                
            //Default
    
                when('/accueil', {
                  templateUrl: 'modules/app/views/accueil.html',
                  controller: 'accueilController',
                  access: { requiredLogin: false },
                  themepage : ""
                }).
                        
            //Otherwise

                otherwise({
                  redirectTo: '/accueil',
                  access: { requiredLogin: false }
                });
            }]);
})();