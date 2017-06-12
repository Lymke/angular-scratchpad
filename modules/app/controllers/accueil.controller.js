(function(){
    
    angular.module('myApp')
           .controller('accueilController',
            ['getUrlService','$scope','$routeParams','$http','$location','$localStorage',
    function(getUrlService,$scope,$routeParams, $http,$location,$localStorage)
    {   
        $scope.videos = [];
        $scope.getUrlService = getUrlService;
                             
       
            
    }]);
    
})();