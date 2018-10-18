var config = {
		apiKey: '[INSERT API KEY HERE]',
		product: 'PRO_MULTISITE',
		initialState: "notify",
      	notifyOnce: false,
		position: "LEFT",
		theme: "LIGHT",
		layout: "slideout",
        text : {
          title: 'This website uses cookies to remember users and understand ways to enhance their experience.',
          intro: 'Some cookies are necessary, while other cookies help us improve your experience, while you are navigating through our website. For further information, please visit our <a href="https://www.joomla.org/privacy-policy.html" target="_blank">Privacy Policy</a>.',
          acceptRecommended: 'Accept Cookies',
          necessaryTitle: 'Manage Cookie Preferences',
          necessaryDescription: '<strong>Strictly Necessary Cookies</strong> are essential for our website to function properly, for instance authenticating logins or serving files, crucial for the core functionality. You can only disable necessary cookies via browser settings but if you do, our website might not be properly functional for your needs.',
          notifyDescription: 'We use cookies to optimize site functionality and give you the best possible experience. Learn more.'
                  },
		consentCookieExpiry: 90,
		optionalCookies: [{
				name: 'performance',
				label: 'Performance Cookies',
				description: 'Performance cookies help us to improve our website by collecting and reporting information, on its usage.',
				cookies: ['_dc_gtm_UA*','_ga','_gid'],
				onAccept: function() {},
				onRevoke: function() {
					// Disable Google Analytics
					//window['ga-disable-UA-xxxxx'] = true;
					// End Google Analytics
					CookieControl.delete('_dc_gtm_UA*');
					CookieControl.delete('_ga');
					CookieControl.delete('_gid');
				},
				recommendedState: true
			},
			{
				name: 'advertising',
				label: 'Advertising',
				description: 'Advertising cookies help you see some ads based on your preferences. Joomla! serves or hosts ads as they are one of its major financial support.',
				cookies: ['IDE'],
				onAccept: function() {},
				onRevoke: function() {
					CookieControl.delete('IDE');
				},
              recommendedState: true
			},
            {
            	name: 'accept',
                label: ' ',
                description: '<a href="" onclick="CookieControl.hide();">Continue to site</a>',
              	toggleType: 'checkbox'
            }   
		],
		statement: {},
        branding : {
        fontColor: "#fff",
        fontSizeTitle: "1.1em",
        fontSizeIntro: "1em",
        fontSizeHeaders: "1em",
        fontSize: "0.95em",
        backgroundColor: '#1a3867',
        toggleText: '#000',
        toggleColor: '#ccc',
        toggleBackground: '#fff',
        buttonIcon: null,
        buttonIconWidth: "64px",
        buttonIconHeight: "64px",
        removeIcon: false,
        removeAbout: true
      }
	};
    window.addEventListener("load", function(){
          CookieControl.load( config );
          var removex = document.getElementById('ccc-notify-dismiss');
          if (removex) {
            dismissIcon.remove(); // remove the click function if element exists
          }
			
          //if type is closed the cookie notice is not accepted. if it is notify, then it is accepted.
            if (JSON.parse(CookieControl.getCookie('CookieControl')).initialState.type == 'closed') {
            CookieControl.open();
          }
        });      
          //alternative try
            /* if (document.getElementById('ccc-notify').style=="visibility:hidden"){
                //alert ("this just a test!");  
                CookieControl.open();
              }*/	

        