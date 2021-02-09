<template>
  <div>
    <b-row class="welcome-container" align-v="center">
      <b-col cols="1">
        <button class="welcome" v-b-modal.welcome-message aria-labelledby="welcome-label"><font-awesome-icon icon="comment-alt" size="2x" role="presentation" /></button>
      </b-col>
      <b-col cols="11">
        <div id="welcome-label" class="text-center">{{ $t('label') }}</div>
      </b-col>
    </b-row>
    <b-modal id="welcome-message" :title="(($i18n.locale === 'en') ? 'Welcome to the Influencial Indigenous Women Timeline!' : 'Bienvenue à la Trame historique des femmes autochtones influentes!')" centered cancel-disabled :header-close-label="$t('close')" :ok-title="$t('close')" ok-only @hidden="welcomeHidden" size="lg" title-tag="h2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat neque nisl, et finibus ligula sodales vel. Phasellus a fermentum odio, nec vestibulum est. In ac orci sed lectus molestie suscipit at sit amet est. Ut a lorem et nisl finibus convallis at eu massa. Curabitur semper lorem vel ullamcorper cursus. Etiam ac venenatis tortor. Phasellus imperdiet non dui vitae rhoncus. Cras ante justo, accumsan et ante vitae, imperdiet mattis quam. Proin odio ipsum, scelerisque sed semper ut, dictum sed massa. Fusce vel eros nulla. Etiam porta ligula et urna ultrices venenatis. Curabitur eget est nec nisl laoreet volutpat.</p>
      <p>Nullam tempor justo in elementum dictum. Praesent sodales elit nec massa volutpat commodo. Fusce finibus libero ac tortor pellentesque, at gravida dui mollis. Nullam nec dui convallis, consectetur ex vitae, posuere orci. Pellentesque congue porttitor nisl in dapibus. Nam et neque pellentesque, suscipit augue nec, facilisis leo. Maecenas dignissim, tortor quis faucibus volutpat, leo nisl egestas orci, fringilla finibus felis sapien sit amet tortor. Maecenas vitae nisi ornare, faucibus justo id, fringilla ligula. Praesent lacinia nisl eu nibh sollicitudin, in semper lorem dictum. Donec porttitor consectetur porta. Praesent sit amet rutrum leo. Vestibulum eleifend ultricies ligula, at tristique sapien imperdiet quis. Ut molestie ligula nisl, et malesuada tortor eleifend non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam at varius ligula, vulputate finibus nulla. Pellentesque bibendum vulputate magna, id suscipit nisi molestie non.</p>
      <p>Pellentesque sed tortor non odio vulputate mollis in id nunc. Quisque finibus aliquam eros, eget mollis ligula venenatis a. Vivamus iaculis lacus sed efficitur ullamcorper. Praesent eu malesuada justo. Ut faucibus erat varius, ullamcorper libero id, elementum felis. Etiam ex magna, porta eget tincidunt in, semper at lacus. Morbi rutrum sagittis lacus, vitae dignissim sapien condimentum id. Etiam egestas mi quis quam scelerisque dictum. Sed in metus tristique, placerat sapien ut, cursus est. Morbi bibendum et mi id convallis. Sed cursus sapien quis libero ornare ullamcorper. Maecenas gravida rutrum bibendum. Aenean ac placerat magna. Vivamus ac vehicula erat. Maecenas rhoncus ornare felis vel pellentesque.</p>
      <tip>{{ $t('closeTip') }}</tip>
    </b-modal>
  </div>
</template>

<script>

  import Tip from '~/components/tip.vue';

  export default{
    components: {
      Tip
    },

    data(){
      return{
        
      }
    },

    computed: {
      showWelcomeOnLoad: {
        get() {
          return this.$store.state.welcome.showWelcomeOnLoad;
        }
      }
    },

    methods: {
      welcomeHidden(){
        this.$store.commit('welcome/setShowWelcomeOnLoad', false);
      }
    },

    mounted(){
      if(this.showWelcomeOnLoad){
        this.$bvModal.show("welcome-message");
      }
    }
  }

</script>

<style lang="scss">

  .welcome-container{
    position: relative;
    right: 0;

    @media (min-width: 576px){
      right: calc(((100vw - 540px) / 2) - 35px);
    }
    @media (min-width: 768px){
      right: calc(((100vw - 720px) / 2) - 35px);
    }
    @media (min-width: 992px){
      right: calc(((100vw - 960px) / 2) - 35px);
    }
    @media (min-width: 1200px){
      right: calc(((100vw - 1140px) / 2) - 35px);
    }

    .welcome{
      background-color: white;
      border-radius: 50%;
      color: black;
      width: 70px;
      height: 70px;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
      border: none;
      display: block;
      position: relative;
      
      transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -webkit-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -moz-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -o-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -ms-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;

      &:hover, &:focus{
        transform: scale(0.95);
        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.05);
        background-color: #f5f5f5;
      }
      svg{
        position: absolute;
        left: 19px;
        top: 20px;
      }
    }
  }

  #welcome-label{
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 5px;
    padding: 3px 10px;
    display: inline;
    position: relative;
    left: 50px;

    @media (min-width: 576px){
      left: 45px;
    }
    @media (min-width: 768px){
      left: 30px;
    }
    @media (min-width: 992px){
      left: 10px;
    }
    @media (min-width: 1200px){
      left: -5px;
    }
    

    &:before{
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: -11.5px;
      top: calc(50% - 7px);
      border-top: 7px solid transparent;
      border-right: 11.5px solid rgba(0, 0, 0, 0.7);
      border-bottom: 7px solid transparent;
    }
  }

  #welcome-message{
    h2{
      font-size: 1.7em;
      line-height: 1.2;
    }
    .modal-footer button{
      background-color: black;
      color: white;

      &:hover, &:focus{
        background-color: #222;
      }
    }
  }

</style>

<i18n>

  {
    "en": {
      "label": "Welcome Message",

      "close": "Close",
      "closeTip": "To get back to this message, select the icon in the top-left corner of the page."
    },
    "fr": {
      "label": "Message de bienvenue",

      "close": "Fermer",
      "closeTip": "Pour revoir ce message, sélectionnez l'icône dans le coin supérieur gauche de la page."
    }
  }

</i18n>