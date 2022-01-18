import { pageByPath } from '@fmgy/constant'
import { Menu } from '@fmgy/constant/menu'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface ApplicationState {
  activated: any
}

// define injection key
export const key: InjectionKey<Store<ApplicationState>> = Symbol()

export const store = createStore<ApplicationState>({
  state() {
    const activated = localStorage.getItem('activated')
    if (activated) {
      return {
        activated: JSON.parse(activated),
      }
    }
    return {
      activated: null,
    }
  },
  mutations: {
    setActived(state, activated: any) {
      if (!state.activated) {
        state.activated = {}
      }
      const page = pageByPath(activated.path)

      if (state.activated?.[page]?.path !== activated.path) {
        state.activated[page] = activated
        window.localStorage.setItem(
          'activated',
          JSON.stringify(state.activated)
        )
      }
    },
  },
})
