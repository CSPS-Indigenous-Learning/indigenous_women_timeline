export const state = () => ({
  periods: ["1600", "1700", "1800", "1900", "1920", "1940", "1960", "1980", "2000", ],
  tags: ["literature", "politics", "healthcare", "art", "veterans", "sports", "business", "media", "education", "law", ]
})

export const mutations = {
  addPeriod(state, value) {
    state.periods.push(value);
  },
  removePeriod(state, value) {
    for(var i = 0; i < state.periods.length; i++){
      if(state.periods[i] === value){
        state.periods.splice(i, 1);
        i--;
      }
    }
  },
  addTag(state, value) {
    state.tags.push(value);
  },
  removeTag(state, value) {
    for(var i = 0; i < state.tags.length; i++){
      if(state.tags[i] === value){
        state.tags.splice(i, 1);
        i--;
      }
    }
  }
}
