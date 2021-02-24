<template>
  <Nuxt />
</template>

<script>

  export default{

    head() {
      return {
        htmlAttrs: { lang: this.$i18n.locale },
        title: (this.$i18n.locale=="en") ? "Influencial Indigenous Women Timeline" : "Trame historique des femmes autochtones influentes"
      }
    },

    data(){
      return{

      }
    },

    methods:{
      detectBrowser(){
        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';

        // Safari 3.0+ "[object HTMLElementConstructor]" 
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;

        // Chrome 1 - 79
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

        // Edge (based on chromium) detection
        var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

        // Blink engine detection
        var isBlink = (isChrome || isOpera) && !!window.CSS;

        var output = 'Detecting browsers by ducktyping:<hr>';
        output += 'isFirefox: ' + isFirefox + '<br>';
        output += 'isChrome: ' + isChrome + '<br>';
        output += 'isSafari: ' + isSafari + '<br>';
        output += 'isOpera: ' + isOpera + '<br>';
        output += 'isIE: ' + isIE + '<br>';
        output += 'isEdge: ' + isEdge + '<br>';
        output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
        output += 'isBlink: ' + isBlink + '<br>';

        if(isFirefox){
          $("html").addClass("firefox");
        }
        else if(isChrome){
          $("html").addClass("chrome");
        }
        else if(isSafari){
          $("html").addClass("safari");
        }
        else if(isOpera){
          $("html").addClass("opera");
        }
        else if(isIE){
          $("html").addClass("ie");
        }
        else if(isEdge){
          $("html").addClass("edge");
        }
        else if(isEdgeChromium){
          $("html").addClass("edge-chromium");
        }
        else if(isBlink){
          $("html").addClass("blink");
        }
      }
    },

    mounted(){
      this.detectBrowser();
    }
  }

</script>

<style lang="scss">

  //Colors
  $beige: #f9e0c8;
  $blue: #10A5E5;
  $orange: #FF670F;
  $red: #891111;
  $green: #175A07;

  html, body{
    margin: 0;
    padding: 0;
  }

  body{
    font-family: "Titillium Web";
    font-weight: 500;

    position: relative;
  }

  //Fix for background-attachement: fixed; on phones
  html:not(.ie) body:after {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-image: url("~assets/background2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #000;
    background-position: center center;
    z-index: -1;
  }

  //The previous fix causes problems on IE (of course...), so we're just setting the background as usual
  html.ie body{
    background: url("~assets/background2.jpg");
    background-attachment: fixed;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
  }

  .v-inv {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }

  a.external {
    text-decoration: underline;
    color: #007bff;

    &:hover, &:focus{
      text-decoration: none!important;
      cursor: pointer;
    }
    
    &:after{
      background: url("../assets/icon_external_link.svg");
      background-size: contain;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
      overflow:hidden;
      color:transparent;
      display: inline-block;
      margin-left: 3px;
    }
  }

  html[lang="en"] a.external:after{
    content: "(This content will open in a new window)";
  }
    
  html[lang="fr"] a.external:after{
    content: "(Ce contenu ouvrira dans une nouvelle fenêtre)";
  }

</style>

<i18n>

  {
    "en": {

    },
    "fr": {

    }
  }

</i18n>
