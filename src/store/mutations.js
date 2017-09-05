export function SET_ACTIVE_TYPE (state, { type }) {
  state.activeType = type
}

export function SET_LIST (state, { type, ids }) {
  state.lists[type] = ids
}

export function SET_ITEMS (state, { items }) {
  items.forEach(item => {
    if (item) {
      Vue.set(state.items, item.id, item)
    }
  })
}

export function SET_USER (state, { user }) {
  Vue.set(state.users, user.id, user)
}
