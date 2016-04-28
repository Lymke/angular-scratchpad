(function () {
    angular.module('defaultApp',
            [
                //Angular modules

                'ngRoute',
                'ngStorage',
                'ngSanitize',
                'ui.bootstrap',
		'satellizer',
                'pascalprecht.translate',
                'vcRecaptcha',
                
                //My modules
                'traductionModule',
                'layoutModule',
                'userModule',
            ]);

    angular.module('defaultApp').path = 'modules/App/';
/*
    angular.module('defaultApp').config(['$httpProvider', function ($httpProvider) {

            // Pour le cross domaine
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

    angular.module('defaultApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('TokenInterceptor');
    });
    
    //Config authent
    
        angular.module('defaultApp').run(['$rootScope', '$location', '$localStorage','UserService',
            function ($rootScope, $location, $localStorage,UserService) {
            $rootScope.$on('$routeChangeStart', function (event,nextRoute, currentRoute) {
                
                $localStorage.lang = 'fr_FR';
                
                //Si cette page requière une authentification et que l'utilisateur n'est pas connecté
                if (    !angular.isUndefined(nextRoute.access.requiredLogin) 
                     && nextRoute.access.requiredLogin 
                     && !UserService.isLogged()) 
                {   
                    $localStorage.isUnAuthorizedUser = true;
                    $location.path("/login");
                }
                
                //Si la page requière de ne pas être loggé alors que l'utilisateur est loggé
                else if (      !angular.isUndefined(nextRoute.access.requireNotLogin) 
                            && nextRoute.access.requireNotLogin
                            && UserService.isLogged()) 
                {
					
                    $location.path("/profil");
                }
                
                //Réinitialiser l'erreur d'authent à false si l'utilisateur a changé de page (dont il a le droit)
                else if(nextRoute.originalPath !== "/login")
                {   
                    $localStorage.isUnAuthorizedUser = false;
                }
                
        });
    }]);*/

})();              