(function () {

    angular.module('layoutModule').controller('DropdownCtrl', function($scope) {

        
    });
    angular.module('layoutModule').controller('menuController', ['$scope','menuService', function ($scope,menuService) {

            menuService.getMenuLeft().then(function onSuccess(response) {
                $scope.menusLeft = response.data;
            });

            menuService.getMenuRight().then(function onSuccess(response) {
                $scope.menusRight = response.data;
            });

            menuService.getMenuRightConnected().then(function onSuccess(response) {
                $scope.menusRightConnected = response.data;
            });


              $scope.items = [
                    'The first choice!',
                    'And another choice for you.',
                    'but wait! A third!'
                ];

                $scope.status = {
                    isopen: false
                };

                $scope.toggled = function(open) {
                    
                };

                $scope.toggleDropdown = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.isopen = !$scope.status.isopen;
                };

                $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));


        }]);

})();