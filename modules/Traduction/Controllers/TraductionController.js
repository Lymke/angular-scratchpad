(function(){
    
    angular.module('traductionModule').controller('traductionController',
    ['$scope','traductionService',
    function($scope,traductionService)
    { 
        $scope.toggleLanguage = function(sLang) {
            traductionService.toggleLanguage(sLang);
        };
    }]);
    
})();

