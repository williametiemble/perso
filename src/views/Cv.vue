<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="2" class="mb-3">
        <b-button block to="/contact" class="text-uppercase font-weight-bold" variant="primary">Telecharger mon CV</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card header="Mes competences">
          <b-row>
            <b-col sm="12" lg="6"> 
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">Jquery</span>
                  <span class="ml-auto font-weight-bold">90%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="90" variant="success"></b-progress>
                </div>
              </div>  
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">VueJs</span>
                  <span class="ml-auto font-weight-bold">70%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="70" variant="success"></b-progress>
                </div>
              </div>  
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">Ajax</span>
                  <span class="ml-auto font-weight-bold">80%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="80" variant="success"></b-progress>
                </div>
              </div>  
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">Javascript</span>
                  <span class="ml-auto font-weight-bold">75%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="75" variant="success"></b-progress>
                </div>
              </div>                       
            </b-col>
            <b-col sm="12" lg="6">
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">Bootstrap</span>
                  <span class="ml-auto font-weight-bold">60%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="60" variant="success"></b-progress>
                </div>
              </div>  
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">Github</span>
                  <span class="ml-auto font-weight-bold">65%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="65" variant="primary"></b-progress>
                </div>
              </div>  
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">Wordpress</span>
                  <span class="ml-auto font-weight-bold">80%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="80" variant="primary"></b-progress>
                </div>
              </div>  
              <div class="progress-group">
                <div class="progress-group-header">
                  <i class="icon-user progress-group-icon"></i>
                  <span class="title">PHP</span>
                  <span class="ml-auto font-weight-bold">70%</span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-md" :animated="'true'" :value="70" variant="success"></b-progress>
                </div>
              </div>    
            </b-col>
          </b-row>
        </b-card>
        <b-card header="Mon parcours professionnel">
          <b-table class="table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
            <div slot="avatar" class="avatar" slot-scope="item">
              <img :src="item.value.url" class="img-avatar" alt="">
            </div>
            <div slot="society" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                DU {{item.value.dateStart}} AU {{item.value.dateEnd}}
              </div>
            </div>
            <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
            <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i>
            <div slot="skills" slot-scope="item">
              <span v-for="skill in item.value"> 
                {{skill}},
              </span>            
            </div>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>


export default {
  name: 'cv',
  components: {

  },
  data: function () {
    return {

      tableItems: [
        {
          avatar: { url: 'img/brand/logo.png'},
          society: { name: 'Freelance', dateStart: '24 Avril 2017', dateEnd: '1 decembre 2018' },
          country: { name: 'Cambodge', flag: 'kh' },
          skills: ['javascript', 'wordpress', 'Vuejs', 'Bootstrap', 'Github', 'PHP']
        },
        {
          avatar: { url: 'img/customers/accorhotel.jpg'},
          society: { name: 'Accor Hotel', dateStart: '24 Avril 2017', dateEnd: '1 decembre 2018' },
          country: { name: 'France', flag: 'fr' },
          skills: ['javascript', 'Github']
        },
        {
          avatar: { url: 'img/customers/psa.jpg'},
          society: { name: 'PSA Citroen', dateStart: '24 Avril 2017', dateEnd: '1 decembre 2018' },
          country: { name: 'France', flag: 'fr' },
          skills: ['javascript', 'Github', 'Bootstrap']
        },
        {
          avatar: { url: 'img/brand/logo.png'},
          society: { name: 'Freelance', dateStart: '24 Avril 2017', dateEnd: '1 decembre 2018' },
          country: { name: 'Hongkong', flag: 'hk' },
          skills: ['javascript', 'Bootstrap', 'wordpress', 'PHP', 'Juery', 'Ajax']
        },
        {
          avatar: { url: 'img/brand/logo.png'},
          society: { name: 'Spootnik', dateStart: '24 Avril 2017', dateEnd: '1 decembre 2018' },
          country: { name: 'Hongkong', flag: 'hk' },
          skills: ['javascript', 'Jquery', 'Ajax']
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="fa fa-building-o fa-lg"></i>',
          class: 'text-center'
        },
        society: {
          label: 'Societe'
        },
        country: {
          label: 'Pays',
          class: 'text-center'
        },
        skills: {
          label: 'Competences utilise'
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
    }

  }
}
</script>

<style >
  .card.no-border {
    border: none;
  }
  textarea {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #5c6873;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e4e7ea;
    border-radius: 0.25rem;
    width: 100%;
    padding: 0.375rem 0.75rem;  
    height: 200px;
  }
</style>
