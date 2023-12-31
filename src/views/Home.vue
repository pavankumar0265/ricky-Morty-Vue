<template>
  <div class="flex gap-2 flex-col m-2 p-2 sm:flex-row">
    <div class="sm:basis-1/4 w-100">
      <h1>Filters</h1>

      <div v-for="filter of checkboxFilters" :key="filter.label">
        <div class="border-black border flex flex-col p-2 mb-3">
          <h4>{{ filter.label }}</h4>

          <div v-for="value of filter.name" v-bind:key="value.label">
            <label :for="value">
              <input
                type="checkbox"
                :value="value"
                :name="value"
                v-model="filterValue"
                @change="handleChange"
              />{{ value }}</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="sm:basis-3/4 w-90">
      <h1 class="ml-4">Selected filter</h1>
      <div v-if="isCheckBoxFiltersEmpty" class="ml-3">No Filters Applied</div>
      <div v-else class="flex flex-col md:flex-row">
        <div v-for="filterValue of selectedFilters" :key="filterValue">
          <button class="rounded bg-slate-300 p-2 ml-2 flex flex-row">
            <div>{{ filterValue }}</div>
            <div @click="handleCloseFilter(filterValue)">&#x2715;</div>
          </button>
        </div>
      </div>
      <div class="flex flex-col justify-between md:flex-row">
        <Search />

        <div class="w-40 m-2">
          <select
            @change="handleSort"
            class="border-2 w-full border-black p-2 md:mt-10"
          >
            <option value="" disabled selected hidden>Sort by Id</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div v-for="data of rmDataCopy" :key="data.id">
          <router-link
            :to="{
              name: 'CharacterDetailsPage',
              params: {
                name: data.name,
                id: data.id,
              },
            }"
          >
            <CharacterList :data="data" />
          </router-link>
        </div>
      </div>
      <div class="w-full text-center">
        <button
          class="border-2 p-2 border-slate-500 mt-4"
          v-if="rmData.dataCopy.length > 0"
          @click="handleLoadMore"
        >
          Load More
        </button>
        Total Cards - {{ rmDataCopy.length }}
      </div>
      <div v-if="rmDataCopy.length == 0">No Cards to Display</div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import CharacterList from "../components/CharacterList.vue";
import Search from "../components/Search.vue";

const store = useStore();

const rmData = computed(() => store.state.rickyMortyObj);
const rmDataCopy = computed(() => store.state.rickyMortyObj.dataCopy);
const pageNumber = computed(() => store.state.pageNumber);
const selectedFilters = computed(() => store.state.selectedFilters);
const checkboxFilters = store.state.checkboxFilters;
let filterValue = ref([]);
const isCheckBoxFiltersEmpty = computed(() => store.getters["checkEmptyFilterValues"]);

onMounted(() => {
  store.dispatch("fetchApiData");
});

function handleSort(e) {
  let rickMortyData = computed(() =>
    store.getters.sortingCards(e.target.value)
  );
  store.commit("rickyMortyStateUpdating", rickMortyData.value);
}
function handleLoadMore() {
  store.dispatch("fetchRickMortyApiByPageNumber", pageNumber);
}
function handleChange() {
  store.commit("setFilteredValues", filterValue.value);
  let data = computed(() => store.getters["checkboxFiltersUpdating"]);
  store.commit("rickyMortyStateUpdating", data.value);
}
function handleCloseFilter(val) {
  let data = computed(() => store.getters.checkboxFiltersDelete(val));
  store.commit("setFilteredValues", data.value);
  filterValue.value = filterValue.value.filter((data) => data != val);
  let dataUpdating = computed(() =>
    store.getters.checkboxFiltersDeletedDataUpdating(val)
  );
  store.commit("rickyMortyStateUpdating", dataUpdating.value);
}
</script>