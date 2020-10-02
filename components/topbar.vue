<template>
  <div class="topbar">
    <b-container>
      <div class="topbar-row">
        <nuxt-link :to="localePath('art')"><span>{{ $t('art') }}</span></nuxt-link>
        <nuxt-link :to="localePath('politics')"><span>{{ $t('politics') }}</span></nuxt-link>
        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="align-right"><span>{{ locale.name }}</span></nuxt-link>
      </div>
    </b-container>
  </div>
</template>

<script>


  export default{
    components: {

    },

    data(){
      return{
        art: this.$i18n.t('art')
      }
    },

    methods:{
      /*setCurrent() {
        this.$nextTick(function() {
          let app = this.$el;
          var currents = app.querySelectorAll("[aria-current]");
          var currentsParents = app.querySelectorAll(".active-link");

          if (currents) {
            for(var i = 0; i < currents.length; i++){
              currents[i].removeAttribute("aria-current");
            }
          }

          if (currentsParents) {
            for(var k = 0; k < currentsParents.length; k++){
              this.removeClass(currentsParents[k], "active-link");
            }
          }

          var actives = app.querySelectorAll(".nuxt-link-active");

          for(var j = 0; j < actives.length; j++){
            actives[j].setAttribute("aria-current", "page");
            this.addClass(actives[j].parentElement, "active-link");
          }
        });
      },
      addClass(element, toAdd) {
        var arr = element.className.split(" ");

        if (arr.indexOf(toAdd) == -1) {
          element.className += " " + toAdd;
        }
      },
      removeClass(element, toRemove) {
        element.className = element.className.replace(new RegExp(" " + toRemove, 'g'), "");
      }*/
    },

    mounted(){
      //this.setCurrent();
    },

    /*watch: {
      $route: function(to) {
        this.$nextTick(function() {
          this.setCurrent();
        });
      },
    },*/

    computed: {
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }

</script>

<style scoped lang="scss">

  .topbar{
    background-color: white;

    .container{
      height: 70px;

      .topbar-row{
        height: 70px;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;

        a{
          flex: 0 0 16.6666666667%;
          position: relative;
          transition: background-color 0.2s;

          &:hover, &:focus{
            background-color: #d0d0d0!important;
            text-decoration: none;
            color: black;
            text-decoration: none;
          }
          &.nuxt-link-active{
            background-color: #eeeeee;
          }
          &.align-right{
            margin-left: auto!important;
          }
          span{
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-decoration: none;
            color: black;
          }
        }
      }
    }
  }

</style>

<i18n>

  {
    "en": {
      "art": "Art",
      "politics": "Politics"
    },
    "fr": {
      "art": "Art",
      "politics": "Politique"
    }
  }

</i18n>
