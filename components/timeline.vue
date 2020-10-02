<template>
  <div>
    <b-row class="filters" align-v="center">
      <b-col><a href="#" @click.prevent="filter('all')" :aria-label="$t('showAllYears')">{{ $t('all') }}</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1600')" :aria-label="$t('filterYears') + '1600' + (($i18n.locale=='en') ? '\'s' : '')">1600</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1700')" :aria-label="$t('filterYears') + '1700' + (($i18n.locale=='en') ? '\'s' : '')">1700</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1800')" :aria-label="$t('filterYears') + '1800' + (($i18n.locale=='en') ? '\'s' : '')">1800</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1900')" :aria-label="$t('filterYears') + '1900' + (($i18n.locale=='en') ? '\'s' : '')">1900</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1920')" :aria-label="$t('filterYears') + '1920' + (($i18n.locale=='en') ? '\'s' : '')">1920</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1940')" :aria-label="$t('filterYears') + '1940' + (($i18n.locale=='en') ? '\'s' : '')">1940</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1960')" :aria-label="$t('filterYears') + '1960' + (($i18n.locale=='en') ? '\'s' : '')">1960</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1980')" :aria-label="$t('filterYears') + '1980' + (($i18n.locale=='en') ? '\'s' : '')">1980</a></b-col>
      <b-col><a href="#" @click.prevent="filter('2000')" :aria-label="$t('filterYears') + '2000' + (($i18n.locale=='en') ? '\'s' : '')">2000</a></b-col>
      <b-col cols="3">
        <b-form-input id="filterText" :aria-label="$t('filterTimeline')" :aria-description="$t('filterDesc')" :placeholder="$t('filterTimeline')" v-model="filterText"></b-form-input>
      </b-col>
    </b-row>
    <transition-group name="timeline-fade" tag="div" class="row">
      <person v-if="(period == 'all' || period == '1600') && checkFilterText(person)" v-for="person, index in persons1600" :info="person" :id="'1600_' + index" :key="'1600_' + index" @open="closeAllOthers(person)" :ref="'person1600_' + index"></person>
      <person v-if="(period == 'all' || period == '1700') && checkFilterText(person)" v-for="person, index in persons1700" :info="person" :id="'1700_' + index" :key="'1700_' + index" @open="closeAllOthers(person)" :ref="'person1700_' + index"></person>
      <person v-if="(period == 'all' || period == '1800') && checkFilterText(person)" v-for="person, index in persons1800" :info="person" :id="'1800_' + index" :key="'1800_' + index" @open="closeAllOthers(person)" :ref="'person1800_' + index"></person>
      <person v-if="(period == 'all' || period == '1900') && checkFilterText(person)" v-for="person, index in persons1900" :info="person" :id="'1900_' + index" :key="'1900_' + index" @open="closeAllOthers(person)" :ref="'person1900_' + index"></person>
      <person v-if="(period == 'all' || period == '1920') && checkFilterText(person)" v-for="person, index in persons1920" :info="person" :id="'1920_' + index" :key="'1920_' + index" @open="closeAllOthers(person)" :ref="'person1920_' + index"></person>
      <person v-if="(period == 'all' || period == '1940') && checkFilterText(person)" v-for="person, index in persons1940" :info="person" :id="'1940_' + index" :key="'1940_' + index" @open="closeAllOthers(person)" :ref="'person1940_' + index"></person>
      <person v-if="(period == 'all' || period == '1960') && checkFilterText(person)" v-for="person, index in persons1960" :info="person" :id="'1960_' + index" :key="'1960_' + index" @open="closeAllOthers(person)" :ref="'person1960_' + index"></person>
      <person v-if="(period == 'all' || period == '1980') && checkFilterText(person)" v-for="person, index in persons1980" :info="person" :id="'1980_' + index" :key="'1980_' + index" @open="closeAllOthers(person)" :ref="'person1980_' + index"></person>
      <person v-if="(period == 'all' || period == '2000') && checkFilterText(person)" v-for="person, index in persons2000" :info="person" :id="'2000_' + index" :key="'2000_' + index" @open="closeAllOthers(person)" :ref="'person2000_' + index"></person>
    </transition-group>
  </div>
</template>

<script>

  import person from "~/components/person";

  export default{
    components: {
      person
    },

    props:{
      info: { type: Object, default: function(){ return {} } }
    },

    data(){
      return{
        persons1600: Object.values(this.info.persons.d1600),
        persons1700: Object.values(this.info.persons.d1700),
        persons1800: Object.values(this.info.persons.d1800),
        persons1900: Object.values(this.info.persons.d1900),
        persons1920: Object.values(this.info.persons.d1920),
        persons1940: Object.values(this.info.persons.d1940),
        persons1960: Object.values(this.info.persons.d1960),
        persons1980: Object.values(this.info.persons.d1980),
        persons2000: Object.values(this.info.persons.d2000),

        period: "all",

        filterText: ""
      }
    },

    methods:{
      filter(period){
        this.period = period;
      },

      checkFilterText(info){
        console.log(info.birth)
        console.log(this.filterText)
        console.log(info.birth.indexOf(this.filterText));
        if(this.filterText == "" || info.name.indexOf(this.filterText) >= 0 || info.birth.indexOf(this.filterText) >= 0 || info.death.indexOf(this.filterText) >= 0 || info.content.indexOf(this.filterText) >= 0){
          return true;
        }
        else{
          return false;
        }
      },

      closeAllOthers(info){
        var refs = Object.values(this.$refs)

        for(var i = 0; i < refs.length; i++){
          var ref = refs[i][0];

          if(ref && ref._name == "<Person>" && ref.info.name != info.name){
            ref.close();
          }
        }
      }
    }
  }

</script>

<style scoped lang="scss">

  .timeline-fade-enter, .timeline-fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .timeline-fade-leave-active {
    //position: absolute;
  }

  .filters{
    height: 70px;

    & > .col{
      text-align: center;
    }
  }

</style>

<i18n>

  {
    "en": {
      "showAllYears": "Show all women",
      "all": "All",
      "filterYears": "Show women born in the ",

      "filterTimeline": "Filter timeline",
      "filterDesc": "Enter text or keywords to filter the timeline"
    },
    "fr": {
      "showAllYears": "Montrer toutes les femmes",
      "all": "Tout",
      "filterYears": "Montrer les femmes nées dans les années ",

      "filterTimeline": "Filtrer la ligne de temps",
      "filterDesc": "Entrer du texte ou des mots clé pour filtrer la ligne de temps"
    }
  }

</i18n>
