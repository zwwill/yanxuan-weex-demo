import { fetchItems, fetchIdsByType, fetchUser } from './fetch'

const LOAD_MORE_STEP = 10

// ensure data for rendering given list type
export function FETCH_LIST_DATA ({ commit, dispatch, state }, { type }) {
  commit('SET_ACTIVE_TYPE', { type })
  return fetchIdsByType(type)
    .then(ids => commit('SET_LIST', { type, ids }))
    .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
}

// load more items
export function LOAD_MORE_ITEMS ({ dispatch, state }) {
  state.counts[state.activeType] += LOAD_MORE_STEP
  return dispatch('ENSURE_ACTIVE_ITEMS')
}

// ensure all active items are fetched
export function ENSURE_ACTIVE_ITEMS ({ dispatch, getters }) {
  return dispatch('FETCH_ITEMS', {
    ids: getters.activeIds
  })
}

export function FETCH_ITEMS ({ commit, state }, { ids }) {
  // only fetch items that we don't already have.
  const newIds = ids.filter(id => !state.items[id])
  return newIds.length
    ? fetchItems(newIds).then(items => commit('SET_ITEMS', { items }))
    : Promise.resolve()
}

export function FETCH_USER ({ commit, state }, { id }) {
  return state.users[id]
    ? Promise.resolve(state.users[id])
    : fetchUser(id).then(user => commit('SET_USER', { user }))
}
