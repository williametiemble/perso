<template>
  <div class="animated fadeIn">
    <login v-if="profile == null"></login>
    <div v-else>
      <b-row>
        <b-col sm="3" lg="3">
          <b-card no-body class="bg-primary">
            <b-card-body class="pb-1 pt-1">
              <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                <template slot="button-content">
                  <i class="icon-location-pin"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>          
              <h4 class="mb-0">Nom du projet</h4>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="5" lg="5">
        </b-col>
        <b-col sm="4" lg="4">
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="3">
          <b-card class="card-accent-primary">
            <b-table class="table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
              <div slot="price" class="price" slot-scope="item">
                {{item.value.mount}}$
              </div>
              <div slot="start" slot-scope="item">
                <div>{{item.value}}</div>
              </div>
              <div slot="end" slot-scope="item">
                <div>{{item.value}}</div>
              </div>
            </b-table>        
          </b-card>       
        </b-col>
        <b-col sm="5" lg="5">
        </b-col>
        <b-col sm="4" lg="4">
          <b-card header="URL de la version dev" class="card-accent-primary">
            <a href="https://www.test.com">www.test.com</a>   
          </b-card>  
          <b-card header="Compte de test" class="card-accent-primary">
            <b-table class="table-outline" responsive="sm" hover :items="tableItems2" :fields="tableFields2" head-variant="light">
              <div slot="price" class="price" slot-scope="item">
                {{item.value.mount}}$
              </div>
              <div slot="start" slot-scope="item">
                <div>{{item.value}}</div>
              </div>
              <div slot="end" slot-scope="item">
                <div>{{item.value}}</div>
              </div>
            </b-table> 
          </b-card>       
        </b-col>      
      </b-row>
    </div>
  </div>
</template>

<script>
import Login from '@/views/lab/Login'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'contact',
  components: {
    'login': Login,
  },
  computed: {
    ...mapGetters('user', {
      profile: 'profile'
    })
  },  
  data: function () {
    return {
      tableItems: [
        {
          price: {
            mount: 1500
          },
          start: '24 Avril 2017',
          end: '24 Avril 2017'
        }
      ],
      tableFields: {
        price: {
          label: 'Prix'
        },
        start: {
          label: 'Date de debut',
          class: 'text-center'
        },
        end: {
          label: 'Date de fin'
        }
      },
      tableItems2: [
        {
          displayName: 'jack adi',
          email: 'jackadi@test.com',
          pw: 'test01'
        },
        {
          displayName: 'jack adi',
          email: 'jackadi@test.com',
          pw: 'test01'
        },
        {
          displayName: 'jack adi',
          email: 'jackadi@test.com',
          pw: 'test01'
        }
      ],
      tableFields2: {
        displayName: {
          label: 'Compte'
        },
        email: {
          label: 'Email',
          class: 'text-center'
        },
        pw: {
          label: 'Mot de passe'
        }
      }      
    }
  },
  methods: {},
  created () {
    // this.loginStore()
    // if (!this.userInfo.role) {
    //   this.getUserTTC(this.profile.uid)
    // }
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
