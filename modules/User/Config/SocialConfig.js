(function () {
    angular.module('userModule')
            .config(['$authProvider',function ($authProvider) {
                console.log(window.location.origin);
                //Surcharge de la config
                //$authProvider.httpInterceptor = function() { return true; }
                //$authProvider.withCredentials = true;
                //$authProvider.tokenRoot = null;
                //$authProvider.cordova = false;
                //$authProvider.baseUrl = '/';
                //$authProvider.loginUrl = '/auth/login';
                $authProvider.signupUrl = '';
                //$authProvider.unlinkUrl = '/auth/unlink/';
                $authProvider.tokenName = 'token';
                //$authProvider.tokenPrefix = 'satellizer';
                //$authProvider.authHeader = 'Authorization';
                //$authProvider.authToken = 'Bearer';
                //$authProvider.storageType = 'localStorage';

                    
                    
                // Facebook
                $authProvider.facebook(socialConfig.facebook);    
                $authProvider.twitter(socialConfig.twitter);
                $authProvider.google(socialConfig.google);
                $authProvider.github(socialConfig.github);
                $authProvider.linkedin(socialConfig.linkedin);
                $authProvider.live(socialConfig.live);
                $authProvider.bitbucket(socialConfig.bitbucket);
                $authProvider.instagram(socialConfig.instagram);
                $authProvider.yahoo(socialConfig.yahoo);
                $authProvider.twitch(socialConfig.twitch);

/*
              

                // No additional setup required for Twitter

                $authProvider.oauth2({
                    name: 'foursquare',
                    url: '/auth/foursquare',
                    clientId: 'Foursquare Client ID',
                    redirectUri: window.location.origin,
                    authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
                });*/

            }]);
})();