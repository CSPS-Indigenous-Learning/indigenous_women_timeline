<template>
  <div>
    <b-container fluid class="topbar-container">
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

  html, body{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: beige;
  }

  .container-fluid.topbar-container{
    background-color: white;
    margin-bottom: 15px;
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
