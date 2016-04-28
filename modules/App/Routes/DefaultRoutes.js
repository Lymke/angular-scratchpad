(function(){

    angular.module('defaultApp').config(['$locationProvider', '$routeProvider',
            function($location, $routeProvider) {
              $routeProvider.
                
            //Default
    
                when('/accueil', {
                  templateUrl: angular.module('defaultApp').path + 'Views/accueil.html',
                  controller: '',
                  access: { requiredLogin: false },
                }).
                        
            //Otherwise

                otherwise({
                  redirectTo: '/accueil',
                  access: { requiredLogin: false }
                });
            }]);
})();