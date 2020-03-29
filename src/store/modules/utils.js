const state = {
  visible: false,
  dialogTitle: null,
  message: null
}

const getters = {
  getVisibility: (state) => { return state.visible },
  getDialogTitle: (state) => { return state.dialogTitle },
  getMessage: (state) => { return state.message }
}

const actions = {
}

const mutations = {
  setVisibility (state, visible) {
    state.visible = visible
  },
  setDialogTitle (state, dialogTitle) {
    state.dialogTitle = dialogTitle
  },
  setMessage (state, message) {
    state.message = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
