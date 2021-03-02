<template>
  <div>
    <b-row class="welcome-container" align-v="center">
      <b-col cols="1">
        <button class="welcome" v-b-modal.welcome-message aria-labelledby="welcome-label"><font-awesome-icon icon="comment-alt" size="2x" role="presentation" /></button>
      </b-col>
      <b-col cols="11">
        <div id="welcome-label" class="text-center">{{ $t('label') }}</div>
      </b-col>
    </b-row>
    <b-modal id="welcome-message" :title="(($i18n.locale === 'en') ? 'The Timeline of Influential Indigenous Women' : 'La chronologie des femmes autochtones influentes')" centered cancel-disabled :header-close-label="$t('close')" :ok-title="$t('close')" ok-only @hidden="welcomeHidden" size="lg" title-tag="h2">
      <div v-if="$i18n.locale === 'en'">
        <p>The Timeline of Influential Indigenous Women documents the lives of over 150 First Nations, Inuit and Métis women, girls, Two-Spirit, lesbian, gay, bisexual, transgender, queer, questioning, intersex and asexual (<abbr>2SLGBTQQIA</abbr>) people. It acknowledges and recognizes the vital roles and contributions of Indigenous women to Canadian society.</p>
        <p>Most chronicles of the land known as Canada are presented only from the colonialist perspective. Such chronicles must also embrace Indigenous perspectives, including Indigenous values, cultures and livelihoods. They should take into consideration Indigenous worldviews acknowledging everything in the universe as being interconnected (land, people, animate and inanimate creatures) and all relationships as being highly valued. </p>
        <p>Indigenous people, and Indigenous women in particular, have a strong relationship to their traditional lands, which they treat with respect, reciprocity, restraint and reverence. To respond to climate variability, they have developed knowledge systems that are sophisticated, traditional, ecological and adaptive. Relationships with family, relatives and community extend to their ancestors and future descendants; any decision or action is weighted considering its impact on the next seven generations.</p>
        <p>Indigenous teachings, passed on through oral history, acknowledged that women and men were equal in power and had agency and autonomy within their life. Indigenous Peoples viewed all roles as important and did not place more importance on work performed by men than by women (as was often the case in European society). This meant that women and men were on an equal footing in Indigenous societies and that the complementarity and reciprocity of genders remained central to Indigenous community structure.</p>
        <p>Women were highly respected as life-givers and caretakers of life because of their spiritual and mental strength. Historically, their roles and responsibilities varied, but women were responsible for the early socialization of children. They represented, nourished, maintained and transmitted knowledge, history, skills, and ceremonies and protocols related to a timeless environmental stewardship of the land and water which was central to their livelihood. According to the needs of their community, women were involved in trapping, harvesting wild plants and medicines, fishing, hunting, tanning hides, processing meat, and making all the clothing and footwear for their families. They were also involved in political structures, trading, war and peacekeeping.</p>
        <p>The assault that Indigenous cultures have experienced during the last centuries has had a double impact on women. Discriminative policies and laws have created a mindset that Indigenous women are “less than” as they have two strikes against them: they are female and they are Indigenous. </p>
        <p>A revival is necessary and should be initiated by showcasing Indigenous women’s history and their roles in Indigenous society. It is needed so that Indigenous women regain and reclaim their rights and the recognition they deserve as defined in the Final Report of the National Inquiry into Missing and Murdered Indigenous Women and Girls:</p>
        <ul>
        <li>The right to culture that was taken by the targeted colonization policies based on the refutation of traditions, languages and ceremonies: the aggressive assimilation that took place in residential schools, the Sixties Scoop, and the current violence experienced by <abbr title="Two-Spirit, lesbian, gay, bisexual, transgender, queer, questioning, intersex and asexual">2SLGBTQQIA</abbr> people.</li>
        <li>The right to health that Indigenous colonization policies, with intent to sever and assault the relationships to land and community, impacted on the physical, mental, emotional, and spiritual health of Inuit, First Nations, Métis and <abbr title="Two-Spirit, lesbian, gay, bisexual, transgender, queer, questioning, intersex and asexual">2SLGBTQQIA</abbr> people.</li>
        <li>The right to security in order to address the constant threat to the physical, emotional, economic, social, and cultural security of First Nations, Inuit and Métis women, girls and <abbr title="Two-Spirit, lesbian, gay, bisexual, transgender, queer, questioning, intersex and asexual">2SLGBTQQIA</abbr> people. </li>
        <li>The right to justice as there is a critical disconnect between the current legal system and the ancestral knowledge of the First Nations, Inuit and Métis women, girls and <abbr>2SLGBTQQIA</abbr> people. The current system does take into account their experience with violence and the fact that their ancestral knowledge is under threat.</li>
        </ul>
        <p>This is an invitation to become acquainted with First Nations, Inuit and Métis women, girls and <abbr title="Two-Spirit, lesbian, gay, bisexual, transgender, queer, questioning, intersex and asexual">2SLGBTQQIA</abbr> people. They are mothers, daughters, sisters, aunts, nieces, grandmothers and granddaughters; they are also friends and colleagues.</p>
        <p>Each one is loved and admired. Each one is to be remembered.  </p>
        <p>Find out more by consulting the Timeline of Influential Indigenous Women.</p>
      </div>
      <div v-else-if="$i18n.locale === 'fr'">
        <p>La chronologie des femmes autochtones influentes documente la vie de plus de 150 femmes, filles, bispirituelles, lesbiennes, gaies, bisexuelles, transgenres, queer, en questionnement, intersexuelles et asexuées (<abbr>2SLGBTQQIA</abbr>) des Premières nations, des Inuits et des Métis. Elle reconnaît et valorise les rôles et contributions essentiels des femmes autochtones à la société canadienne.</p>

        <p>La plupart des chroniques du pays connu sous le nom de Canada sont présentées uniquement du point de vue colonialiste. Ces chroniques doivent également tenir compte des perspectives autochtones, notamment des valeurs, des cultures et des moyens de subsistance des autochtones.  Elles doivent prendre en considération les visions autochtones du monde qui reconnaissent que tout dans l'univers est interconnecté (la terre, les gens, les créatures animées et inanimées) et que toutes les relations sont hautement valorisées.</p>

        <p>Les peuples autochtones, et les femmes autochtones en particulier, entretiennent une relation forte avec leurs terres traditionnelles, qu'ils traitent avec respect, réciprocité, retenue et révérence. Pour répondre à la variabilité du climat, ils ont développé des systèmes de connaissances sophistiqués, traditionnels, écologiques et adaptatifs.  Les relations avec la famille, les proches et la communauté s'étendent à leurs ancêtres et à leurs futurs descendants&ThinSpace;; toute décision ou action est pondérée en fonction de son impact sur les sept générations suivantes.</p>

        <p>Les enseignements autochtones, transmis par l'histoire orale, reconnaissaient que les femmes et les hommes étaient égaux en pouvoir et disposaient d'une agence et d'une autonomie dans leur vie.  Les peuples autochtones considèrent que tous les rôles sont importants et n'accordent pas plus d'importance au travail effectué par les hommes qu'à celui effectué par les femmes (comme c'est souvent le cas dans la société européenne).  Cela signifie que les femmes et les hommes sont sur un pied d'égalité dans les sociétés indigènes et que la complémentarité et la réciprocité des sexes restent au cœur de la structure des communautés autochtones.</p>

        <p>Les femmes étaient très respectées en tant que donneuses de vie et gardiennes de la vie en raison de leur force spirituelle et mentale. Historiquement, leurs rôles et responsabilités ont varié, mais les femmes étaient responsables de la socialisation précoce des enfants. Elles représentaient, nourrissaient, entretenaient et transmettaient les connaissances, l'histoire, les compétences, ainsi que les cérémonies et les protocoles liés à une gestion environnementale intemporelle de la terre et de l'eau, qui était au cœur de leur subsistance.  Selon les besoins de leur communauté, les femmes participaient au piégeage, à la récolte de plantes sauvages et de médicaments, à la pêche, à la chasse, au tannage des peaux, à la transformation de la viande et à la fabrication de tous les vêtements et chaussures pour leur famille. Elles étaient également impliquées dans les structures politiques, le commerce, la guerre et le maintien de la paix.</p>

        <p>L'agression que les cultures autochtones ont subie au cours des derniers siècles a eu un double impact sur les femmes. Des politiques et des lois discriminatoires ont créé un état d'esprit selon lequel les femmes autochtones sont "moins que" car elles sont victimes de deux attaques : elles sont féminines et elles sont autochtones. </p>

        <p>Un renouveau est nécessaire et devrait être initié en mettant en valeur l'histoire des femmes autochtones et leur rôle dans la société autochtone. Elle est nécessaire pour que les femmes autochtones retrouvent et réclament leurs droits et la reconnaissance qu'elles méritent, tels que définis dans le rapport final de l'Enquête nationale sur les femmes et les filles autochtones disparues et assassinées&nbsp;:</p>
        <ul>
          <li>Le droit à la culture qui a été pris par les politiques de colonisation ciblées basées sur la réfutation des traditions, des langues et des cérémonies&nbsp;: l'assimilation agressive qui a eu lieu dans les pensionnats, le "Sixties Scoop", et la violence actuelle subie par les personnes <abbr title="bispirituelles, lesbiennes, gaies, bisexuelles, transgenres, queer, en questionnement, intersexuelles et asexuées">2SLGBTQQIA</abbr>.</li>
          <li>Le droit à la santé que les politiques de colonisation autochtone, avec l'intention de rompre et d'attaquer les relations avec la terre et la communauté, ont eu sur la santé physique, mentale, émotionnelle et spirituelle des Inuits, des Premières nations, des Métis et des <abbr title="bispirituelles, lesbiennes, gaies, bisexuelles, transgenres, queer, en questionnement, intersexuelles et asexuées">2SLGBTQQIA</abbr>.</li>
          <li>Le droit à la sécurité afin de faire face à la menace constante qui pèse sur la sécurité physique, émotionnelle, économique, sociale et culturelle des femmes, des filles et des personnes <abbr title="bispirituelles, lesbiennes, gaies, bisexuelles, transgenres, queer, en questionnement, intersexuelles et asexuées">2SLGBTQQIA</abbr> des Premières nations, des Inuits et des Métis. </li>
          <li>Le droit à la justice car il existe un décalage critique entre le système juridique actuel et les connaissances ancestrales des femmes, des filles et des peuples <abbr title="bispirituelles, lesbiennes, gaies, bisexuelles, transgenres, queer, en questionnement, intersexuelles et asexuées">2SLGBTQQIA</abbr> des Premières nations, des Inuits et des Métis. Le système actuel tient compte de leur expérience de la violence et du fait que leurs connaissances ancestrales sont menacées.</li>
        </ul>
        <p>C'est une invitation à faire connaissance avec les femmes, les filles et les personnes <abbr title="bispirituelles, lesbiennes, gaies, bisexuelles, transgenres, queer, en questionnement, intersexuelles et asexuées">2SLGBTQQIA</abbr> des Premières nations, des Inuits et des Métis. Ce sont des mères, des filles, des sœurs, des tantes, des nièces, des grand-mères et des petites-filles&ThinSpace;; ce sont aussi des amies et des collègues.</p>
        <p>Chacun est aimé et admiré. On doit se souvenir de chacune d’elles.</p>
        <p>Pour en savoir plus, consultez la chronologie des femmes autochtones influentes.</p>
      </div>
      <tip>{{ $t('closeTip') }}</tip>
    </b-modal>
  </div>
</template>

<script>

  import Tip from '~/components/tip.vue';

  export default{
    components: {
      Tip
    },

    data(){
      return{
        
      }
    },

    computed: {
      showWelcomeOnLoad: {
        get() {
          return this.$store.state.welcome.showWelcomeOnLoad;
        }
      }
    },

    methods: {
      welcomeHidden(){
        this.$store.commit('welcome/setShowWelcomeOnLoad', false);
      }
    },

    mounted(){
      if(this.showWelcomeOnLoad){
        this.$bvModal.show("welcome-message");
      }
    }
  }

</script>

<style lang="scss">

  .welcome-container{
    position: relative;
    right: 0;

    @media (min-width: 576px){
      right: calc(((100vw - 540px) / 2) - 35px);
    }
    @media (min-width: 768px){
      right: calc(((100vw - 720px) / 2) - 35px);
    }
    @media (min-width: 992px){
      right: calc(((100vw - 960px) / 2) - 35px);
    }
    @media (min-width: 1200px){
      right: calc(((100vw - 1140px) / 2) - 35px);
    }

    .welcome{
      background-color: white;
      border-radius: 50%;
      color: black;
      width: 70px;
      height: 70px;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
      border: none;
      display: block;
      position: relative;
      
      transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -webkit-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -moz-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -o-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
      -ms-transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;

      &:hover, &:focus{
        transform: scale(0.95);
        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.05);
        background-color: #f5f5f5;
      }
      svg{
        position: absolute;
        left: 19px;
        top: 20px;
      }
    }
  }

  #welcome-label{
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 5px;
    padding: 3px 10px;
    display: inline;
    position: relative;
    left: 50px;

    @media (min-width: 576px){
      left: 45px;
    }
    @media (min-width: 768px){
      left: 30px;
    }
    @media (min-width: 992px){
      left: 10px;
    }
    @media (min-width: 1200px){
      left: -5px;
    }
    

    &:before{
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: -11.5px;
      top: calc(50% - 7px);
      border-top: 7px solid transparent;
      border-right: 11.5px solid rgba(0, 0, 0, 0.7);
      border-bottom: 7px solid transparent;
    }
  }

  #welcome-message{
    h2{
      font-size: 1.7em;
      line-height: 1.2;
    }
    .modal-footer button{
      background-color: black;
      color: white;

      &:hover, &:focus{
        background-color: #222;
      }
    }
  }

</style>

<i18n>

  {
    "en": {
      "label": "Welcome Message",

      "close": "Close",
      "closeTip": "To get back to this message, select the icon in the top-left corner of the page."
    },
    "fr": {
      "label": "Message de bienvenue",

      "close": "Fermer",
      "closeTip": "Pour revoir ce message, sélectionnez l'icône dans le coin supérieur gauche de la page."
    }
  }

</i18n>