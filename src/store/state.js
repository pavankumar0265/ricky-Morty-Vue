export default {
  searchedKeywords: "",
  selectedFilters: [],
  rickyMortyObj: {
    info: {},
    data: [],
    dataCopy: [],
  },
  pageNumber: 1,
  singleCard: {},
  checkboxFilters: [
    {
      label: "Species",
      name: ["Human", "Mytholog", "Other Species..."],
    },
    {
      label: "Gender",
      name: ["Male", "Female"],
    },
    {
      label: "Origin",
      name: [
        "unknown",
        "Post-Apocalyptic Earth",
        "Nupita 4",
        "Other Origins...",
      ],
    },
  ],

}