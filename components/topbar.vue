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

        <div class="topbar-buttons">
          <a href="#" :class="isActivated('art', tags) ? 'activated' : ''" @click.prevent="toggleFilter('art', 'tag')" :aria-label="(((!isActivated('art', tags)) ? $t('showTags') : $t('hideTags'))) + $t('art')"><span>{{ $t('artButton') }}</span></a>
          <a href="#" :class="isActivated('politics', tags) ? 'activated' : ''" @click.prevent="toggleFilter('politics', 'tag')" :aria-label="(((!isActivated('politics', tags)) ? $t('showTags') : $t('hideTags'))) + $t('politics')"><span>{{ $t('politicsButton') }}</span></a>
          <a href="#" :class="isActivated('something1', tags) ? 'activated' : ''" @click.prevent="toggleFilter('something1', 'tag')" :aria-label="(((!isActivated('something1', tags)) ? $t('showTags') : $t('hideTags'))) + $t('something')"><span>{{ $t('somethingButton') }}</span></a>
          <a href="#" :class="isActivated('something2', tags) ? 'activated' : ''" @click.prevent="toggleFilter('something2', 'tag')" :aria-label="(((!isActivated('something2', tags)) ? $t('showTags') : $t('hideTags'))) + $t('something')"><span>{{ $t('somethingButton') }}</span></a>
        </div>

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
      }
    },

    mounted(){

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
        display: flex;
        justify-content: flex-start;
        align-items: stretch;

        input{
          flex: 0 0 45%;
          margin-left: auto;
          align-self: center;

          @media (min-width: 768px){
            flex: 0 0 20%;
          }
        }
        .topbar-buttons{
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: stretch;
          position: relative;
          top: 10px;
          flex: 0 0 50%;

          @media (min-width: 768px){
            flex: 0 0 75%;
          }

          a{
            flex: 0 0 100%;
            height: 50px;
            position: relative;
            transition: background-color 0.2s, border 0.2s;
            border-radius: 10px;
            border: 0px solid black;

            @media (min-width: 768px){
              flex: 0 0 50%;
            }
            @media (min-width: 992px){
              flex: 0 0 25%;
            }

            &.activated{
              border: 2px solid black;
              box-sizing: border-box;
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
  }

</style>

<i18n>

  {
    "en": {
      "title": "Influencal Indigenous Women Timeline",

      "art": "art",
      "politics": "politics",
      "something": "something",
      "artButton": "Women in Art",
      "politicsButton": "Women in Politics",
      "somethingButton": "Women in something",

      "filterTimeline": "Filter timeline",
      "filterDesc": "Enter text or keywords to filter the timeline",

      "showTags": "Show women in the domain of ",
      "hideTags": "Hide women in the domain of "
    },
    "fr": {
      "title": "Trame historique des femme autochtones influencielles",

      "art": "art",
      "politics": "politique",
      "something": "quelque chose",
      "artButton": "Femmes en art",
      "politicsButton": "Femmes en politique",
      "somethingButton": "Femme en quelque chose",

      "filterTimeline": "Filtrer la ligne de temps",
      "filterDesc": "Entrer du texte ou des mots clé pour filtrer la ligne de temps",

      "showTags": "Montrer les femmes en ",
      "hideTags": "Cacher les femmes en "
    }
  }

</i18n>
