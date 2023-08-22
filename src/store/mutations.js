export function setApiData(state, {data}){
    state.rickyMortyObj.info = data.info;
    state.rickyMortyObj.data = data.results;
    state.rickyMortyObj.dataCopy = data.results;
    state.pageNumber =1
}

export function setSearchedValues(state, searchedKeywords) {
    state.searchedKeywords = searchedKeywords;
  }

  export function rickyMortyStateUpdating(state, data) {
    state.rickyMortyObj.dataCopy = data;
  }

  export function setRickMortyApiByPageNumber(state, { data }) {
    state.rickyMortyObj.info = data.info;
    let oldData = state.rickyMortyObj.data;
    let newData = data.results;
    let result = oldData.concat(newData);
    state.rickyMortyObj.data = result;
    state.rickyMortyObj.dataCopy = result;

    state.pageNumber += 1;
  }
  export function setCharacterById(state, { data }) {
    state.singleCard = data;
  }
  export function setErrorMessage(state, message) {
    state.error = message || "error present";
  }
  export function setFilteredValues(state, selectedFilters) {
    state.selectedFilters = selectedFilters;
  }
  