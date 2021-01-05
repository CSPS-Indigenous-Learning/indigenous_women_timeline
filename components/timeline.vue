<!-- Timeline block (main content) -->
<template>
  <b-row align-v="start" role="tablist">
    <b-col cols="12" style="margin-bottom: 50px;">
      <transition name="alert-fade">
        <b-alert v-if="nothingToShow" show variant="warning" class="nothing-alert">
          <div class="icon">
            <font-awesome-icon icon="lightbulb" size="2x" role="presentation" />
          </div>
          <p>{{ $t('nothingToShow') }}</p>
        </b-alert>
      </transition>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1600', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1600', 'period')" :aria-label="((!isActivated('1600', periods)) ? $t('showYears') : $t('hideYears')) + '1600' + (($i18n.locale=='en') ? '\'s' : '')">1600</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1600" :key="'1600_' + index" :info="person" :id="'1600_' + index" @open="closeAllOthers(person)" :ref="'person1600_' + index" :posinset="index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1700', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1700', 'period')" :aria-label="((!isActivated('1700', periods)) ? $t('showYears') : $t('hideYears')) + '1700' + (($i18n.locale=='en') ? '\'s' : '')">1700</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1700" :key="'1700_' + index" :info="person" :id="'1700_' + index" @open="closeAllOthers(person)" :ref="'person1700_' + index" :posinset="persons1600.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1800', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1800', 'period')" :aria-label="((!isActivated('1800', periods)) ? $t('showYears') : $t('hideYears')) + '1800' + (($i18n.locale=='en') ? '\'s' : '')">1800</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1800" :key="'1800_' + index" :info="person" :id="'1800_' + index" @open="closeAllOthers(person)" :ref="'person1800_' + index" :posinset="persons1600.length + persons1700.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1900', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1900', 'period')" :aria-label="((!isActivated('1900', periods)) ? $t('showYearsBetween') : $t('hideYearsBetween')) + '1900 ' + $t('and') + ' 1919'">1900-1919</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1900" :key="'1900_' + index" :info="person" :id="'1900_' + index" @open="closeAllOthers(person)" :ref="'person1900_' + index" :posinset="persons1600.length + persons1700.length + persons1800.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1920', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1920', 'period')" :aria-label="((!isActivated('1920', periods)) ? $t('showYearsBetween') : $t('hideYearsBetween')) + '1920 ' + $t('and') + ' 1939'">1920-1939</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1920" :key="'1920_' + index" :info="person" :id="'1920_' + index" @open="closeAllOthers(person)" :ref="'person1920_' + index" :posinset="persons1600.length + persons1700.length + persons1800.length + persons1900.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1940', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1940', 'period')" :aria-label="((!isActivated('1940', periods)) ? $t('showYearsBetween') : $t('hideYearsBetween')) + '1940 ' + $t('and') + ' 1959'">1940-1959</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1940" :key="'1940_' + index" :info="person" :id="'1940_' + index" @open="closeAllOthers(person)" :ref="'person1940_' + index" :posinset="persons1600.length + persons1700.length + persons1800.length + persons1900.length + persons1920.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1960', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1960', 'period')" :aria-label="((!isActivated('1960', periods)) ? $t('showYearsBetween') : $t('hideYearsBetween')) + '1960 ' + $t('and') + ' 1979'">1960-1979</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1960" :key="'1960_' + index" :info="person" :id="'1960_' + index" @open="closeAllOthers(person)" :ref="'person1960_' + index" :posinset="persons1600.length + persons1700.length + persons1800.length + persons1900.length + persons1920.length + persons1940.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('1980', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1980', 'period')" :aria-label="((!isActivated('1980', periods)) ? $t('showYearsBetween') : $t('hideYearsBetween')) + '1980 ' + $t('and') + ' 1999'">1980-1999</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons1980" :key="'1980_' + index" :info="person" :id="'1980_' + index" @open="closeAllOthers(person)" :ref="'person1980_' + index" :posinset="persons1600.length + persons1700.length + persons1800.length + persons1900.length + persons1920.length + persons1940.length + persons1960.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
    <b-col cols="2" class="text-center year-filter"><a href="#" :class="isActivated('2000', periods) ? 'activated' : ''" @click.prevent="toggleFilter('2000', 'period')" :aria-label="((!isActivated('2000', periods)) ? $t('showYears') : $t('hideYears')) + '2000' + (($i18n.locale=='en') ? '\'s' : '')">2000</a></b-col>
    <b-col cols="10">
      <transition-group name="timeline-fade" tag="div" class="row">
        <person v-for="(person, index) in persons2000" :key="'2000_' + index" :info="person" :id="'2000_' + index" @open="closeAllOthers(person)" :ref="'person2000_' + index" :posinset="persons1600.length + persons1700.length + persons1800.length + persons1900.length + persons1920.length + persons1940.length + persons1960.length + persons1980.length + index + 1" :setsize="totalNumber"></person>
      </transition-group>
    </b-col>
  </b-row>
