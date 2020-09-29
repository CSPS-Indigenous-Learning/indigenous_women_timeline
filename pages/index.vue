<template>
  <div>
    <b-row class="filters">
      <b-col><a href="#" @click.prevent="filter('all')">All</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1600')">1600</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1700')">1700</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1800')">1800</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1900')">1900</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1920')">1920</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1940')">1940</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1960')">1960</a></b-col>
      <b-col><a href="#" @click.prevent="filter('1980')">1980</a></b-col>
      <b-col><a href="#" @click.prevent="filter('2000')">2000</a></b-col>
    </b-row>
    <transition-group name="timeline-fade" tag="div" class="row">
      <person v-if="period == 'all' || period == '1600'" v-for="person, index in persons1600" :info="person" :id="'1600_' + index" :key="'1600_' + index"></person>
      <person v-if="period == 'all' || period == '1700'" v-for="person, index in persons1700" :info="person" :id="'1700_' + index" :key="'1700_' + index"></person>
      <person v-if="period == 'all' || period == '1800'" v-for="person, index in persons1800" :info="person" :id="'1800_' + index" :key="'1800_' + index"></person>
      <person v-if="period == 'all' || period == '1900'" v-for="person, index in persons1900" :info="person" :id="'1900_' + index" :key="'1900_' + index"></person>
      <person v-if="period == 'all' || period == '1920'" v-for="person, index in persons1920" :info="person" :id="'1920_' + index" :key="'1920_' + index"></person>
      <person v-if="period == 'all' || period == '1940'" v-for="person, index in persons1940" :info="person" :id="'1940_' + index" :key="'1940_' + index"></person>
      <person v-if="period == 'all' || period == '1960'" v-for="person, index in persons1960" :info="person" :id="'1960_' + index" :key="'1960_' + index"></person>
      <person v-if="period == 'all' || period == '1980'" v-for="person, index in persons1980" :info="person" :id="'1980_' + index" :key="'1980_' + index"></person>
      <person v-if="period == 'all' || period == '2000'" v-for="person, index in persons2000" :info="person" :id="'2000_' + index" :key="'2000_' + index"></person>
    </transition-group>
  </div>
</template>

<script>

  import person from "~/components/person"

  export default{
    components: {
      person
    },

    data(){
      return{
        persons1600: Object.values(this.$i18n.t("persons.1600")),
        persons1700: Object.values(this.$i18n.t("persons.1700")),
        persons1800: Object.values(this.$i18n.t("persons.1800")),
        persons1900: Object.values(this.$i18n.t("persons.1900")),
        persons1920: Object.values(this.$i18n.t("persons.1920")),
        persons1940: Object.values(this.$i18n.t("persons.1940")),
        persons1960: Object.values(this.$i18n.t("persons.1960")),
        persons1980: Object.values(this.$i18n.t("persons.1980")),
        persons2000: Object.values(this.$i18n.t("persons.2000")),

        period: "all"
      }
    },

    methods:{
      filter(period){
        this.period = period;
      },
    },

    mounted(){
      //code
    },
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

</style>

<i18n>

  {
    "en": {

    },
    "fr": {

    }
  }

</i18n>
