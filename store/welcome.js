export const state = () => ({
  showWelcomeOnLoad: JSON.parse(window.localStorage.getItem("showWelcomeOnLoad"))
})

export const mutations = {
  setShowWelcomeOnLoad(state, value) {
    state.showWelcomeOnLoad = value;
    window.localStorage.setItem("showWelcomeOnLoad", value);
  },
}