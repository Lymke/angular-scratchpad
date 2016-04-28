(function () {

    angular.module('layoutModule').factory('menuService', ['$http', function menuService($http) {

            return{
                getMenuLeft: function () {
                    return $http.get(angular.module('layoutModule').path + 'data/menu-left.json');
                },
                getMenuRight: function () {
                    return $http.get(angular.module('layoutModule').path + 'data/menu-right.json');
                },
                getMenuRightConnected: function () {
                    return $http.get(angular.module('layoutModule').path + 'data/menu-right-connected.json');
                }
            };

        }]);

})();