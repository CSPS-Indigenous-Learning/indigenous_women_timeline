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
    //background: url("~assets/background2.jpg");
    background-attachment: fixed;
    font-family: "Titillium Web";
    font-weight: 500;

    position: relative;

    //Fix for background-attachement: fixed; on phones
    &:after {
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
