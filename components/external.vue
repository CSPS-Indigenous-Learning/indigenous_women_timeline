<template>
  <a class="external" :href="link" target="_blank" rel="external" :title="(($i18n.locale == 'en') ? 'Link to ' : 'Lien vers ') + name"><slot /></a>
</template>

<script type="text/javascript">
  
  export default{

    data() {
      return {
        
      }
    },

    props: {
      link: { type: String, default: "#"},
      name: { type: String, default: ""}
    },
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