<!-- Footer -->
<template>
  <div class="footer-container">
    <b-container tag="footer">
      <b-row class="school-banner" align-h="between" align-v="center">
        <b-col cols="7" sm="6" md="4" lg="3" xl="3">
          <img v-if="$i18n.locale=='en'" class="img-fluid" src="~assets/CSPS_FipEng_White.png" alt="Canada School of Public Service Wordmark">
          <img v-else-if="$i18n.locale=='fr'" class="img-fluid" src="~assets/CSPS_FipFr_White.png" alt="Mot-symbole de l'École de la fonction publique du Canada">
        </b-col>
        <b-col cols="3" sm="2" md="2" lg="1" xl="1">
          <img class="symbol img-fluid" src="~assets/CSPS_LOGO.png" :alt="(($i18n.locale=='en') ? 'Symbole de l\'École de la fonction publique du Canada' : 'Canada School of Public Service Symbol')">
        </b-col>
      </b-row>
    </b-container>
  </div>
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

  .footer-container{
    background: #3F2A55;
    background: linear-gradient(90deg, #3F2A55 0%, #2E2980 100%);
    box-shadow: 0px -3px 5px 2px rgba(0, 0, 0, 0.05);
    width: 100%;

    footer{
      .school-banner{
        padding-top: 15px;
        padding-bottom: 15px;

        .symbol{
          float: right;
        }
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