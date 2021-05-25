<template>
  <div>
    <b-row class="suggest-container" align-v="center">
      <b-col cols="2" sm="1">
        <a :href="'https://survey-sondage.csps-efpc.gc.ca/jfe/form/SV_e4mPwy9QpkisQ98' + (($i18n.locale === 'fr') ? '?Q_Language=FR-CA' : '')" class="suggest" aria-labelledby="suggest-label" target="_blank" rel="external" :title="(($i18n.locale == 'en') ? 'Link to the questionnaire to suggest new influential women' : 'Lien vers le questionnaire pour suggérer de nouvelles femmes influentes')"><font-awesome-icon icon="users" size="2x" role="presentation" /></a>
      </b-col>
      <b-col cols="10" sm="11">
        <div id="suggest-label" class="text-center">{{ $t('label') }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  export default{
    components: {
      
    },

    data(){
      return{
        
      }
    },

    methods: {
      
    }
  }

</script>

<style lang="scss">

  .suggest-container{
    position: relative;
    right: 0;
    margin-top: 20px;

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

    .suggest{
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
        left: 16px;
        top: 18px;
      }
    }
  }

  #suggest-label{
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 5px;
    padding: 3px 10px;
    display: inline;
    position: relative;
    left: 35px;
    font-size: 0.7rem;

    @media (min-width: 576px){
      left: 45px;
      font-size: 1rem;
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

</style>

<i18n>

  {
    "en": {
      "label": "Suggest New Influential Women",
      "subject": "New%20names%20suggestion%20for%20the%20Timeline%20of%20Influential%20Indigenous%20Women"
    },
    "fr": {
      "label": "Suggérer de nouvelles femmes influentes",
      "subject": "Suggestion%20de%20nouveaux%20noms%20pour%20la%20chronologie%20des%20femmes%20autochtones%20influentes"
    }
  }

</i18n>