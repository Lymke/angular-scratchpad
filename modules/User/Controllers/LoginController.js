(function () {

    angular.module('userModule').controller('loginController', ['$scope', '$location', 'userService', '$localStorage',
        function ($scope, $location, userService, $localStorage) {


            $scope.logIn = function () {

                userService.logIn($scope.user).then(function (response)
                {
                    if(response.bSuccess == true)
                    {   $scope.isLogged = true;
                        $localStorage.token = response.token;
                        $localStorage.user = response.oUser;
                        $localStorage.isNewUser = false;
                        $localStorage.isUnAuthorizedUser = false;
                        $location.path('/profil');
                    }
                    else
                    {   $scope.errorLogin = true;
                        console.log('Une erreur s\'est glissée dans le formulaire.');
                    }
                });
            };


        }]);

})();