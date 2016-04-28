(function () {

    angular.module('userModule').controller('socialController',
            ['$scope', '$auth', '$localStorage', '$location',
                function ($scope, $auth, $localStorage, $location)
                {
                    $scope.socialLoading = false;
                    
                    $scope.authenticate = function (provider) {
                        
                        $scope.socialLoading = true;
                        $auth.authenticate(provider)
                            .then(function (response) {
                                //console.log('Response : ',response);
                                $localStorage.user = response.data.oUser;
                                $scope.socialLoading = false;
                                $location.path('/profil');
                            })
                            .catch(function (response) {
                                        // Something went wrong.
                            });
                    };
                }]);

})();

