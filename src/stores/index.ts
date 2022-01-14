import { ApplicationState, key } from './application'

import { Store, useStore as originalUseStore } from 'vuex'
import { computed, ComputedRef } from 'vue'

export const useStore = () => originalUseStore(key)

export function getState<T>(
  stateName: string,
  _store: Store<ApplicationState>
): ComputedRef<T> {
  return computed<T>(() => _store.state[stateName])
}
