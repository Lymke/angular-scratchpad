(function () {
    angular.module('myApp').config(['$sceDelegateProvider', function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(appConfig.aWhitelist);
        }]);
})();  