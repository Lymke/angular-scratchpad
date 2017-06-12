(function(){
    angular.module('myApp').factory('traductionService',['$http','$q','$localStorage','$translate',function($http,$q,$localStorage,$translate) 
    {
            return{
                toggleLanguage : function(lang){
                    $translate.use(lang);
                    $localStorage.lang = lang;
                    return true;
                }
            };
    }]);    

})();