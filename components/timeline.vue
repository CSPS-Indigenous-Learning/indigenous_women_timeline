<template>
  <div>
    <b-container fluid class="topbar-container">
      <b-row>
        <b-col><topbar ref="topbar" /></b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="2">
          <b-row class="filters" align-v="center">
            <!--<b-col cols="12" class="text-center"><a href="#" @click.prevent="filter('all')" :aria-label="$t('showAllYears')">{{ $t('all') }}</a></b-col>-->
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1600', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1600', periods)" :aria-label="$t('filterYears') + '1600' + (($i18n.locale=='en') ? '\'s' : '')">1600</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1700', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1700', periods)" :aria-label="$t('filterYears') + '1700' + (($i18n.locale=='en') ? '\'s' : '')">1700</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1800', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1800', periods)" :aria-label="$t('filterYears') + '1800' + (($i18n.locale=='en') ? '\'s' : '')">1800</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1900', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1900', periods)" :aria-label="$t('filterYears') + '1900' + (($i18n.locale=='en') ? '\'s' : '')">1900</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1920', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1920', periods)" :aria-label="$t('filterYears') + '1920' + (($i18n.locale=='en') ? '\'s' : '')">1920</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1940', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1940', periods)" :aria-label="$t('filterYears') + '1940' + (($i18n.locale=='en') ? '\'s' : '')">1940</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1960', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1960', periods)" :aria-label="$t('filterYears') + '1960' + (($i18n.locale=='en') ? '\'s' : '')">1960</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('1980', periods) ? 'activated' : ''" @click.prevent="toggleFilter('1980', periods)" :aria-label="$t('filterYears') + '1980' + (($i18n.locale=='en') ? '\'s' : '')">1980</a></b-col>
            <b-col cols="12" class="text-center"><a href="#" :class="isActivated('2000', periods) ? 'activated' : ''" @click.prevent="toggleFilter('2000', periods)" :aria-label="$t('filterYears') + '2000' + (($i18n.locale=='en') ? '\'s' : '')">2000</a></b-col>
            <!--<b-col cols="3">
              <b-form-input id="filterText" :aria-label="$t('filterTimeline')" :aria-description="$t('filterDesc')" :placeholder="$t('filterTimeline')" v-model="filterText"></b-form-input>
            </b-col>-->
          </b-row>
        </b-col>
        <b-col>
          <transition-group name="timeline-fade" tag="div" class="row">
            <person v-if="isActivated('1600', periods) && checkFilterText(person)" v-for="person, index in persons1600" :info="person" :id="'1600_' + index" :key="'1600_' + index" @open="closeAllOthers(person)" :ref="'person1600_' + index"></person>
            <person v-if="isActivated('1700', periods) && checkFilterText(person)" v-for="person, index in persons1700" :info="person" :id="'1700_' + index" :key="'1700_' + index" @open="closeAllOthers(person)" :ref="'person1700_' + index"></person>
            <person v-if="isActivated('1800', periods) && checkFilterText(person)" v-for="person, index in persons1800" :info="person" :id="'1800_' + index" :key="'1800_' + index" @open="closeAllOthers(person)" :ref="'person1800_' + index"></person>
            <person v-if="isActivated('1900', periods) && checkFilterText(person)" v-for="person, index in persons1900" :info="person" :id="'1900_' + index" :key="'1900_' + index" @open="closeAllOthers(person)" :ref="'person1900_' + index"></person>
            <person v-if="isActivated('1920', periods) && checkFilterText(person)" v-for="person, index in persons1920" :info="person" :id="'1920_' + index" :key="'1920_' + index" @open="closeAllOthers(person)" :ref="'person1920_' + index"></person>
            <person v-if="isActivated('1940', periods) && checkFilterText(person)" v-for="person, index in persons1940" :info="person" :id="'1940_' + index" :key="'1940_' + index" @open="closeAllOthers(person)" :ref="'person1940_' + index"></person>
            <person v-if="isActivated('1960', periods) && checkFilterText(person)" v-for="person, index in persons1960" :info="person" :id="'1960_' + index" :key="'1960_' + index" @open="closeAllOthers(person)" :ref="'person1960_' + index"></person>
            <person v-if="isActivated('1980', periods) && checkFilterText(person)" v-for="person, index in persons1980" :info="person" :id="'1980_' + index" :key="'1980_' + index" @open="closeAllOthers(person)" :ref="'person1980_' + index"></person>
            <person v-if="isActivated('2000', periods) && checkFilterText(person)" v-for="person, index in persons2000" :info="person" :id="'2000_' + index" :key="'2000_' + index" @open="closeAllOthers(person)" :ref="'person2000_' + index"></person>
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
        persons2000: Object.values(this.info.d2000),

        periods: []
      }
    },

    methods:{
      toggleFilter(period, arr){
        if(this.isActivated(period, arr)){
          for(var i = 0; i < arr.length; i++){
            if(arr[i] === period){
              arr.splice(i, 1);
              i--;
            }
          }
        }
        else{
          this.periods.push(period);
        }
      },
      isActivated(period, arr){
        var activated = false;

        for(var i = 0; i < arr.length; i++){
          if(arr[i] == period){
            activated = true;
          }
        }

        return activated;
      },
      checkFilterText(info){
        if(this.$refs.topbar.filterText == "" || info.name.indexOf(this.$refs.topbar.filterText) >= 0 || info.birth.indexOf(this.$refs.topbar.filterText) >= 0 || info.death.indexOf(this.$refs.topbar.filterText) >= 0 || info.content.indexOf(this.$refs.topbar.filterText) >= 0){
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

  .filters{
    height: 70px;

    & > .col-12{
      margin-bottom: 20px;

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
  }

</style>

<i18n>

  {
    "en": {
      "showAllYears": "Show all women",
      "all": "All",
      "filterYears": "Show women born in the "
    },
    "fr": {
      "showAllYears": "Montrer toutes les femmes",
      "all": "Tout",
      "filterYears": "Montrer les femmes nées dans les années "
    }
  }

</i18n>
