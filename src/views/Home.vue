<template>
  <div class="animated fadeIn">

    <b-card-group deck class="mb-4">
        <b-card header="Qui suis-je ?" class="card-accent-primary">

          <div class="p-1 clearfix">
            <img src="img/avatars/1.jpg" class="p-1 mr-3 img-avatar float-left" alt="">
            <div class="h5 text-primary mb-0 mt-2">William Etiemble</div>
            <div class="text-muted text-lowercase font-weight-bold font-xs">william.etiemble@gmail.com</div>
          </div>

          <p style="text-align: justify">
            Developpeur Web depuis plus de 10 ans ; Je pourrais vous realiser ce qu'il vous plaira. 
            <span class=" text-primary"> "Site vitrine"</span>, 
            <span class=" text-primary"> "Site e-commerce"</span>, 
            <span class=" text-primary"> "plateforme"</span>, 
            <span class=" text-primary"> "application mobile"</span>, 
            <span class=" text-primary"> "animation"</span> et 
            <span class=" text-primary"> "jeux-video"</span>.
          </p> 
          <div class="h5 text-primary mb-0 mt-2">
            Mes competences
          </div>
          <div class="row mb-1">

            <div class="col-sm-5">HTML5:</div>
            <div class="col-sm-7 pt-1">                   
              <b-progress :value="70" variant="success" striped :animated="'true'" class="mb-2" show-progress></b-progress>
            </div>

            <div class="col-sm-5">CSS3:</div>
            <div class="col-sm-7 pt-1">
              <b-progress :value="65" variant="primary" striped :animated="'true'" class="mb-2" show-progress></b-progress>
            </div>

            <div class="col-sm-5">Javascript:</div>
            <div class="col-sm-7 pt-1">
              <b-progress :value="90" variant="warning" striped :animated="'true'" class="mb-2" show-progress></b-progress>
            </div> 

            <div class="col-sm-5">Photoshop:</div>
            <div class="col-sm-7 pt-1">
              <b-progress :value="60" variant="danger" :animated="'true'" class="mb-3" show-progress></b-progress>
            </div>

          </div>
          <div slot="footer">
            <b-button block to="/contact" class="text-uppercase font-weight-bold" variant="primary">Contactez-moi</b-button>
          </div>    
        </b-card>
        <b-card header="Ce que je peux faire pour vous !" class="card-accent-warning">
            <p style="text-align: justify">
              Votre site Internet est votre vitrine sur le web ! 
              <span class="text-primary">Il se doit d'être irréprochable.</span>
            </p>
            <p style="text-align: justify">
              Aujourd'hui, il vous est tout à fait possible de créer votre site internet via des CMS ou avec des éditeurs en assemblant des templates.
            </p>
            <h4 >Mais cela ne fait hélas pas tout.</h4>
            <p style="text-align: justify">
              L' intervention d'un developpeur web pour votre site internet permettra de donner à celui-ci une touche professionnelle notamment grâce au respect 
              <span class="text-primary">d'une charte graphique</span>, 
              <span class="text-primary">un design qui vous ressemble</span> et 
              <span class="text-primary">taillé sur mesure en fonction de vos attentes</span>.        
            </p> 
            
            <div slot="footer">
              <b-button block to="/devis" class="text-uppercase font-weight-bold" variant="warning">Faire un devis</b-button>
            </div>

        </b-card>

        <b-card header="Mes derniers clients !" class="card-accent-success">
          <b-carousel id="carousel1"
                      background="#ababab"
                      :interval="2000"
                      img-width="1024"
                      img-height="1024"
          >

          <!-- Text slides with image -->
          <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="../../public/img/customers/monheros.jpg" alt="image slot">
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="../../public/img/customers/journalducoin.jpg" alt="image slot">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="../../public/img/customers/accorhotel.jpg" alt="image slot">
          </b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="../../public/img/customers/psa.jpg" alt="image slot">
          </b-carousel-slide>


        </b-carousel>

          <div slot="footer">
            <b-button block class="text-uppercase font-weight-bold" variant="success">En savoir plus</b-button>
          </div>
        </b-card>
        <b-card header="Rejoignez le LAB !" class="card-accent-danger">

          <p style="text-align: justify">
            Le LAB est un outil gratuit que je vous met a disposition pour faciliter notre collaboration.
          </p> 
          <ul>
            <li>
              Chattez avec moi
            </li>
            <li>
              Faire une requete
            </li>
            <li>
              Voir l'avancement de votre projet
            </li>
            <li>
              Tester mes derniers prototype
            </li>
            <li>
              Suivi de vos facturation
            </li>
          </ul>
          <h4 style="text-align: justify" class="text-primary">
            Le temps, c'est de l'argent. Le role du LAB est de vous offrir des retours sur votre projet le plus rapidement possible.
          </h4>
          <div slot="footer">
            <b-button block to="/lab" class="text-uppercase font-weight-bold" variant="danger">Rejoignez le LAB</b-button>
          </div>
        </b-card>
    </b-card-group>



  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    },
    changeMainClass (value) {
      document.getElements
    }
  }
}
</script>

<style scoped>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
  .card-footer {
    padding: 0px;
  }
  .extendedCard {
    width: 100%;
    height: 0%;
    position: absolute;
    bottom: calc(-100% + 5px);
    left: 0;
  }
  .extendedCard.primary {
    background: #20a8d8;
  }  
  .extendedCard.open {
    height: 75%;
  }
</style>
