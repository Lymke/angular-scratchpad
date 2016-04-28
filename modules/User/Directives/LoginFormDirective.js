(function () {
    angular.module('userModule').directive('loginFormDirective', function(){
         
        return {
            restrict: 'E',
            templateUrl: angular.module('userModule').path + 'templates/login-form-directive.html'
        };
    });
})();