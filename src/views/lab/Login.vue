<template>
  <div class="animated fadeIn">
    <b-card-group deck class="mb-4">
      <b-card header="Connectez-vous au LAB" class="card-accent-danger"> 
        <b-card-body>
          <b-form>
            <b-input-group class="mb-3">
              <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
              <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username email" />
            </b-input-group>
            <b-input-group class="mb-4">
              <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
              <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" />
            </b-input-group>
            <b-row>
              <b-col cols="6">
                <b-button variant="primary" class="px-4" @click="login">Connection</b-button>
              </b-col>
              <b-col cols="6" class="text-right">
                <b-button variant="link" class="px-0">Mo de passe oublie?</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card class="bg-danger no-border"> 
        <h5 style="text-align: center;">
          Pas encore de compte ? Inscrivez-vous. 
        </h5>
        <br/>
        <b-form>
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text>@</b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Email" autocomplete="email" />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="new-password" />
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="password" class="form-control" placeholder="Repeat password" autocomplete="new-password" />
          </b-input-group>

          <b-button variant="success" block>Create Account</b-button>
        </b-form>
      </b-card>
    </b-card-group>  
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  components: {

  },
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters('user', {
      profile: 'profile'
    })
  },    
  methods: {
    ...mapActions('user', {
      loginStore: 'loginStore'
    }),  
    login () {
      console.log('login')
      this.loginStore()
      console.log('profile', this.profile.name)
    }
  },
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
