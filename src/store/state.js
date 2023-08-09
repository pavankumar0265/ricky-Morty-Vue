export default {
    rickyMortyObj: {
        info: {},
        result: [],
        resultCopy: [],
    },
    pageNumber:1,
    searchedKeywords:"",
    filteredValues:[],
    singleCharacter:{},
    checkboxFilters: [
        {
          name: "Species",
          values: ["Human", "Mytholog", "Other Species..."],
        },
        {
          name: "Gender",
          values: ["Male", "Female"],
        },
        {
          name: "Origin",
          values: [
            "unknown",
            "Post-Apocalyptic Earth",
            "Nupita 4",
            "Other Origins...",
          ],
        },
      ],
    
}