(function () {
    angular.module('myApp').directive('videoYoutube', [function(){
         
        return {
            restrict: 'E',
            templateUrl: angular.module('myApp').path + 'templates/video-youtube.html',
            scope : {
               widthYoutube : '@',
               heightYoutube : '@',
               urlYoutube : '@'
            }
        };
    }]);
})();