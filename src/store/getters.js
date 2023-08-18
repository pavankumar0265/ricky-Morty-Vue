export const setSearchedRickMorty = (state) => (keyword) => {
  if (state.filteredValues.length == 0) {
    return state.rickyMortyObj.data.filter((data) =>
      data.name.toLowerCase().includes(keyword.toLowerCase())
    );
  } else {
    return state.rickyMortyObj.dataCopy.filter((data) =>
      data.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

};

export function checkEmptyFilterValues(state) {
  if (state.filteredValues.length == 0) return true;
};

export const sortingCards = (state) => (value) => {
  return state.rickyMortyObj.dataCopy.sort((a, b) => {
    const multipier = value == "asc" ? +1 : -1;
    return multipier * (a.id - b.id);
  })
};

export const checkboxFiltersDelete = (state) => (filterValue) => {
  let step2 = state.filteredValues.filter((data) => data != filterValue);
  return step2
}
export const checkboxFiltersDeletedDataUpdating = (state) => (filterValue) => {
  if(state.filteredValues.length == 0) return state.rickyMortyObj.data;
  let step1 = JSON.parse(JSON.stringify(state.rickyMortyObj.data));
  let step2 = state.filteredValues.filter((data) => data != filterValue);
  return checkboxFiltersUpdatingandDeleting(step1,step2)
}

export const checkboxFiltersUpdating = (state) => {
  if(state.filteredValues.length == 0) return state.rickyMortyObj.data;
  let step1 = JSON.parse(JSON.stringify(state.rickyMortyObj.data));
  let step2 = JSON.parse(JSON.stringify(state.filteredValues));
  return checkboxFiltersUpdatingandDeleting(step1,step2);
};


export const checkboxFiltersUpdatingandDeleting =( step1,step2) => {
  let filteredCards =[];
  step2.forEach((data) => {
    filteredCards = step1.filter((filteredData) => {
      if (data == "Male" || data == "Female") {
        return filteredData.gender.includes(data)
      } else if(data == "Human"){
        return filteredData.species.includes(data)
      }
      else if(data == "unknown"){
        return filteredData.origin.name.includes(data)
      } else if(data == "Other Species..."){
        return filteredData.species.includes("Alien")
      }
      else if(data == "Post-Apocalyptic Earth"){
        return filteredData.origin.name.includes(data)
      }
      else if(data == "Nupita 4"){
        return filteredData.origin.name.includes(data)
      }
    })
    step1 = filteredCards;
  })
  console.log(filteredCards)
  return filteredCards;

}