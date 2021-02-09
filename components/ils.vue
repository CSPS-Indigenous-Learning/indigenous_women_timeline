<!-- ILS banner at the bottom of the page -->
<template>
  <b-container fluid class="ils-banner-container" role="complementary" :aria-label="(($i18n.locale === 'en') ? 'Indigenous Learning Series' : 'Série d\'apprentissage sur les questions autochtones')">
    <b-row align-h="end" no-gutters>
      <b-col cols="6" sm="4" md="3" lg="3" xl="2" class="ils-banner">
        <img v-if="$i18n.locale=='en'" class="img-fluid" src="~assets/ils_banner_en.png" alt="Indigenous Learning Series Logo: Recognition, Respect, Relationships, Reconciliation">
        <img v-else-if="$i18n.locale=='fr'" class="img-fluid" src="~assets/ils_banner_fr.png" alt="Logo de la Série d'apprentissage sur les questions autochtones : Reconnaissance, Respect, Relations, Réconciliation">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  export default{
    data(){
      return{
        
      }
    }
  }

</script>

<style scoped lang="scss">

  .ils-banner-container{
    padding: 0;
    position: relative;
    z-index: 0;

    .ils-banner{
      position: relative;
      top: -40px;
      right: 0;

      @media (min-width: 992px) and (max-width: 1199px){
        img.img-fluid{
          max-width: 85%;
          float: right;
        }
      }
      @media (min-width: 1200px){
        position: absolute;
      }
    }
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
