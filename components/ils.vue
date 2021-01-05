<!-- ILS banner at the bottom of the page -->
<template>
  <b-container fluid class="ils-banner-container" role="complementary" :aria-label="(($i18n.locale === 'en') ? 'Indigenous Learning Series' : 'Série d\'apprentissage sur les questions autochtones')">
    <b-row align-h="end" no-gutters>
      <b-col cols="11" sm="8" md="6" lg="5" xl="4" class="ils-banner">
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

    .ils-banner{
      margin-top: 30px;
      margin-bottom: 30px;
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
