<template>
  <timeline :info="politics"></timeline>
</template>

<script>

  import timeline from "~/components/timeline";

  export default{
    components: {
      timeline
    },

    data(){
      return{
        politics: this.$i18n.t('politics')
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
