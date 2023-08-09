export const setSearchedRickMorty = (state) => (keyword) => {
  if (state.filteredValues.length == 0) {
    return state.rickyMortyObj.result.filter((data) =>
      data.name.toLowerCase().includes(keyword.toLowerCase())
    );
  } else {
    return state.rickyMortyObj.resultCopy.filter((data) =>
      data.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

};

export function checkEmptyFilterValues(state) {
  if (state.filteredValues.length == 0) return true;
};

export const sortingCards = (state) => (value) => {
  return state.rickyMortyObj.resultCopy.sort((a, b) => {
    const multipier = value == "asc" ? +1 : -1;
    return multipier * (a.id - b.id);
  })
};

export const checkboxFiltersDelete = (state) => (filterValue) => {
  let deletingCheckboxvalue = state.filteredValues.filter((fValue) => fValue != filterValue);
  return deletingCheckboxvalue
}

export const checkboxFiltersUpdating = (state) => {
  return state.rickyMortyObj.result
};