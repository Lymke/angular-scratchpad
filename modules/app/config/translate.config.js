(function () {
    angular.module('myApp').config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'languages/',
                suffix: '.json'
            });
            //$translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.preferredLanguage('fr_FR');
        }]);
})();  