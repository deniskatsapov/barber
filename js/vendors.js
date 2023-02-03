/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));

var yWidget = {
    currentDomain: 'app.alteg.io',
    abPercentage: 0,
    abTestIsEnabled: false,

    loyaltyStatus: {
        hasCards: false,
        hasAbonements: false,
        hasCertificates: false,
    },

    sdkSource: 'https://n781920.alteg.io' + '/js-sdk/sdk.min.js',
    analyticUdidStoreKey: "analytics-udid",

    showNewWidgetAutomatically: false,
    id: '781920',
    href: 'https://n781920.alteg.io/',
    script_href: 'https://w781920.alteg.io',
    lang: 'rus',
    isNew: '1',

    counters: {
    },

    buttonPosition: 'bottom right',
    buttonColor: '#1c84c6',
    buttonAnimation: (1 == 1) ? true : false,
    formPosition: 'right',
    text: 'Онлайн запись',
    block: null,
    button: null,
    buttonAutoShow: (1 == 1) ? true : false,
    iFrame: null,
    cover: null,
    closeIcon: null,
    maxZIndex: 9999,
    isMobile: {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPod|iPad/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (yWidget.isMobile.Android() || yWidget.isMobile.BlackBerry() || yWidget.isMobile.iOS() || yWidget.isMobile.Opera() || yWidget.isMobile.Windows() || (window.innerWidth <= 600));
        }
    },
    mobileAndTabletcheck: function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    mobilecheck: function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    mobileEvent: ('ontouchstart' in window) ? true : false,
    clickevent: function () {
        //var event = yWidget.mobileAndTabletcheck() ? 'touchend' : 'click';
        var event = 'click';
        return event;
    },
    // addCSS: function () {
    //     var ss = document.createElement('link');
    //     ss.type = "text/css";
    //     ss.rel = "stylesheet";
    //     if (yWidget.isNew > 0) {
    //         ss.href = yWidget.script_href + "/css/ywidget/newweb.css?2";
    //     } else {
    //         ss.href = yWidget.script_href + "/css/ywidget/website.css?2";
    //     }
    //     document.getElementsByTagName('head')[0].appendChild(ss);
    // },


    isHasCookie: function (cookie) {
        return cookie.indexOf('yextrafield_') !== -1;
    },

    getYextraCookie: function () {
        return document.cookie.split(';').reduce(function (cookies, cookie) {
            var cookiesAsArray = cookie.split('=').map(function (c) { return c.trim() });
            var name = cookiesAsArray[0];
            var value = cookiesAsArray[1];

            if (yWidget.isHasCookie(name) === true) {
                cookies[name] = value;
            }

            return cookies;
        }, {});
    },


    buildSearchQuery: function (button) {

        var yextrafields = '';
        var gcid = '';
        var roistatVisitIdQuery = '';
        var cookie = yWidget.getCookie('_ga');
        if (cookie !== undefined) {
            try {
                var clientId = cookie.split('.')[2] + '.' + cookie.split('.')[3];
                gcid = 'gcid=' + clientId;

            } catch (e) {
                console.error(e);
            }
        }

        cookie = yWidget.getCookie('roistat_visit');

        if (cookie !== undefined) {
            roistatVisitIdQuery = 'roistat_visit=' + cookie;
        }

        if (yWidget.isHasCookie(document.cookie) === true) {
            var cookies = yWidget.getYextraCookie();
            var yextrafields = '';
            var i = 0;

            for (var k in cookies) {
                if (cookies.hasOwnProperty(k)) {
                    yextrafields += k + '=' + cookies[k] + (i !== (Object.keys(cookies).length - 1) ? '&' : '');
                }

                i += 1;
            }
        }

        return [gcid, yextrafields, roistatVisitIdQuery].filter(function (str) {
            return str && str.length;
        }).join('&')
    },

    createButton: function () {
        this.maxZIndex += 1;
        var button = document.createElement('a'),
            wave = yWidget.createButtonWave(),
            text = yWidget.createButtonText(),
            icon = yWidget.createButtonIcon(),
            background = yWidget.createButtonBackground();
        button.className = 'yButton';
        button.href = '#';
        button.style.zIndex = this.maxZIndex

        var position = yWidget.buttonPosition.split(' ');
        yWidget.addClass(position[0], button);
        yWidget.addClass(position[1], button);

        button.appendChild(background);

        if (yWidget.buttonAnimation) {
            button.appendChild(wave);
        }

        button.appendChild(text);
        button.appendChild(icon);

        yWidget.addClickEventToButton(button, true);

        document.getElementsByTagName('body')[0].appendChild(button);
        return button;
    },
    createButtonBackground: function () {
        var background = document.createElement('div');
        background.className = 'yButtonBackground';
        background.style.backgroundColor = yWidget.buttonColor;
        return background;
    },
    createButtonWave: function () {
        var wave = document.createElement('div');
        wave.className = 'yButtonWave';
        wave.style.borderColor = yWidget.buttonColor;
        wave.style.color = yWidget.buttonColor;
        return wave;
    },
    createButtonText: function () {
        var text = document.createElement('div');
        text.className = 'yButtonText';
        text.innerHTML = yWidget.text;
        return text;
    },
    createButtonIcon: function () {
        var icon = document.createElement('div');
        icon.className = 'yButtonIcon';
        return icon;
    },
    createWidgetBlock: function () {
        this.maxZIndex += 1;

        var block = document.createElement('div');
        block.className = 'yWidgetBlock-altegio';
        block.style.zIndex = this.maxZIndex;
        yWidget.addClass(yWidget.formPosition, block);
        document.getElementsByTagName('body')[0].appendChild(block);
        yWidget.iFrame = yWidget.createIFrame();
        block.appendChild(yWidget.iFrame);
        return block;
    },
    createWindowCover: function () {
        this.maxZIndex += 1;

        var cover = document.createElement('div');
        cover.className = 'yWidgetCover';
        cover.style.zIndex = this.maxZIndex
        cover.addEventListener('click', function (e) {
            e.preventDefault();
            yWidget.hide();
        }, false);
        document.getElementsByTagName('body')[0].appendChild(cover);
        return cover;
    },
    createIFrame: function () {
        var iFrame = document.createElement('iframe');
        iFrame.className = 'yWidgetIFrame';
        iFrame.setAttribute('frameborder', 0);
        iFrame.setAttribute('allowtransparency', 'true');
        iFrame.src = yWidget.href;
        return iFrame;
    },
    createCloseIcon: function () {
        this.maxZIndex += 1;

        var button = document.createElement('a');

        button.className = 'yCloseIcon';
        button.href = '#';
        button.style.zIndex = this.maxZIndex;
        yWidget.addClass(yWidget.formPosition, button);
        button.addEventListener(yWidget.click, function (e) {
            e.preventDefault();
            yWidget.hide();
        }, false);
        document.getElementsByTagName('body')[0].appendChild(button);
        return button;
    },
    fixWindowScroll: function (type) {
        if (type == 'hidden') {
            yWidget.addClass('yBodyOverflowHidden', document.getElementsByTagName('body')[0]);
        } else {
            yWidget.removeClass('yBodyOverflowHidden', document.getElementsByTagName('body')[0]);
        }
    },
    setConfing: function () {

        if (typeof yWidgetSettings != 'undefined') {
            if (typeof yWidgetSettings.buttonAutoShow != 'undefined') {
                yWidget.buttonAutoShow = yWidgetSettings.buttonAutoShow;
            }
            if (typeof yWidgetSettings.showNewWidgetAutomatically != 'undefined') {
                yWidget.showNewWidgetAutomatically = yWidgetSettings.showNewWidgetAutomatically;
            }
            if (typeof yWidgetSettings.buttonColor != 'undefined') {
                yWidget.buttonColor = yWidgetSettings.buttonColor;
            }
            if (typeof yWidgetSettings.buttonPosition != 'undefined') {
                yWidget.buttonPosition = yWidgetSettings.buttonPosition;
            }
            if (typeof yWidgetSettings.buttonAnimation != 'undefined') {
                yWidget.buttonAnimation = yWidgetSettings.buttonAnimation;
            }
            if (typeof yWidgetSettings.formPosition != 'undefined') {
                yWidget.formPosition = yWidgetSettings.formPosition;
            }
            if (typeof yWidgetSettings.buttonText != 'undefined') {
                yWidget.text = yWidgetSettings.buttonText;
            }
        }

    },

    showWidgetAutomatically: function (button) {
        url = button.dataset.url;
        yWidget.show(url);
    },

    setButtons: function () {
        var buttons = document.getElementsByClassName('ms-button');
        var old_buttons = document.getElementsByClassName('ms_booking');

        for (index = 0; index < buttons.length; ++index) {
            var button = buttons[index];
            yWidget.addClickEventToButton(button);
        }
        for (index = 0; index < old_buttons.length; ++index) {
            var old_button = old_buttons[index];
            yWidget.addClickEventToButton(old_button);
        }
    },
    addClickEventToButton: function (button, isDefault) {
        button.addEventListener(yWidget.click, function (e) {
            e.preventDefault();

            var url = url = yWidget.href;
            if (typeof this.dataset.url != 'undefined') {
                url = this.dataset.url;
            }

            if (button.search !== '') {
                url += url.indexOf('?') > -1 ? button.search.replace('?', '&') : button.search;
            }

            if (yWidget.isNew > 0) {
                url = url.replace('://w', '://n');
            }


            var searchQuery = yWidget.buildSearchQuery();
            var prefix = url.indexOf('?') > -1 ? '&' : '?';

            if (searchQuery) {
                url += prefix + searchQuery;
            }

            if (yWidget.analyticsUdid) {
                var prefixForUdid = url.indexOf('?') > -1 ? '&' : '?';

                url += prefixForUdid + 'sdkudid=' + yWidget.analyticsUdid
            }

            if (isDefault && window.analytics) {
                yWidget.trackButtonClick();
            }

            yWidget.show(url);
        }, false);
    },

    trackButton: function (type) {
        if (isSdkTrackingDisabled) return;

        window.analytics.track({
            type: type,
            name: 'button_record',
            // url: document.location.hostname,
            part_type: 'navigation',
            part_name: yWidget.buttonPosition ? yWidget.buttonPosition.split(' ').join('_') : 'bottom_right',
            element_type: 'button',
            element_name: 'button_record',
            element_version: 'old_navigation_button'
        });
    },

    trackButtonClick: function () {
        yWidget.trackButton('click')
    },

    trackButtonView: function () {
        yWidget.trackButton('view')
    },

    getCookie: function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");

        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }

        return undefined;
    },

    initCounters: function () {
    },

    isInt: function (n) {
        return Number(n) === n && n % 1 === 0;
    },


    reachButtonPressGoal: function () {
        if (!yWidget.counters) {
            return;
        }

    },




    bootstrapButton: function () {
        yWidget.initSdk()
        yWidget.setConfing();
        // yWidget.addCSS();
        yWidget.click = yWidget.clickevent();
        yWidget.setButtons();
        yWidget.initCounters();

        if (yWidget.buttonAutoShow) {
            yWidget.button = yWidget.createButton();

            yWidget.trackPageView();
            yWidget.trackButtonView();
        }

        yWidget.cover = yWidget.createWindowCover();
        yWidget.closeIcon = yWidget.createCloseIcon();

        if (yWidget.showNewWidgetAutomatically) {
            var buttons = document.getElementsByClassName('default-widget-button');
            if (buttons.length) {
                var button = buttons[0];
                yWidget.showWidgetAutomatically(button);
            }
        }
    },

    trackPageView: function () {
        if (isSdkTrackingDisabled) return;

        window.analytics.setPage('client_external_page')

        window.analytics.track({ type: 'page_view' });
    },


    // todo тут можно дорабатывать как нужно для задачи
    appendScript: function (source, onload) {
        let scriptElement = document.createElement('script');

        scriptElement.src = source;
        document.head.append(scriptElement);

        scriptElement.onload = onload;
    },

    alSdk: {
        getCookie: function (name) {
            let matches = document.cookie.match(new RegExp(
                '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));

            return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        setCookie: function (name, value, domain) {
            if (domain) {
                document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; Domain=' + domain + '; expires=Fri, 31 Dec 9999 23:59:59 GMT' + '; Path=/';
            } else {
                document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=Fri, 31 Dec 9999 23:59:59 GMT' + '; Path=/';
            }
        },

        makeId: function (length) {
            let result = "";
            let characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        },

        getMainDomainName: function () {
            return location.hostname.substring(
                location.hostname.lastIndexOf(
                    ".",
                    location.hostname.lastIndexOf(".") - 1
                ) + 1
            )
        }
    },

    getAnalyticsUdid: function () {
        let analyticsUdid = undefined;
        try {
            analyticsUdid = yWidget.alSdk.getCookie(yWidget.analyticUdidStoreKey);

            if (!analyticsUdid) {
                analyticsUdid = yWidget.alSdk.makeId(40);
                yWidget.alSdk.setCookie(yWidget.analyticUdidStoreKey, yWidget.analyticsUdid, {
                    expires: new Date().getFullYear(),
                    path: "/",
                    domain: yWidget.alSdk.getMainDomainName()
                });
            }
        } catch (e) {
            analyticsUdid =
                localStorage.getItem(yWidget.analyticUdidStoreKey) || "";

            if (analyticsUdid.length === 0) {
                analyticsUdid = yWidget.alSdk.makeId(40);
                localStorage.setItem(yWidget.analyticUdidStoreKey, analyticsUdid);
            }
        }

        return analyticsUdid;
    },

    // todo код может внутри поменяться по требованиям аналитиков
    //  пока он не используется и для примера,
    //  так как пока нужно от SDK только получать группу
    //   будет нужен когда будем использовать треки внутри текущей кнопки
    initSdk: function () {
        if (isSdkTrackingDisabled) return

        try {
            window.analytics.init(
                {
                    name: 'client.superbutton',
                    type: 'SUPERBUTTON',
                    version: '1.0.0'
                },
                {
                    httpUrl: 'https://tracks.alteg.io/api/v1',
                    enableGeolocation: false
                }
            );

            let analyticsUdid = yWidget.getAnalyticsUdid();


            if (analyticsUdid) {
                yWidget.analyticsUdid = analyticsUdid

                window.analytics.addLabel({
                    cookie: {
                        udid: analyticsUdid
                    }
                });
            }

            window.analytics.addLabel({
                bookform: {
                    widget: { id: parseInt(yWidget.id, 10) }
                }
            });

            window.analytics.setPage('client_page');

        } catch (e) {
            console.error('cant init js-sdk');
        }
    },

    // loadSuperButton: function () {
    //     // Фикс кнопок предпросмотра
    //     yWidget.addCSS();
    //     yWidget.click = yWidget.clickevent();
    //     yWidget.setButtons();
    //     yWidget.cover = yWidget.createWindowCover();
    //     yWidget.closeIcon = yWidget.createCloseIcon();

    //     /**
    //      * Возможно тут лучше вызывать yWidget.setConfing() в будущем
    //      * Пока только подгружаем параметр buttonAutoShow из yWidgetSettings
    //      */
    //     if (typeof yWidgetSettings != 'undefined' && typeof yWidgetSettings.buttonAutoShow != 'undefined') {
    //         if (!yWidgetSettings.buttonAutoShow) {
    //             return;
    //         }
    //     } else if (!yWidget.buttonAutoShow) {
    //         return;
    //     }

    //     var outlet = document.createElement('div');
    //     outlet.dataset['superbutton'] = '';
    //     outlet.style.setProperty('z-index', '2147483646');
    //     document.body.appendChild(outlet);


    //     window.yClientsWidgetOptions = {
    //         target: outlet,
    //         widgetBaseUrl: 'https://n781920.alteg.io',
    //         companyId: '734308',
    //         widgetId: '781920',
    //         buttonPosition: yWidget.buttonPosition
    //     };

    //     var script = document.createElement('script');
    //     script.setAttribute('src', 'https://n781920.alteg.io/superbutton/superbutton.umd.min.js');
    //     script.setAttribute('async', '');
    //     document.head.appendChild(script);

    //     script.addEventListener('error', yWidget.bootstrapButton);
    // },

    // todo  init для включенного фича флага
    init: function () {
        if (window.__yButtonIsInited__) return;

        window.__yButtonIsInited__ = true;

        yWidget.appendScript(yWidget.sdkSource, function () {
            // todo если не мобила, не запускаем AB тест пока
            if (!yWidget.abTestIsEnabled || typeof yWidget.abPercentage !== 'number') {
                yWidget.bootstrapButton();
                return;
            }

            if (!window.analytics) {
                yWidget.bootstrapButton();
                return;
            }

            window.analytics.getAb().then(function (result) {
                let abGroup = parseInt(result.strong, 10);

                if (abGroup <= yWidget.abPercentage && yWidget.abPercentage > 0) {
                    yWidget.loadSuperButton();
                } else {
                    yWidget.bootstrapButton();
                }
            });
        });
    },

    /* todo init без включенного фича флага
    init: function() {
      this.bootstrapButton();
    },
    */



    show: function (url) {
        yWidget.reachButtonPressGoal();
        if (yWidget.isMobile.any()) {
            var str = '';
            //var str = '?from='+encode64(window.location.href);
            location.href = url;
            return false;
        }

        if (yWidget.block == null) {
            yWidget.block = yWidget.createWidgetBlock();
        }

        yWidget.removeClass('yWidgetHide', yWidget.block);
        yWidget.addClass('yWidgetShow', yWidget.block);
        yWidget.cover.style.display = 'block';
        yWidget.closeIcon.style.display = 'block';
        yWidget.fixWindowScroll('hidden');
        if (yWidget.iFrame.src != url) {
            yWidget.iFrame.src = '';
            setTimeout(function () {
                yWidget.iFrame.src = url;
            }, 250);
        }
        return false;
    },
    hide: function () {
        yWidget.removeClass('yWidgetShow', yWidget.block);
        yWidget.addClass('yWidgetHide', yWidget.block);
        yWidget.cover.style.display = 'none';
        yWidget.closeIcon.style.display = 'none';
        yWidget.fixWindowScroll('auto');
        yWidget.trackButtonView();
    },
    addClass: function (classname, element) {
        var cn = element.className;
        if (cn.indexOf(classname) != -1) {
            return;
        }
        if (cn != '') {
            classname = ' ' + classname;
        }
        element.className = cn + classname;
    },
    removeClass: function (classname, element) {
        var cn = element.className;
        var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
        cn = cn.replace(rxp, '');
        element.className = cn;
    }
};

var isSdkTrackingDisabled = location.href.includes(yWidget.currentDomain);

document.addEventListener('DOMContentLoaded', yWidget.init(), false);
