/*import firebase from '@/firebase'
import db from '@/dbTTC'*/

import { SET_PROFILE} from './mutations'

const state = {
  profile: null
}

const getters = {
  profile: ({ profile }) => profile
}

const mutations = {
  [SET_PROFILE] (state, profile) {
    state.profile = {
      name: profile.displayName,
      uid: profile.uid
    }
  }

}

const actions = {
  async loginStore (store) {
    console.log('prout');
    store.commit('SET_PROFILE', {
      displayName: 'william Etiemble',
      uid: 'dgdgd4546546fdgdfg'
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
