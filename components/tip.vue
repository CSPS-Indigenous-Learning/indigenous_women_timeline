<template>
  <b-alert show class="tip">
    <div class="icon">
      <font-awesome-icon icon="lightbulb" size="2x" role="presentation" />
    </div>
    <p><slot /></p>
  </b-alert>
</template>

<script type="text/javascript">
  
  export default{
    data() {
      return {
        
      }
    }
  }
  
</script>

<style scoped lang="scss">

  .tip{
    transition: opacity 0.3s, transform 0.3s;
    background-color: transparent!important;
    color: black!important;
    border: none!important;
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

</style>

<i18n>
  {
    "en": {
      
    },
    "fr": {
      
    }
  }

</i18n>