import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface ApplicationState {
  activated: string
}

// define injection key
export const key: InjectionKey<Store<ApplicationState>> = Symbol()

export const store = createStore<ApplicationState>({
  state() {
    return {
      activated: window.localStorage.getItem('manga') || 'manga',
    }
  },
  mutations: {
    setActived(state, activated: string) {
      if (state.activated !== activated) {
        state.activated = activated
        window.localStorage.setItem('manga', activated)
      }
    },
  },
})
