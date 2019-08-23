import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
const token = "fxbyuQEkpl8EZ08TpW0F3MT86t1HAqXy4I7V2VGdE3PkKF5V6pfhLRzR6zTF";

export default new Vuex.Store({
  getters: {
    info: state => state.info,
    oneinfo: state => state.oneinfo
  },
  state: {
    info: [{ imageUrl: '' }],
    oneinfo: {
      descriptionShort: {
        GuestMax: '',
        Bed: [''],
      },
      imageUrl:['']
    }
  },
  mutations: {
    Mu_GetInfo(state, req) {
      state.info = req
    },
    Mu_GetoneInfo(state, req) {
      state.oneinfo = req
    }
  },
  actions: {
    GetInfo({ commit }) {
      axios({
        method: 'GET',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`,
        responseType: 'json',
        headers: {
          Acctept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      }).then(function (response) {
        console.log(response.data.items)
        commit('Mu_GetInfo', response.data.items)
      }).catch(function (error) {
        console.log(error);
      })
      console.log('cors problem')
    },
    GetoneInfo({ commit }, id) {
      axios({
        method: 'GET',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,
        responseType: 'json',
        headers: {
          Acctept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      }).then(function (response) {
        console.log(response.data)
        commit('Mu_GetoneInfo', response.data.room[0])
      }).catch(function (error) {
        console.log(error);
      })
      console.log('cors problem')
    }
  }
})
