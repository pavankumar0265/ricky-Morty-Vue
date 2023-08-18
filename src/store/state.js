export default {
  searchedKeywords: "",
  filteredValues: [],
  rickyMortyObj: {
    info: {},
    data: [],
    dataCopy: [],
  },
  pageNumber: 1,
  singleCharacter: {},
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