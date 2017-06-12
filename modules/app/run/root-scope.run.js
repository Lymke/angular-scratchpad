(function () {
    angular.module('myApp').run(['$rootScope', '$location', '$localStorage', 'getUrlService', 'traductionService',
        function ($rootScope, $location, $localStorage,getUrlService,traductionService) {
            $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
                $rootScope.themepage = "";
                $rootScope.TraductionService = traductionService;
                $rootScope.getUrlService = getUrlService;
                $localStorage.lang = 'fr_FR';
                if(nextRoute.themepage != undefined){
                    $rootScope.themepage = "theme-"+nextRoute.themepage;
                }

            });
        }]);
})();