//GTM id - originally belongs to index
//var propertyGtmId = 'GTM-{ID}'; exploded from GTM-ID

//Works the same for Google Analytics, Advertising or Marketing scripts etc.

var config = {
    apiKey: '[INSERT API KEY HERE]',
    product: 'PRO_MULTISITE',
    initialState: "notify",
    notifyOnce: false,
    position: "LEFT",
    theme: "LIGHT",
    layout: "slideout",
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
    },
    text : {
      title: 'This website uses cookies to remember users and understand ways to enhance their experience.',
      intro: 'Some cookies are necessary, while other cookies help us improve your experience, while you are navigating through our website. For further information, please visit our Cookie Policy.',
      acceptRecommended: 'Accept Cookies',
      necessaryTitle: 'Manage Cookie Preferences',
      necessaryDescription: '<strong>Strictly Necessary Cookies</strong> are essential for our website to function properly, for instance authenticating logins or serving files, crucial for the core functionality. You can only disable necessary cookies via browser settings but if you do, our website might not be properly functional for your needs.',
      notifyDescription: 'We use cookies to optimize site functionality and give you the best possible experience. Learn more.'
    },
    consentCookieExpiry: 90,
    optionalCookies: [
      {
        name: 'performance',
        label: 'Performance Cookies',
        description: 'Performance cookies help us to improve our website by collecting and reporting information, on its usage.',
        cookies: ['_dc_gtm_UA*','_ga','_gid','GPS','YSC','wistia-http2-push-disabled','di2','loc','ouid','uid','uvc','vc','TapAd_DID ','TapAd_TS ','1P_JAR','phpbb3_cnuw4_k','d','mc','KADUSERCOOKIE','KTPCACOOKIE','__utma','__utmb','__utmc','__utmz','AMCVS_','AMCVS_','AMCV_','PP','PPP','_gat_partnerTracker','_gat_spreadshirtTracker','demdex','uvts'],
        onAccept: function() {
          if((typeof propertyGtmId !== 'undefined')){
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',propertyGtmId);
          }
         },
        onRevoke: function() {
          CookieControl.delete('_dc_gtm_UA*');
          CookieControl.delete('_ga');
          CookieControl.delete('_gid');
          CookieControl.delete('GPS');
          CookieControl.delete('YSC');
          CookieControl.delete('wistia-http2-push-disabled');
          CookieControl.delete('di2');
          CookieControl.delete('loc');
          CookieControl.delete('ouid');
          CookieControl.delete('uid');
          CookieControl.delete('uvc');
          CookieControl.delete('vc');
          CookieControl.delete('TapAd_DID');
          CookieControl.delete('TapAd_TS');
          CookieControl.delete('1P_JAR');
          CookieControl.delete('phpbb3_cnuw4_k');
          CookieControl.delete('d');
          CookieControl.delete('mc');
          CookieControl.delete('KADUSERCOOKIE');
          CookieControl.delete('KTPCACOOKIE');
          CookieControl.delete('__utma');
          CookieControl.delete('__utmb');
          CookieControl.delete('__utmc');
          CookieControl.delete('__utmz');
          CookieControl.delete('AMCVS_');
          CookieControl.delete('AMCV_');
          CookieControl.delete('AMCVS_');
          CookieControl.delete('PP');
          CookieControl.delete('PPP');
          CookieControl.delete('_gat_partnerTracker');
          CookieControl.delete('demdex');
          CookieControl.delete('uvts');
        },
        recommendedState: true
      },
      {
        name: 'functionality',
        label: 'Functionality Cookies',
        description: 'Functionality cookies are responsible for the partial functionality of this website during your navigation. By deactivating them, you might have limited access on our or third party website\'s features.',
        cookies: ['PREF','VISITOR_INFO1_LIVE','rl_modals','__distillery','AWSALB','__atuvc','__atuvs','MoodleSession','ct_checkjs','ct_fkp_timestamp','ct_pointer_data','ct_ps_timestamp','ct_timezone','__utmt','_sdsat_BasketAmountItems','affiliate','any_affiliate','direct_affiliate','s_cc','s_cc','s_sq','_rf','_uservoice_tz','_uvsid'],
        onAccept: function() {},
        onRevoke: function() {
          CookieControl.delete('PREF');
          CookieControl.delete('VISITOR_INFO1_LIVE');
          CookieControl.delete('rl_modals');
          CookieControl.delete('__distillery');
          CookieControl.delete('AWSALB');
          CookieControl.delete('__atuvc');
          CookieControl.delete('__atuvs');
          CookieControl.delete('MoodleSession');
          CookieControl.delete('ct_checkjs');
          CookieControl.delete('ct_fkp_timestamp');
          CookieControl.delete('ct_pointer_data');
          CookieControl.delete('ct_ps_timestamp');
          CookieControl.delete('ct_timezone');
          CookieControl.delete('__utmt');
          CookieControl.delete('_sdsat_BasketAmountItems');
          CookieControl.delete('affiliate');
          CookieControl.delete('any_affiliate');
          CookieControl.delete('direct_affiliate');
          CookieControl.delete('s_cc');
          CookieControl.delete('s_sq');
          CookieControl.delete('_rf');
          CookieControl.delete('_uservoice_tz');
          CookieControl.delete('_uvsid');
        },
        recommendedState: true
      },
      {
        name: 'advertising',
        label: 'Advertising',
        description: 'Advertising cookies help you see some ads based on your preferences. Joomla! serves or hosts ads as they are one of its major financial support.',
        cookies: ['OAID','IDE','ck1','drtn*','rlas3','rtn1-z','fr','everest_g_v2','everest_session_v2','gglck','NID','na_id','na_tc','id','mdata','dpm'],
        onAccept: function() {},
        onRevoke: function() {
          CookieControl.delete('OAID');
          CookieControl.delete('IDE');
          CookieControl.delete('ck1');
          CookieControl.delete('drtn*');
          CookieControl.delete('rlas3');
          CookieControl.delete('rtn1-z');
          CookieControl.delete('fr');
          CookieControl.delete('everest_g_v2');
          CookieControl.delete('everest_session_v2');
          CookieControl.delete('gglck');
          CookieControl.delete('NID');
          CookieControl.delete('na_id');
          CookieControl.delete('na_tc');
          CookieControl.delete('id');
          CookieControl.delete('mdata');
          CookieControl.delete('dpm');
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
    statement: {}
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
