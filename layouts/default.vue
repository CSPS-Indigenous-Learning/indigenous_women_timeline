<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col><topbar /></b-col>
      </b-row>
    </b-container>
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<script>

  import topbar from "~/components/topbar";

  export default{
    components: {
      topbar
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

<style lang="scss">

  body{
    background-color: beige;
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
