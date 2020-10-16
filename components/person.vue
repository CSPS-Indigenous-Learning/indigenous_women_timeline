<template>
  <b-col cols="12" lg="2" class="person">
    <a href="#" @click.prevent="toggle" @keypress.enter.prevent="toggle" role="tab" :aria-selected="showContentString" tabindex="0" class="text-center" :aria-labelledby="id + '_name'">
      <img :src="require('~/assets/persons/' + info.imgSrc + '.jpg')" alt="">
      <!--<img :src="require('~/assets/persons/' + info.imgSrc + '.jpg')" :alt="$i18n.locale == 'en' ? 'Image of ' + info.name : 'Image de ' + info.name" v-b-tooltip.top.hover.focus.html="info.name + ' (' + info.birth + '-' + info.death + ') ' + $t('selectToExpand')">-->
      <span :id="id + '_name'">{{ info.name }} ({{ info.birth }}-{{ info.death }})</span>
    </a>
    <transition name="timeline-content">
      <div class="content" v-show="showContent" role="tabpanel" :aria-label="info.name + $t('pressEsc')" :aria-expanded="showContentString" :aria-hidden="showContentStringInverted" tabindex="0" @keydown.esc="close">
        <h2 :id="id">{{ info.name }} ({{ info.birth }}-{{ info.death }})</h2>
        <span v-html="info.content"></span>
      </div>
    </transition>
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

          var that = this;
          setTimeout(function(){
            $(that.$el).find(".content")[0].focus();
          }, 510);
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

    a{
      text-align: center;
      display: block;
      color: black;
      text-decoration: none;
      padding-left: 5px;
      padding-right: 5px;

      transform: scale(1);
      transition: transform 0.4s, box-shadow 0.4s;

      &:hover, &:focus{
        text-decoration: none;
        transform: scale(0.95);

        img{
          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
        }
      }

      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: auto;
        display: block;

        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
      }
    }
    .content{
      width: 80%;
      margin-top: 25px;
      margin-left: 10%;
      background: url("~assets/AdobeStock_260952993_Preview.jpeg");
      background-size: cover;
      padding: 40px 50px;
      border: 3px solid white;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
      position: relative;

      transition: clip-path 0.5s, box-shadow 0.5s;

      @media (min-width: 992px){
        width: 250%;
        position: relative;
        left: -75%;
        margin-left: 0;
      }
      @media (min-width: 1200px){
        width: 300%;
        position: relative;
        left: -100%;
        margin-left: 0;
      }
      &:before{
        content: "";
        position: absolute;
        left: calc(50% - 15px);
        top: -20px;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 20px solid white;
      }
    }
  }

  .timeline-content-enter, .timeline-content-leave-to {
    clip-path: polygon(-10% -10%, 110% -10%, 110% -10%, -10% -10%);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0)!important;
  }

  .timeline-content-leave, .timeline-content-enter-to {
    clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1)!important;
  }

</style>

<i18n>

  {
    "en": {
      "selectToExpand" : "<span class='v-inv'>(select the image to get more information about this woman)</span>",
      "pressEsc": " (press the escape key to close)"
    },
    "fr": {
      "selectToExpand" : "<span class='v-inv'>(sélectionnez l'image pour obtenir plus d'information à propos de cette femme)</span>",
      "pressEsc": " (appuyez sur la touche d'échappement pour fermer)"
    }
  }

</i18n>
