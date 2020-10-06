<template>
  <div class="topbar">
    <b-container>
      <b-row>
        <b-col cols="10" offset="1" class="text-center"><h1>{{ $t('title') }}</h1></b-col>
        <b-col cols="1" class="text-right" align-self="end"><nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="align-right langswitch"><span>{{ locale.name }}</span></nuxt-link></b-col>
      </b-row>
      <div class="topbar-filters">
        <!--<nuxt-link :to="localePath('art')"><span>{{ $t('art') }}</span></nuxt-link>
        <nuxt-link :to="localePath('politics')"><span>{{ $t('politics') }}</span></nuxt-link>-->

        <a href="#"><span>{{ $t('art') }}</span></a>
        <a href="#"><span>{{ $t('politics') }}</span></a>
        <a href="#"><span>{{ $t('something') }}</span></a>
        <a href="#"><span>{{ $t('something') }}</span></a>

        <b-form-input id="filterText" :aria-label="$t('filterTimeline')" :aria-description="$t('filterDesc')" :placeholder="$t('filterTimeline')" v-model="filterText"></b-form-input>
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
        filterText: ""
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

  //Colors
  $dark_purple: #713e5a;
  $light_purple: #94778b;
  $lavender: #c6d4ff;
  $green: #caff8a;
  $beige: #f9e0c8;

  .topbar{
    background-color: white;

    .container{
      //height: 100px;

      h1{
        font-family: "Merienda";
        font-weight: 700;
        font-size: 30px;
        margin-top: 15px;
      }
      a.langswitch{
        color: black;
        text-decoration: none;

        &:hover, &:focus{
          opacity: 0.7;
          text-decoration: none;
        }
      }
      .topbar-filters{
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;

        input{
          flex: 0 0 25%;
          margin-left: auto;
        }
        a{
          flex: 0 0 25%;
          position: relative;
          top: 10px;
          transition: background-color 0.2s;
          border-radius: 10px;

          @media (min-width: 992px){
            flex: 0 0 16.6666666667%;
          }

          &:hover, &:focus{
            text-decoration: none;
            color: black;
          }
          &:nth-child(1){
            background-color: $dark_purple;

            span{
              color: white!important;
            }
            &:hover, &:focus{
              background-color: lighten($dark_purple, 7%);
            }
          }
          &:nth-child(2){
            background-color: $lavender;

            &:hover, &:focus{
              background-color: lighten($lavender, 3%);
            }
          }
          &:nth-child(3){
            background-color: $green;

            &:hover, &:focus{
              background-color: lighten($green, 5%);
            }
          }
          &:nth-child(4){
            background-color: $beige;

            &:hover, &:focus{
              background-color: lighten($beige, 3%);
            }
          }
          /*&.nuxt-link-active{
            background-color: #eeeeee;
          }
          &.align-right{
            margin-left: auto!important;
          }*/
          span{
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-decoration: none;
            color: black;
            text-align: center;
            line-height: 1.1;
            font-size: 15px;
          }
        }
      }
    }
  }

</style>

<i18n>

  {
    "en": {
      "title": "Influencal Indigenous Women Timeline",
      "art": "Women in Art",
      "politics": "Women in Politics",
      "something": "Women in something",

      "filterTimeline": "Filter timeline",
      "filterDesc": "Enter text or keywords to filter the timeline"
    },
    "fr": {
      "title": "Trame historique des femme autochtones influencielles",
      "art": "Femmes en art",
      "politics": "Femmes en politique",
      "something": "Femme en quelque chose",

      "filterTimeline": "Filtrer la ligne de temps",
      "filterDesc": "Entrer du texte ou des mots clé pour filtrer la ligne de temps"
    }
  }

</i18n>
