(function(){
    angular.module('userModule').factory('tokenInterceptor', function ($q, $localStorage, $location ) {//AuthenticationService) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($localStorage.satellizer_token) {
                    //config.headers.Authorization = 'Bearer ' + $localStorage.satellizer_token;  
                    config.headers['x-session-token']= 'Bearer '+$localStorage.satellizer_token; 
                }else{
                    config.headers['x-session-token']= '';
                }                
                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            },

            /* Set Authentication.isAuthenticated to true if 200 received */
            response: function (response) {
                
                if (response != null && response.status == 200 && $localStorage.satellizer_token){ //&& !AuthenticationService.isAuthenticated) {
                    //AuthenticationService.isAuthenticated = true;
                }
                return response || $q.when(response);
            },

            /* Revoke client authentication if 401 / 403 is received */
            responseError: function(rejection) {

                if (rejection != null && (rejection.status === 401 || rejection.status === 403)){// || AuthenticationService.isAuthenticated)) {

					//401 : unauthorized
					//403 : forbiden
				
                    if($localStorage.satellizer_token) {
                        delete $localStorage.satellizer_token;
                    }

                    if($localStorage.user){
                        delete $localStorage.user;
                    }

                    $localStorage.errorHttpStatus = rejection.status;
                    $location.path("/user/login");
					
                }else if($localStorage.errorHttpStatus){
                    delete $localStorage.errorHttpStatus;
		}

                return $q.reject(rejection);
            }
        };
    });
})();