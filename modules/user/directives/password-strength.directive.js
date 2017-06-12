(function () {
    angular.module('userModule').directive('passwordStrengthDirective', function () {

        return {
            require: 'ngModel',
            restrict: 'E',
            scope: {
                pwd: '=ngModel'
            },
            templateUrl: angular.module('userModule').path + 'templates/password-strength-directive.html',
            link: function (scope, element, attrs) {
                scope.$watch('pwd', function(pwd) {
                    scope.pwdstrength = 0;
                    if (!angular.isUndefined(pwd))
                    {
                        //1) if txtpass bigger than 6 give 1 point
                        if (pwd.length > 0)
                        {
                            scope.pwdstrength++;
                        }
                        
                        //2) if txtpass bigger than 6 give 1 point
                        if (pwd.length > 6)
                        {
                            scope.pwdstrength++;
                        }
                            
                        //3) if txtpass has both lower and uppercase characters give 1 point
                        if ((pwd.match(/[a-z]/)) && (pwd.match(/[A-Z]/)))
                        {
                            scope.pwdstrength++;
                        }

                        //4) if txtpass has at least one number give 1 point
                        if (pwd.match(/\d+/))
                        {
                            scope.pwdstrength++;
                        }
       
                        //5) if txtpass has at least one special caracther give 1 point
                        if (pwd.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))
                        {
                            scope.pwdstrength++;
                        }
                        
                        //6) if txtpass bigger than 12 give another 1 point
                        if (pwd.length > 12)
                        {
                            scope.pwdstrength++;
                        }

                        scope.pwdstrength = (scope.pwdstrength / 6) * 100;
                    }  
                });
                
            }
        };
    });
})();