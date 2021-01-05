<!-- Top Bar (title, tags, text filter, etc.) -->
<template>
  <header class="topbar">
    <b-container>
      <b-row align-v="center">
        <b-col cols="2" md="1" v-if="isSmallScreen">
          <a class="menu-toggle" href="#" :title="expandMenu ? $t('collapseMenu') : $t('expandMenu')" @click.prevent="expandMenu = !expandMenu"><font-awesome-icon icon="bars" size="2x" role="presentation" /><span class="v-inv" v-html="expandMenu ? $t('collapseMenu') : $t('expandMenu')"></span></a>
        </b-col>
        <b-col cols="6" md="8" lg="10" offset="1" offset-md="1" class="text-center"><h1>{{ $t('title') }}</h1></b-col>
        <b-col cols="3" md="2" lg="1" class="text-right"><nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="align-right langswitch" :lang="locale.code"><span>{{ locale.name }}</span></nuxt-link></b-col>
      </b-row>
      <transition name="menu">
        <nav class="topbar-filters" v-if="!isSmallScreen || expandMenu" :aria-label="$t('nav-label')">
          <!--<nuxt-link :to="localePath('art')"><span>{{ $t('art') }}</span></nuxt-link>
          <nuxt-link :to="localePath('politics')"><span>{{ $t('politics') }}</span></nuxt-link>-->

          <p class="tags-label" v-html="$t('tagsLabel')"></p>

          <div class="topbar-buttons">
            <div>
              <a href="#" :class="isActivated('literature', tags) ? 'activated' : ''" @click.prevent="toggleFilter('literature', 'tag')" :aria-label="(((!isActivated('literature', tags)) ? $t('showTags') : $t('hideTags'))) + $t('literature') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('literature') }}</span></a>
              <a href="#" :class="isActivated('politics', tags) ? 'activated' : ''" @click.prevent="toggleFilter('politics', 'tag')" :aria-label="(((!isActivated('politics', tags)) ? $t('showTags') : $t('hideTags'))) + $t('politics') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('politics') }}</span></a>
              <a href="#" :class="isActivated('healthcare', tags) ? 'activated' : ''" @click.prevent="toggleFilter('healthcare', 'tag')" :aria-label="(((!isActivated('healthcare', tags)) ? $t('showTags') : $t('hideTags'))) + $t('healthcare') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('healthcare') }}</span></a>
              <a href="#" :class="isActivated('art', tags) ? 'activated' : ''" @click.prevent="toggleFilter('art', 'tag')" :aria-label="(((!isActivated('art', tags)) ? $t('showTags') : $t('hideTags'))) + $t('art') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('art') }}</span></a>
              <a href="#" :class="isActivated('veterans', tags) ? 'activated' : ''" @click.prevent="toggleFilter('veterans', 'tag')" :aria-label="(((!isActivated('veterans', tags)) ? $t('showTags') : $t('hideTags'))) + $t('veterans') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('veterans') }}</span></a>
              <a href="#" :class="isActivated('sports', tags) ? 'activated' : ''" @click.prevent="toggleFilter('sports', 'tag')" :aria-label="(((!isActivated('sports', tags)) ? $t('showTags') : $t('hideTags'))) + $t('sports') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('sports') }}</span></a>
              <a href="#" :class="isActivated('business', tags) ? 'activated' : ''" @click.prevent="toggleFilter('business', 'tag')" :aria-label="(((!isActivated('business', tags)) ? $t('showTags') : $t('hideTags'))) + $t('business') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('business') }}</span></a>
              <a href="#" :class="isActivated('media', tags) ? 'activated' : ''" @click.prevent="toggleFilter('media', 'tag')" :aria-label="(((!isActivated('art', tags)) ? $t('showTags') : $t('hideTags'))) + $t('media') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('media') }}</span></a>
              <a href="#" :class="isActivated('education', tags) ? 'activated' : ''" @click.prevent="toggleFilter('education', 'tag')" :aria-label="(((!isActivated('education', tags)) ? $t('showTags') : $t('hideTags'))) + $t('education') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('education') }}</span></a>
              <a href="#" :class="isActivated('law', tags) ? 'activated' : ''" @click.prevent="toggleFilter('law', 'tag')" :aria-label="(((!isActivated('law', tags)) ? $t('showTags') : $t('hideTags'))) + $t('law') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('law') }}</span></a>
            </div>
            <div class="groups">
              <a href="#" :class="isActivated('first', groups) ? 'activated' : ''" @click.prevent="toggleFilter('first', 'group')" :aria-label="(((!isActivated('first', groups)) ? $t('showTags') : $t('hideTags'))) + $t('first') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('first') }}</span></a>
              <a href="#" :class="isActivated('inuit', groups) ? 'activated' : ''" @click.prevent="toggleFilter('inuit', 'group')" :aria-label="(((!isActivated('inuit', groups)) ? $t('showTags') : $t('hideTags'))) + $t('inuit') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('inuit') }}</span></a>
              <a href="#" :class="isActivated('metis', groups) ? 'activated' : ''" @click.prevent="toggleFilter('metis', 'group')" :aria-label="(((!isActivated('metis', groups)) ? $t('showTags') : $t('hideTags'))) + $t('metis') + (($i18n.locale === 'en') ? '”' : ' »')"><span>{{ $t('metis') }}</span></a>
            </div>
          </div>

          <b-form-input id="filterText" :aria-label="$t('filterTimeline')" aria-describedby="filterText_desc" :placeholder="$t('filterTimeline')" v-model="filterText"></b-form-input>
          <span class="v-inv" id="filterText_desc" v-html="$t('filterDesc')"></span>
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
      },
      periods: {
        get() {
          return this.$store.state.filters.periods;
        }
      },
      groups: {
        get() {
          return this.$store.state.filters.groups;
        }
      }
    },

    watch:{
      filterText(newVal){
        this.$store.commit('filters/changeText', this.filterText);
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
        else if(type == "group"){
          if(this.isActivated(filter, this.groups)){
            this.$store.commit('filters/removeGroup', filter);
          }
          else{
            this.$store.commit('filters/addGroup', filter);
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
        font-size: 20px;
        margin-top: 15px;

        @media (min-width: 768px){
          font-size: 26px;
        }
        @media (min-width: 992px){
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
          align-self: flex-start;
          margin-top: 20px;
          margin-bottom: 20px;

          @media (min-width: 768px){
            flex: 0 0 17.5%;
            margin-left: 2.5%;
            //margin-top: 0px;
            margin-bottom: 0px;
          }
          @media (min-width: 992px){
            flex: 0 0 20%;
          }
        }
        .tags-label{
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
            //text-align: right;
          }
          @media (min-width: 992px){
            flex: 0 0 20%;
          }
        }
        .topbar-buttons{
          flex: 0 0 67.5%;

          @media (min-width: 768px){
            flex: 0 0 50%;
          }
          @media (min-width: 992px){
            flex: 0 0 55%;
          }

          div{
            display: block;
            width: 100%;

            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: stretch;
            position: relative;

            margin-top: 20px;

            @media (min-width: 768px){
              top: 20px;
              margin-top: 0px;
            }

            &:not(:last-of-type){
              margin-bottom: 20px;
            }
            a{
              height: 50px;
              position: relative;
              transition: background-color 0.2s, border 0.2s, box-shadow 0.2s, transform 0.2s, color 0.2s;
              border-radius: 10px;
              border: 0px solid black;
              background-color: $beige;
              margin-bottom: 1%;
              flex: 0 0 49%;
              margin-right: 1%;
              box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.1);
              color: black;

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
                background-color: darken($beige, 7.5%);
                transform : scale(0.98);
                box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
              }
              span{
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-decoration: none;
                text-align: center;
                line-height: 1.1;
                font-size: 15px;
              }
            }
            &.groups a{
              &:nth-child(1){
                background-color: #9cd88e;

                &:hover, &:focus{
                  background-color: darken(#9cd88e, 7.5%);
                }
                &.activated{
                  background-color: #1c7308;
                  color: white!important;
                  
                  &:hover, &:focus{
                    background-color: darken(#1c7308, 5%);
                  }
                }
              }
              &:nth-child(2){
                background-color: #85c5e0;

                &:hover, &:focus{
                  background-color: darken(#85c5e0, 7.5%);
                }
                &.activated{
                  background-color: #0d82b5;

                  &:hover, &:focus{
                    background-color: darken(#0d82b5, 7.5%);
                    color: white!important;
                  }
                }
              }
              &:nth-child(3){
                background-color: #ebb697;

                &:hover, &:focus{
                  background-color: darken(#ebb697, 7.5%);
                }
                &.activated{
                  background-color: #aa3d00;
                  color: white!important;
                  
                  &:hover, &:focus{
                    background-color: darken(#aa3d00, 5%);
                  }
                }
              }
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
      
      "tagsLabel": "Use tags to filter results&hellip;",

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

      "first": "First Nations",
      "inuit": "Inuit",
      "metis": "Métis",

      "filterTimeline": "Filter timeline",
      "filterDesc": "Enter text or keywords to filter the timeline",

      "showTags": "Show women with the tag “",
      "hideTags": "Hide women with the tag “",

      "collapseMenu": "Collapse Menu" ,
      "expandMenu": "Expand Menu",

      "nav-label": "Filter women by tags or text"
    },
    "fr": {
      "title": "Trame historique des femme autochtones influentes",

      "tagsLabel": "Utiliser les balises pour filtrer<br />les résultats&hellip;",
      
      "literature": "Littérature",
      "politics": "Politique",
      "healthcare": "Soins de santé",
      "art": "Art",
      "veterans": "Vétérantes",
      "sports": "Sports",
      "business": "Affaires",
      "media": "Médias",
      "education": "Éducation",
      "law": "Justice",

      "first": "Premières Nations",
      "inuit": "Inuites",
      "metis": "Métisses",

      "filterTimeline": "Filtrer la ligne de temps",
      "filterDesc": "Entrer du texte ou des mots clé pour filtrer la ligne de temps",

      "showTags": "Montrer les femmes avec la balise « ",
      "hideTags": "Cacher les femmes avec la balise « ",

      "collapseMenu": "Réduire le menu" ,
      "expandMenu": "Étendre le menu",

      "nav-label": "Filter les femmes par balises ou par texte"
    }
  }

</i18n>
