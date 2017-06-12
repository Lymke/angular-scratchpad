(function(){
    
    angular.module('userModule').controller('logoutController',['$scope','$http','vcRecaptchaService','$location','userService','$localStorage',
                                                     function($scope,$http,vcRecaptchaService,$location,userService,$localStorage){
            
        userService.logout();
    }]);
    
})();