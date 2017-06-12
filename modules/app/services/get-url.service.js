(function(){
    angular.module('myApp').factory('getUrlService',function($http,$q,$localStorage) 
    {
            return{
                getUrlVideoYoutube : function (videoId) 
                {   
                    return 'https://www.youtube.com/embed/' + videoId + '?rel=0';
                }
            };
    });    

})();