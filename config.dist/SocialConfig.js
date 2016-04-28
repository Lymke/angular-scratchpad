var socialConfig = {
    facebook: {
        clientId: '*********************',
        //name: 'facebook',
        url: appConfig.server + 'user/facebook'
        //authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
        //redirectUri: window.location.origin + '/',
        //requiredUrlParams: ['display', 'scope'],
        //scope: ['email'],
        //scopeDelimiter: ',',
        //display: 'popup',
        //type: '2.0',
        //popupOptions: { width: 580, height: 400 }
    },
    twitter: {
		 clientId: '*************************',
        url:   appConfig.server + 'user/twitter'
                //authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
                //redirectUri: window.location.origin,
                //type: '1.0',
                //popupOptions: { width: 495, height: 645 }
    },
    google: {
        clientId: '****************************',
        url: appConfig.server + 'user/google'
                //authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
                //redirectUri: window.location.origin,
                //requiredUrlParams: ['scope'],
                //optionalUrlParams: ['display'],
                //scope: ['profile', 'email'],
                //scopePrefix: 'openid',
                //scopeDelimiter: ' ',
                //display: 'popup',
                //type: '2.0',
                //popupOptions: { width: 452, height: 633 }
    },
    github: {
        clientId: '****************************',
        url : appConfig.server + 'user/github'
                //authorizationEndpoint: 'https://github.com/login/oauth/authorize',
                //redirectUri: window.location.origin,
                //optionalUrlParams: ['scope'],
                //scope: ['user:email'],
                //scopeDelimiter: ' ',
                //type: '2.0',
                //popupOptions: { width: 1020, height: 618 }
    },
    linkedin: {
        clientId: '*******************************',
        url : appConfig.server + 'user/linkedin'
                //authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
                //redirectUri: window.location.origin,
                //requiredUrlParams: ['state'],
                //scope: ['r_emailaddress'],
                //scopeDelimiter: ' ',
                //state: 'STATE',
                //type: '2.0',
                //popupOptions: { width: 527, height: 582 }
    },
    live: {
        clientId: '**********************************',
        url : appConfig.server + 'user/windows'
                //authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
                //redirectUri: window.location.origin,
                //requiredUrlParams: ['display', 'scope'],
                //scope: ['wl.emails'],
                //scopeDelimiter: ' ',
                //display: 'popup',
                //type: '2.0',
                //popupOptions: { width: 500, height: 560 }
    },
	bitbucket: {
        clientId: '*******************************',
        url : appConfig.server + 'user/bitbucket'
                //authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
                //redirectUri: window.location.origin,
                //requiredUrlParams: ['display', 'scope'],
                //scope: ['wl.emails'],
                //scopeDelimiter: ' ',
                //display: 'popup',
                //type: '2.0',
                //popupOptions: { width: 500, height: 560 }
    },
	instagram : {
	  clientId: '***************************************',
	  url : appConfig.server + 'user/instagram'
	  //name: 'instagram',
	  //url: '/auth/instagram',
	  //authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
	  //redirectUri: window.location.origin,
	  //requiredUrlParams: ['scope'],
	  //scope: ['basic'],
	  //scopeDelimiter: '+',
	  //type: '2.0'
	},
	yahoo : {
	  clientId: '*********************',
	  url : appConfig.server + 'user/yahoo'
	  //url: '/auth/yahoo',
	  //authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
	  //redirectUri: window.location.origin,
	  //scope: [],
	  //scopeDelimiter: ',',
	  //type: '2.0',
	  //popupOptions: { width: 559, height: 519 }
	},
	twitch : {
	  clientId: '*********************************',
	  url : appConfig.server + 'user/twitch'
	  //url: '/auth/twitch',
	  //authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
	  //redirectUri: window.location.origin,
	  //requiredUrlParams: ['scope'],
	  //scope: ['user_read'],
	  //scopeDelimiter: ' ',
	  //display: 'popup',
	  //type: '2.0',
	  //popupOptions: { width: 500, height: 560 }
	}

}