<template>
  <div>
    <b-row class="correction-container" align-v="center">
      <b-col cols="2" sm="1">
        <button class="correction-button" v-b-modal.correction aria-labelledby="correction-label"><font-awesome-icon icon="exclamation-circle" size="2x" role="presentation" /></button>
      </b-col>
      <b-col cols="10" sm="11">
        <div id="correction-label" class="text-center">{{ $t('label') }}</div>
      </b-col>
    </b-row>
    <b-modal id="correction" :title="(($i18n.locale === 'en') ? 'Submit Corrections' : 'Soumettre des corrections')" centered cancel-disabled :header-close-label="$t('close')" :ok-title="$t('close')" ok-only size="lg" title-tag="h2">
      <b-row align-v="center">
        <b-col cols="6">
          <img class="img-fluid" src="~assets/corrections.svg" alt="" style="margin-top: 30px; margin-bottom: 30px;">
        </b-col>
        <b-col cols="6">
          <p v-if="$i18n.locale === 'en'">These biographies are based on the available written material during a collective research carried out during 2020-2021. It is possible that mistakes and facts need to be corrected. If you notice an error, or if you wish to correct something in a biography, please write to us at ils-saqa@csps-efpc.gc.ca or use the button below and we will be happy to do so. This is how we will be able to have more precise presentations, and to better promote Indigenous women.</p>
          <p v-else-if="$i18n.locale === 'fr'">Ces biographies sont basées sur les documents écrits disponibles au cours d'une recherche collective menée au cours de 2020-2021. Il est possible que des erreurs se soient glissées ou que des faits doivent être corrigés. Si vous constatez une erreur ou si vous souhaitez corriger une information dans une biographie, s'il-vous-plaît écrivez-nous à ils-saqa@csps-efpc.gc.ca ou utilisez le bouton ci-dessous et nous serons heureux de le faire. Ainsi, nous serons en mesure d'offrir des présentations plus précises et de mieux promouvoir les femmes autochtones.</p>
          <b-button tag="a" variant="primary" :href="'mailto:ils-saqa@csps-efpc.gc.ca?subject=' + $t('subject')">{{ $t('sendButton') }}</b-button>
        </b-col>
      </b-row>
    </b-modal>
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
      
    },

    mounted(){
      
    }
  }

</script>

<style lang="scss">

  .correction-container{
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

    .correction-button{
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
        top: 19px;
      }
    }
  }

  #correction-label{
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

  #correction{
    h2{
      font-size: 1.7em;
      line-height: 1.2;
    }
    .btn.btn-primary{
      background-color: #3F2A55;
      color: white;

      &:hover, &:focus{
        background-color: darken(#3F2A55, 7%);
      }
    }
    .modal-footer button.btn.btn-primary{
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
      "label": "Submit Corrections",
      "subject": "Corrections%20Submission%20for%20the%20Timeline%20of%20Influential%20Indigenous%20Women",
      "sendButton": "Send a submission",
      "close": "Close"
    },
    "fr": {
      "label": "Soumettre des corrections",
      "subject": "Proposition%20de%20corrections%20pour%20la%20Chronologie%20des%20femmes%20autochtones%20influentes",
      "sendButton": "Envoyer une proposition",
      "close": "Fermer"
    }
  }

</i18n>