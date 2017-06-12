(function(){
    
    angular.module('userModule').controller('registerController',['$scope','$location','userService','$localStorage','vcRecaptchaService',
                                                     function($scope,$location,userService,$localStorage,vcRecaptchaService){
       
   
       $scope.user = {};
       $scope.recaptcha = appConfig.recaptcha;
       
       $scope.bBadCaptcha = false;
       
       $scope.isUnAuthorizedUser = function(){
           return $localStorage.isUnAuthorizedUser;
       },
       $scope.isNewUser = function(){
           return $localStorage.isNewUser;
       },
               
       $scope.recaptcha = appConfig.recaptcha;

       $scope.createUser = function(){
           
                if(vcRecaptchaService.getResponse() === "")
                { 
                    $scope.bBadCaptcha = true;
                }
                else
                {   $scope.user.grecaptcharesponse = vcRecaptchaService.getResponse();
                    userService.create($scope.user).then(function (response)
                    {  
                        if(response.bSuccess){
                            $localStorage.isNewUser = true;
                            $location.path('/login');
                        }else if(response.sMessage == "loginExist"){
                            $scope.login_existe = true;
                        }
                    });
                }
       };
       
       
       
    }]);
    
})();