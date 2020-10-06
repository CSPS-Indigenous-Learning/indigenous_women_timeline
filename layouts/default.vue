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
  $dark_purple: #713e5a;
  $light_purple: #94778b;
  $lavender: #c6d4ff;
  $green: #caff8a;
  $beige: #f9e0c8;

  //Fonts
  @font-face{
    font-family: "Merienda";
    font-weight: 700;
    font-style: normal;
    src: url("~assets/fonts/Merienda/Merienda-Bold.ttf");
  }

  @font-face{
    font-family: "Titillium Web";
    font-weight: 500;
    font-style: normal;
    src: url("~assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf");
  }

  @font-face{
    font-family: "Titillium Web";
    font-weight: 500;
    font-style: italic;
    src: url("~assets/fonts/Titillium_Web/TitilliumWeb-Italic.ttf");
  }

  @font-face{
    font-family: "Titillium Web";
    font-weight: 600;
    font-style: normal;
    src: url("~assets/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf");
  }

  @font-face{
    font-family: "Titillium Web";
    font-weight: 600;
    font-style: italic;
    src: url("~assets/fonts/Titillium_Web/TitilliumWeb-SemiBoldItalic.ttf");
  }

  @font-face{
    font-family: "Titillium Web";
    font-weight: 700;
    font-style: normal;
    src: url("~assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf");
  }

  @font-face{
    font-family: "Titillium Web";
    font-weight: 700;
    font-style: italic;
    src: url("~assets/fonts/Titillium_Web/TitilliumWeb-BoldItalic.ttf");
  }

  html, body{
    margin: 0;
    padding: 0;
  }

  body{
    background: url("~assets/background.jpg");
    font-family: "Titillium Web";
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
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
