<template>
  <timeline :info="art"></timeline>
</template>

<script>

  import timeline from "~/components/timeline";

  export default{
    components: {
      timeline
    },

    data(){
      return{
        art: this.$i18n.t('art')
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
