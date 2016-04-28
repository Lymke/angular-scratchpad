(function(){
    
    angular.module('userModule').config(['$locationProvider', '$routeProvider',
            function($location, $routeProvider) {
              $routeProvider.

                when('/user/register', {
                  templateUrl: angular.module('userModule').path + 'Views/register.html',
                  controller: 'registerController',
                  access: { requiredLogin: false,requireNotLogin:true },
                  themepage : ""
                }).
                        
                when('/user/login', {
                  templateUrl: angular.module('userModule').path + 'Views/login.html',
                  controller: 'loginController',
                  access: { requiredLogin: false,requireNotLogin:true },
                  themepage : ""
                }).
                when('/user/logout', {
                  templateUrl: angular.module('userModule').path + 'Views/logout.html',
                  controller: 'logoutController',
                  access: { requiredLogin: false,requireNotLogin:false }
                }).
                when('/user/profil', {
                  templateUrl: 'modules/user/views/profil.html',
                  controller: 'profilController',
                  access: { requiredLogin: true,requireNotLogin:false },
                  themepage : "profil"
                });
                
            }]);
})();