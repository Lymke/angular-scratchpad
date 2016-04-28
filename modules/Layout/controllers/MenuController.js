(function () {

    angular.module('layoutModule').controller('menuController', ['$scope','menuService', function ($scope,menuService) {

            menuService.getMenuLeft().success(function (data)
            {
                $scope.menusLeft = data;
            });

            menuService.getMenuRight().success(function (data)
            {
                $scope.menusRight = data;
            });

            menuService.getMenuRightConnected().success(function (data)
            {
                $scope.menusRightConnected = data;
            });

        }]);

})();