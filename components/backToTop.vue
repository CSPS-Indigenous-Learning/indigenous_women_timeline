<!-- Back to top button -->
<template>
  <div :class="scrollPos >= 1000 ? ['show', 'back-to-top'] : 'back-to-top'" role="button" tabindex="0" :aria-label="$t('label')" @click.prevent="scrollUp" @keypress.enter.prevent="scrollUp">
    <font-awesome-icon icon="arrow-up" size="2x" role="presentation" />
  </div>
</template>

<script>

  export default{

    data(){
      return{
        scrollPos: 0
      }
    },

    methods:{
      checkScroll(){
        this.scrollPos = $(window).scrollTop();
      },
      scrollUp(){
        $("body, html").animate({ scrollTop: 0 }, 700, "easeOutQuint");
      }
    },

    mounted(){
      var that = this;

      setInterval(function(){
        that.checkScroll();
      }, 100);
    }
  }

</script>

<style scoped lang="scss">

  .back-to-top{
    position: fixed;
    left: -100px;
    bottom: 50px;
    background-color: white;
    border-radius: 50%;
    color: black;
    width: 50px;
    height: 50px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);

    transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.3s ease-in;
    -webkit-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.3s ease-in;
    -moz-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.3s ease-in;
    -o-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.3s ease-in;
    -ms-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.3s ease-in;

    &.show{
      left: 30px;

      transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.7s cubic-bezier(.1,1.12,.73,1.1);
      -webkit-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.7s cubic-bezier(.1,1.12,.73,1.1);
      -moz-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.7s cubic-bezier(.1,1.12,.73,1.1);
      -o-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.7s cubic-bezier(.1,1.12,.73,1.1);
      -ms-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s, left 0.7s cubic-bezier(.1,1.12,.73,1.1);
    }
    &:hover, &:focus{
      transform: scale(0.95);
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.05);
      background-color: #f5f5f5;
    }
    svg{
      position: absolute;
      left: 12px;
      top: 8px;
    }
  }

</style>

<i18n>

  {
    "en": {
      "label": "Scroll back to the top of the page"
    },
    "fr": {
      "label": "Retourner au haut de la page"
    }
  }

</i18n>