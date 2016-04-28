(function () {
    angular.module('traductionModule').config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: angular.module('traductionModule').path + '/Data/',
                suffix: '.json'
            });
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.preferredLanguage( 'fr_FR');
    }]);
})();