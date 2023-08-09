export function setApiData(state, {data}){
    state.rickyMortyObj.info = data.info;
    state.rickyMortyObj.result = data.results;
    state.rickyMortyObj.resultCopy = data.results;
    state.pageNumber =1
}

export function setSearchedValues(state, searchedKeywords) {
    state.searchedKeywords = searchedKeywords;
  }

  export function rickyMortyStateUpdating(state, rickMorty) {
    
    state.rickyMortyObj.resultCopy = rickMorty;
  }

  export function setRickMortyApiByPageNumber(state, { data }) {
    state.rickyMortyObj.info = data.info;
    let oldData = state.rickyMortyObj.result;
    let newData = data.results;
    let result = oldData.concat(newData);
    state.rickyMortyObj.result = result;
    state.rickyMortyObj.resultCopy = result;

    state.pageNumber += 1;
  }
  export function setCharacterById(state, { data }) {
    state.singleCharacter = data;
  }
  export function setErrorMessage(state, message) {
    state.error = message || "error present";
  }
  export function setFilteredValues(state, filteredValues) {
    state.filteredValues = filteredValues;
  }
  