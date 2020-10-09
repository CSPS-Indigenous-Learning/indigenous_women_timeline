<template>
  <div>
    <b-container fluid class="topbar-container">
      <b-row>
        <b-col><topbar ref="topbar" /></b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="persons-container" align-v="start">
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1600', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1600', 'period')" :aria-label="((!isActivated('1600', periods)) ? $t('showYears') : $t('hideYears')) + '1600' + (($i18n.locale=='en') ? '\'s' : '')">1600</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1600', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1600" :info="person" :id="'1600_' + index" :key="'1600_' + index" @open="closeAllOthers(person)" :ref="'person1600_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1700', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1700', 'period')" :aria-label="((!isActivated('1700', periods)) ? $t('showYears') : $t('hideYears')) + '1700' + (($i18n.locale=='en') ? '\'s' : '')">1700</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1700', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1700" :info="person" :id="'1700_' + index" :key="'1700_' + index" @open="closeAllOthers(person)" :ref="'person1700_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1800', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1800', 'period')" :aria-label="((!isActivated('1800', periods)) ? $t('showYears') : $t('hideYears')) + '1800' + (($i18n.locale=='en') ? '\'s' : '')">1800</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1800', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1800" :info="person" :id="'1800_' + index" :key="'1800_' + index" @open="closeAllOthers(person)" :ref="'person1800_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1900', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1900', 'period')" :aria-label="((!isActivated('1900', periods)) ? $t('showYears') : $t('hideYears')) + '1900' + (($i18n.locale=='en') ? '\'s' : '')">1900</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1900', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1900" :info="person" :id="'1900_' + index" :key="'1900_' + index" @open="closeAllOthers(person)" :ref="'person1900_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1920', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1920', 'period')" :aria-label="((!isActivated('1920', periods)) ? $t('showYears') : $t('hideYears')) + '1920' + (($i18n.locale=='en') ? '\'s' : '')">1920</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1920', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1920" :info="person" :id="'1920_' + index" :key="'1920_' + index" @open="closeAllOthers(person)" :ref="'person1920_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1940', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1940', 'period')" :aria-label="((!isActivated('1940', periods)) ? $t('showYears') : $t('hideYears')) + '1940' + (($i18n.locale=='en') ? '\'s' : '')">1940</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1940', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1940" :info="person" :id="'1940_' + index" :key="'1940_' + index" @open="closeAllOthers(person)" :ref="'person1940_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1960', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1960', 'period')" :aria-label="((!isActivated('1960', periods)) ? $t('showYears') : $t('hideYears')) + '1960' + (($i18n.locale=='en') ? '\'s' : '')">1960</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1960', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1960" :info="person" :id="'1960_' + index" :key="'1960_' + index" @open="closeAllOthers(person)" :ref="'person1960_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1980', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1980', 'period')" :aria-label="((!isActivated('1980', periods)) ? $t('showYears') : $t('hideYears')) + '1980' + (($i18n.locale=='en') ? '\'s' : '')">1980</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1980', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons1980" :info="person" :id="'1980_' + index" :key="'1980_' + index" @open="closeAllOthers(person)" :ref="'person1980_' + index"></person>
          </transition-group>
        </b-col>
        <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('2000', periods) ? 'activated' : ''" @click.prevent="toggleFilter('2000', 'period')" :aria-label="((!isActivated('2000', periods)) ? $t('showYears') : $t('hideYears')) + '2000' + (($i18n.locale=='en') ? '\'s' : '')">2000</a></b-col>
        <b-col cols="10">
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('2000', periods) && checkTags(person) && checkFilterText(person)" v-for="person, index in persons2000" :info="person" :id="'2000_' + index" :key="'2000_' + index" @open="closeAllOthers(person)" :ref="'person2000_' + index"></person>
          </transition-group>
        </b-col>
      </b-row>
    </b-container>
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
        persons1600: Object.values(this.info.d1600),
        persons1700: Object.values(this.info.d1700),
        persons1800: Object.values(this.info.d1800),
        persons1900: Object.values(this.info.d1900),
        persons1920: Object.values(this.info.d1920),
        persons1940: Object.values(this.info.d1940),
        persons1960: Object.values(this.info.d1960),
        persons1980: Object.values(this.info.d1980),
        persons2000: Object.values(this.info.d2000)
      }
    },

    computed: {
      periods() {
        return this.$store.state.filters.periods;
      },
      tags() {
        return this.$store.state.filters.tags;
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
      checkTags(person){
        var check = false;

        for(var i = 0; i < person.tags.length; i++){
          if(this.isActivated(person.tags[i], this.tags)){
            check = true;
          }
        }

        return check;
      },
      checkFilterText(info){
        if(!this.$refs.topbar){
          var that = this;
          setTimeout(function(){
            that.checkFilterText(info);
          }, 100);
        }
        else{
          if(this.$refs.topbar.filterText == "" || info.name.indexOf(this.$refs.topbar.filterText) >= 0 || info.birth.indexOf(this.$refs.topbar.filterText) >= 0 || info.death.indexOf(this.$refs.topbar.filterText) >= 0 || info.content.indexOf(this.$refs.topbar.filterText) >= 0){
            return true;
          }
          else{
            return false;
          }
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

  .container-fluid.topbar-container{
    background-color: white;
    margin-bottom: 70px;
  }

  .timeline-fade-enter, .timeline-fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .timeline-fade-leave-active {
    position: absolute;
  }

  .year-filter {
    margin-bottom: 20px;

    transition: height 0.3s;

    a{
      color: black;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      transition: border 0.3s;

      &.activated{
        border-bottom: 3px solid black;
      }
    }
  }

</style>

<i18n>

  {
    "en": {
      "showAllYears": "Show all women",
      "all": "All",
      "showYears": "Show women born in the ",
      "hideYears": "Hide women born in the "
    },
    "fr": {
      "showAllYears": "Montrer toutes les femmes",
      "all": "Tout",
      "showYears": "Montrer les femmes nées dans les années ",
      "hideYears": "Cacher les femmes nées dans les années "
    }
  }

</i18n>
