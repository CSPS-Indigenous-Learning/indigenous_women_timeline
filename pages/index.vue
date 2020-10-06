<template>
  <timeline :info="info"></timeline>
</template>

<script>

  import timeline from "~/components/timeline";

  export default{
    components: {
      timeline
    },

    data(){
      return{
        info: this.$i18n.t('persons')
      }
    },

    methods:{

    }
  }

</script>

<style scoped lang="scss">



</style>

<i18n>

  {
    "en": {

    },
    "fr": {

    }
  }

</i18n>
