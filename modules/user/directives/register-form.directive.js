(function () {
    angular.module('userModule').directive('registerFormDirective', function(){
         
        return {
            restrict: 'E',
            templateUrl: angular.module('userModule').path + 'templates/register-form-directive.html'
        };
    });
})();