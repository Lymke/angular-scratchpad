(function(){
angular.module('userModule').factory('userService',['$http','$localStorage','$q','$location',function($http,$localStorage,$q,$location) {
        return{
            /*crud : function(){
                return $resource(appConfig.server + '/user-rest', { id: '@_id' }, {
                update: {
                  method: 'PUT' // this method issues a PUT request
                }
              });
            },*/
            logIn: function(user) 
            {  
                var deferred = $q.defer();
                var url = appConfig.server + "user/login";
                var datasPost = user;
                var serviceConf = appConfig.serviceConf;
                
                $http.post(url, datasPost, serviceConf).success(function (response)
                {   
                    if(response.bSuccess == true)
                    {   
                        $localStorage.satellizer_token = response.token;
                        $localStorage.user = response.oUser;
                        //$localStorage.isNewUser = false;
                        //$localStorage.isUnAuthorizedUser = false;
                    }
                    
                    deferred.resolve(response);
                }).error(function (response) {
                    console.log(response);
                    deferred.reject(response);
                });
                return deferred.promise;
            },
            create : function(user)
            { 
                var deferred = $q.defer();
                var url = appConfig.server + "user/register";
                var datasPost = user;
                var serviceConf = appConfig.serviceConf;
                
                $http.post(url, datasPost, serviceConf).success(function (response)
                {   
                    deferred.resolve(response);
                }).error(function (response) {
                    console.log(response);
                    deferred.reject(response);
                });
                return deferred.promise;

            },
            isLogged : function()
            {   
                return !angular.isUndefined($localStorage.user);
            },
			logout : function()
            {   
                delete $localStorage.satellizer_token;
				delete $localStorage.user;
            },
            isAllowed : function(sRessource){
                bRes = false;
                console.log($localStorage.user);
                if(!angular.isUndefined($localStorage.user)){
                    switch(sRessource){
                        case 'update-skin' : 
                            if($localStorage.user.sRole == 'admin' || $localStorage.user.sRole == 'moderateur'){
                                bRes = true;
                            }
                        break;
                    }
                }
                return bRes;
            },
            getGravatar : function()
            {   if(!angular.isUndefined($localStorage.user)){
                    return $localStorage.user.gravatar;
                }else{
                    return false;
                }
            },
            userAuth : function(){
                return $localStorage.user;
            },
            sendValiderMail : function(){
                datas = {};
                return $http({
                                method: 'POST',
                                cache: false,
                                data: datas,
                                headers: {'Content-Type': 'application/json'},
                                url :  appConfig.serverUser  + 'send-valider-email'
                        });
            },
            validerMail : function(tocken){
                datas = { tocken : tocken};
                return $http({
                                method: 'POST',
                                cache: false,
                                data: datas,
                                headers: {'Content-Type': 'application/json'},
                                url :  appConfig.serverUser  + 'valider-email'
                        });
            },
			validateSummoner : function(){
                datas = {};
                return $http({
                                method: 'POST',
                                cache: false,
                                data: datas,
                                headers: {'Content-Type': 'application/json'},
                                url :  appConfig.serverUser  + 'valider-summoner'
                        });
            }
        };
}]);    

})();