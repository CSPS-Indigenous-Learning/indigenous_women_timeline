<template>
  <header class="topbar">
    <b-container>
      <b-row align-v="center">
        <b-col cols="2" md="1" v-if="isSmallScreen">
          <a class="menu-toggle" href="#" :title="expandMenu ? $t('collapseMenu') : $t('expandMenu')" @click.prevent="expandMenu = !expandMenu"><font-awesome-icon icon="bars" size="2x" role="presentation" /><span class="v-inv" v-html="expandMenu ? $t('collapseMenu') : $t('expandMenu')"></span></a>
        </b-col>
        <b-col cols="6" md="10" offset="1" offset-md="0" offset-lg="1" class="text-center"><h1>{{ $t('title') }}</h1></b-col>
        <b-col cols="3" md="1" class="text-right"><nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="align-right langswitch" :lang="locale.code"><span>{{ locale.name }}</span></nuxt-link></b-col>
      </b-row>
      <transition name="menu">
        <nav class="topbar-filters" v-if="!isSmallScreen || expandMenu" :label="$t('nav-label')">
          <!--<nuxt-link :to="localePath('art')"><span>{{ $t('art') }}</span></nuxt-link>
          <nuxt-link :to="localePath('politics')"><span>{{ $t('politics') }}</span></nuxt-link>-->

          <p class="filter-text">{{ $t('showTags') }}&hellip;</p>

          <div class="topbar-buttons">
            <a href="#" :class="isActivated('literature', tags) ? 'activated' : ''" @click.prevent="toggleFilter('literature', 'tag')" :aria-label="(((!isActivated('literature', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('literature')"><span>{{ $t('literature') }}</span></a>
            <a href="#" :class="isActivated('politics', tags) ? 'activated' : ''" @click.prevent="toggleFilter('politics', 'tag')" :aria-label="(((!isActivated('politics', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('politics')"><span>{{ $t('politics') }}</span></a>
            <a href="#" :class="isActivated('healthcare', tags) ? 'activated' : ''" @click.prevent="toggleFilter('healthcare', 'tag')" :aria-label="(((!isActivated('healthcare', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('healthcare')"><span>{{ $t('healthcare') }}</span></a>
            <a href="#" :class="isActivated('art', tags) ? 'activated' : ''" @click.prevent="toggleFilter('art', 'tag')" :aria-label="(((!isActivated('art', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('art')"><span>{{ $t('art') }}</span></a>
            <a href="#" :class="isActivated('veterans', tags) ? 'activated' : ''" @click.prevent="toggleFilter('veterans', 'tag')" :aria-label="(((!isActivated('veterans', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('veterans')"><span>{{ $t('veterans') }}</span></a>
            <a href="#" :class="isActivated('sports', tags) ? 'activated' : ''" @click.prevent="toggleFilter('sports', 'tag')" :aria-label="(((!isActivated('sports', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('sports')"><span>{{ $t('sports') }}</span></a>
            <a href="#" :class="isActivated('business', tags) ? 'activated' : ''" @click.prevent="toggleFilter('business', 'tag')" :aria-label="(((!isActivated('business', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('business')"><span>{{ $t('business') }}</span></a>
            <a href="#" :class="isActivated('media', tags) ? 'activated' : ''" @click.prevent="toggleFilter('media', 'tag')" :aria-label="(((!isActivated('art', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('media')"><span>{{ $t('media') }}</span></a>
            <a href="#" :class="isActivated('education', tags) ? 'activated' : ''" @click.prevent="toggleFilter('education', 'tag')" :aria-label="(((!isActivated('education', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('education')"><span>{{ $t('education') }}</span></a>
            <a href="#" :class="isActivated('law', tags) ? 'activated' : ''" @click.prevent="toggleFilter('law', 'tag')" :aria-label="(((!isActivated('law', tags)) ? $t('showTags') : $t('hideTags'))) + ' ' + $t('law')"><span>{{ $t('law') }}</span></a>
          </div>

          <b-form-input id="filterText" :aria-label="$t('filterTimeline')" :aria-description="$t('filterDesc')" :placeholder="$t('filterTimeline')" v-model="filterText"></b-form-input>
        </nav>
      </transition>
    </b-container>
  </header>
</template>

<script>

  export default{
    components: {

    },

    data(){
      return{
        filterText: "",
        isSmallScreen: false,
        expandMenu: false
      }
    },

    computed: {
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
      tags: {
        get() {
          return this.$store.state.filters.tags;
        }
      }
    },

    methods:{
      toggleFilter(filter, type){
        if(type == "period"){
          if(this.isActivated(filter, this.periods)){
            this.$store.commit('filters/removePeriod', filter);
          }
          else{
            this.$store.commit('filters/addPeriod', filter);
          }
        }
        else if(type == "tag"){
          if(this.isActivated(filter, this.tags)){
            this.$store.commit('filters/removeTag', filter);
          }
          else{
            this.$store.commit('filters/addTag', filter);
          }
        }
      },
      isActivated(filter, arr){
        var activated = false;

        for(var i = 0; i < arr.length; i++){
          if(arr[i] == filter){
            activated = true;
          }
        }

        return activated;
      },
      checkSmallScreen() {
        if($(window).width() <= 997){
          this.isSmallScreen = true;
        }
        else{
          this.isSmallScreen = false;
        }
      }
    },

    mounted(){
      this.checkSmallScreen();

      var that = this;
      $(window).on("resize", function(){
        that.checkSmallScreen();
      });
    }
  }

</script>