</template>

<script type="text/javascript">
  
  import person from "~/components/person";
  
  export default{
    components: {
      person
    },
    data(){
      return{
        
      }
    },
    computed: {
      periods() {
        return this.$store.state.filters.periods;
      },
      tags() {
        return this.$store.state.filters.tags;
      },
      groups() {
        return this.$store.state.filters.groups;
      },
      filterText() {
        return this.$store.state.filters.filterText;
      },

      persons1600(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1600), '1600');
      },
      persons1700(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1700), '1700');
      },
      persons1800(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1800), '1800');
      },
      persons1900(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1900), '1900');
      },
      persons1920(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1920), '1920');
      },
      persons1940(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1940), '1940');
      },
      persons1960(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1960), '1960');
      },
      persons1980(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d1980), '1980');
      },
      persons2000(){
        return this.filterPersons(Object.values(this.$i18n.t('persons').d2000), '2000');
      },

      nothingToShow(){
        return this.persons1600.length == 0 && this.persons1700.length == 0 && this.persons1800.length == 0 && this.persons1900.length == 0 && this.persons1920.length == 0 && this.persons1940.length == 0 && this.persons1960.length == 0 && this.persons1980.length == 0 && this.persons2000.length == 0;
      },

      totalNumber(){
        return this.persons1600.length + this.persons1700.length + this.persons1800.length + this.persons1900.length + this.persons1920.length + this.persons1940.length + this.persons1960.length + this.persons1980.length + this.persons2000.length;
      }
    },
    methods:{
      filterPersons(arr, decade){
        var that = this;
        
        return arr.filter(function(person){
          if(that.isActivated(decade, that.periods) && that.isActivated(person.group, that.groups) && that.checkTags(person) && that.checkFilterText(person)){
            return true;
          }
          else{
            return false;
          }
        });
      },
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
        if(this.filterText == "" || info.name.toLowerCase().indexOf(this.filterText.toLowerCase()) >= 0 || info.birth.toLowerCase().indexOf(this.filterText.toLowerCase()) >= 0 || info.death.toLowerCase().indexOf(this.filterText.toLowerCase()) >= 0 || info.content.toLowerCase().indexOf(this.filterText.toLowerCase()) >= 0){
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
    },
  }
  
</script>

<style lang="scss" scoped>

  .timeline-fade-enter, .timeline-fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .timeline-fade-leave-active {
    position: absolute;
  }

  .alert{
    transition: opacity 0.3s, transform 0.3s;

    &.nothing-alert{
      background-color: transparent!important;;
      color: black!important;
      border: none!important;
      padding-left: 7%;
      display: flex;
      align-items: center;
      flex-flow: row nowrap;

      .icon{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgb(255, 196, 0);
        position: relative;
        flex: 0 0 auto;
        margin-right: 15px;

        svg.svg-inline--fa{
          position: absolute;
          left: 14px;
          top: 10px;
          color: black;
        }
      }
      p{
        flex: 0 0 auto;
        display: block;
        width: calc(100% - 65px);
        margin-bottom: 0;
      }
    }
  }

  .alert-fade-enter, .alert-fade-leave-to {
    opacity: 0;
    transform: translatex(-30px);
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
      "showYears": "Show women born in the ",
      "hideYears": "Hide women born in the ",
      
      "showYearsBetween": "Show women born between ",
      "hideYearsBetween": "Hide women born between ",
      "and": "and",

      "nothingToShow": "Your selection of tags, years and text does not return any women."
    },
    "fr": {
      "showYears": "Montrer les femmes nées dans les années ",
      "hideYears": "Cacher les femmes nées dans les années ",
      
      "showYearsBetween": "Montrer les femmes nées entre ",
      "hideYearsBetween": "Cacher les femmes nées entre ",
      "and": "et",

      "nothingToShow": "Votre sélection de balises, d'années et de texte ne retourne aucune femme."
    }
  }

</i18n>