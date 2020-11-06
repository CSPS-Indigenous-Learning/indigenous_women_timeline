<template>
  <div>
    <!--<b-container fluid class="topbar-container">
      <b-row>
        <b-col><topbar /></b-col>
      </b-row>
    </b-container>-->
    <!--<b-container>-->
      <Nuxt />
    <!--</b-container>-->
  </div>
</template>

<script>

  import topbar from "~/components/topbar";

  export default{

    head() {
      return {
        htmlAttrs: { lang: this.$i18n.locale },
        title: (this.$i18n.locale=="en") ? "Influencial Indigenous Women Timeline" : "Trame historique des femme autochtones influentes"
      }
    },

    components: {
      topbar
    },

    data(){
      return{
        politics: this.$i18n.t('politics')
      }
    },

    methods:{

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
    background: url("~assets/background2.jpg");
    background-attachment: fixed;
    font-family: "Titillium Web";
    font-weight: 500;
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

</style>

<i18n>

  {
    "en": {

    },
    "fr": {

    }
  }

</i18n>