<style scoped lang="scss">

  //Colors
  $beige: #f9e0c8;
  $blue: #10A5E5;
  $orange: #FF670F;
  $red: #891111;
  $green: #175A07;

  .topbar{
    background-color: white;

    .container{
      //height: 100px;

      a.menu-toggle{
        color: black;

        &:hover, &:focus{
          color: #444444;
        }
      }
      h1{
        font-family: "Merienda";
        font-weight: 700;
        font-size: 26px;
        margin-top: 15px;

        @media (min-width: 768px){
          font-size: 30px;
        }
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
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;

        transition: clip-path 0.3s;

        &.menu-enter, &.menu-leave-to {
          clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
        }

        &.menu-leave, &.menu-enter-to {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        input{
          flex: 0 0 100%;
          align-self: center;
          margin-top: 20px;
          margin-bottom: 20px;

          @media (min-width: 768px){
            flex: 0 0 20%;
            margin-left: auto;
            margin-top: 0px;
            margin-bottom: 0px;
          }
        }
        .filter-text{
          flex: 0 0 30%;
          margin-right: 2.5%;
          align-self: start;
          margin-bottom: 0;
          position: relative; 
          top: 25px;
          overflow: visible;

          @media (min-width: 768px){
            flex: 0 0 25%;
            margin-right: 2.5%;
            text-align: right;
          }
          @media (min-width: 992px){
            flex: 0 0 20%;
          }
        }
        .topbar-buttons{
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: stretch;
          position: relative;
          flex: 0 0 67.5%;
          margin-top: 20px;

          @media (min-width: 768px){
            flex: 0 0 50%;
            top: 20px;
            margin-top: 0px;
          }
          @media (min-width: 992px){
            flex: 0 0 55%;
          }

          a{
            height: 50px;
            position: relative;
            transition: background-color 0.2s, border 0.2s, box-shadow 0.2s, transform 0.2s;
            border-radius: 10px;
            border: 0px solid black;
            background-color: $beige;
            margin-bottom: 1%;
            flex: 0 0 49%;
            margin-right: 1%;
            box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.1);

            @media (min-width: 768px){
            }
            @media (min-width: 992px){
              flex: 0 0 19%;
              margin-right: 1%;
            }

            &.activated{
              //border: 2px solid black;
              box-sizing: border-box;
              background-color: darken($beige, 15%);

              &:hover, &:focus{
                background-color: darken($beige, 22.5%);
              }
            }
            &:hover, &:focus{
              text-decoration: none;
              color: black;
              background-color: darken($beige, 7.5%);
              transform : scale(0.98);
              box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
            }

            /*&:nth-child(1){
              background-color: $blue;

              &:hover, &:focus{
                background-color: lighten($blue, 7%);
              }
            }
            &:nth-child(2){
              background-color: $orange;

              &:hover, &:focus{
                background-color: lighten($orange, 3%);
              }
            }
            &:nth-child(3){
              background-color: $red;

              span{
                color: white!important;
              }
              &:hover, &:focus{
                background-color: lighten($red, 5%);
              }
            }
            &:nth-child(4){
              background-color: $green;

              span{
                color: white!important;
              }
              &:hover, &:focus{
                background-color: lighten($green, 3%);
              }
            }
            &:nth-child(5){
              background-color: $blue;

              &:hover, &:focus{
                background-color: lighten($blue, 7%);
              }
            }
            &:nth-child(6){
              background-color: $orange;

              &:hover, &:focus{
                background-color: lighten($orange, 3%);
              }
            }
            &:nth-child(7){
              background-color: $red;

              span{
                color: white!important;
              }
              &:hover, &:focus{
                background-color: lighten($red, 5%);
              }
            }
            &:nth-child(8){
              background-color: $green;

              span{
                color: white!important;
              }
              &:hover, &:focus{
                background-color: lighten($green, 3%);
              }
            }
             &:nth-child(9){
              background-color: $blue;

              &:hover, &:focus{
                background-color: lighten($blue, 7%);
              }
            }
            &:nth-child(10){
              background-color: $orange;

              &:hover, &:focus{
                background-color: lighten($orange, 3%);
              }
            }*/
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
  }

</style>

<i18n>

  {
    "en": {
      "title": "Influencial Indigenous Women Timeline",
      
      "literature": "Literature",
      "politics": "Politics",
      "healthcare": "Healthcare",
      "art": "Art",
      "veterans": "Veterans",
      "sports": "Sports",
      "business": "Business",
      "media": "Media",
      "education": "Education",
      "law": "Law",

      "filterTimeline": "Filter timeline",
      "filterDesc": "Enter text or keywords to filter the timeline",

      "showTags": "Show women in",
      "hideTags": "Hide women in",

      "collapseMenu": "Collapse Menu" ,
      "expandMenu": "Expand Menu",

      "nav-label": "Filter women by category or text"
    },
    "fr": {
      "title": "Trame historique des femme autochtones influentes",
      
      "literature": "littérature",
      "politics": "politique",
      "healthcare": "soins de santé",
      "art": "art",
      "veterans": "vétérantes",
      "sports": "sports",
      "business": "affaires",
      "media": "médias",
      "education": "éducation",
      "law": "justice",

      "filterTimeline": "Filtrer la ligne de temps",
      "filterDesc": "Entrer du texte ou des mots clé pour filtrer la ligne de temps",

      "showTags": "Montrer les femmes en",
      "hideTags": "Cacher les femmes en",

      "collapseMenu": "Réduire le menu" ,
      "expandMenu": "Étendre le menu",

      "nav-label": "Filter les femmes par catégorie ou par texte"
    }
  }

</i18n>
