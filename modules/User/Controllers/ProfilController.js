(function(){
    
    angular.module('userModule').controller('profilController',['$scope','$http','vcRecaptchaService','$location','userService','$localStorage',
                                                     function($scope,$http,vcRecaptchaService,$location,userService,$localStorage){
            
        $scope.user = $localStorage.user;

        $scope.validateLogin = function(){
            alert('validate login ! ');
        };
        
        $scope.validateLolLogin = function(){
            alert('validate lol login ! ');
        };

        /*$scope.bFailSummonerValidated = 0;
        $scope.patienter = 0;
        
        $scope.sendValidEmail = function(){

            userService.sendValiderMail()
                       .success(function (data){   
                            $scope.bMailSent = 1;
                        })
                       .error(function(data, status, headers, config) {
                                console.log(data);
                                console.log(status);
                                console.log(headers);
                                console.log(config);
                        });
        };
		
	$scope.validateSummoner = function(){
            $scope.patienter = 1;
            userService.validateSummoner()
                       .success(function (data){  
                            if(data.success){
				$scope.bFailSummonerValidated = 0;
				$scope.bSummonerValidated = 1;
				$scope.user.lol_validated = 1;
				$scope.user.runes = data.runes;
				$localStorage.user = $scope.user;
                            }else{
				$scope.bFailSummonerValidated = 1;				
                            }
                            $scope.patienter = 0;
                            
                        })
                       .error(function(data, status, headers, config) {
                                console.log(data);
                                console.log(status);
                                console.log(headers);
                                console.log(config);
                                $scope.patienter = 0;
                        });
        };*/
       
    }]);
    
})();