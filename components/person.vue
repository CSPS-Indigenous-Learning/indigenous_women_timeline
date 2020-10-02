<template>
  <b-col cols="12" md="2" class="person">
    <img :src="require('~/assets/persons/' + info.imgSrc + '.jpg')" :alt="$i18n.locale == 'en' ? 'Image of ' + info.name : 'Image de ' + info.name" @click="toggle" role="tab" :aria-selected="showContentString" tabindex="0">
    <div class="content" v-show="showContent" role="tabpanel" :aria-labelledby="id" :aria-expanded="showContentString" :aria-hidden="showContentStringInverted">
      <h2 :id="id">{{ info.name }} ({{ info.birth }}-{{ info.death }})</h2>
      <span v-html="info.content"></span>
    </div>
  </b-col>
</template>

<script>

  export default{
    components: {

    },

    props:{
      info: { type: Object, default: function () { return {} } },
      id: { type: String, default: "" }
    },

    data(){
      return{
        showContent: false
      }
    },

    computed: {
      showContentString(){
        if(this.showContent){
          return "true";
        }
        else{
          return "false";
        }
      },
      showContentStringInverted(){
        if(this.showContent){
          return "false";
        }
        else{
          return "true";
        }
      }
    },

    methods:{
      close(){
        this.showContent = false;
      },
      toggle(){
        this.showContent = !this.showContent;

        if(this.showContent){
          this.$emit("open");
        }
      }
    },

    mounted(){
      //code
    },
  }

</script>

<style scoped lang="scss">

  .person{
    padding: 0;
    position: relative;
    margin-bottom: 50px;

    transition: all 0.7s;

    img{
      width: 100px;
      border-radius: 50%;
      margin: auto;
      display: block;
    }
    .content{
      width: 100%;
      margin-top: 15px;
      width: 100%;

      @media (min-width: 992px){
        width: 200%;
        position: relative;
        left: -50%;
      }
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
