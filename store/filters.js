export const state = () => ({
  periods: ["1600", "1700", "1800", "1900", "1920", "1940", "1960", "1980", "2000"],
  tags: ["literature", "politics", "healthcare", "art", "veterans", "sports", "business", "media", "education", "law"],
  groups: ["first", "inuit", "metis"],
  filterText: ""
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
  },
  changeTags(state, value){
    state.tags = value;
  },
  
  addGroup(state, value) {
    state.groups.push(value);
  },
  removeGroup(state, value) {
    for(var i = 0; i < state.groups.length; i++){
      if(state.groups[i] === value){
        state.groups.splice(i, 1);
        i--;
      }
    }
  },
  changeGroups(state, value){
    state.groups = value;
  },
  
  changeText(state, value) {
    state.filterText = value;
  }
}
