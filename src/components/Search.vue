<template>
  <div class="mt-4 mr-8">
    <p class="ml-3">Search By Name</p>
    <input
      type="text"
      class="w-full p-2 border-2 border-black ml-3 lg:w-80"
      @input="handleChange"
    />
    <button
      class="rounded bg-slate-400 hidden m-2 p-2 h-10 lg:inline-block"
    >
      Search
    </button>
  </div>
</template>
<script setup>

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

function handleChange(e) {
  let rickMortyData = computed(() =>
    store.getters.setSearchedRickMorty(e.target.value)
  );
  store.commit("rickyMortyStateUpdating", rickMortyData.value);
  store.commit("setSearchedValues", e.target.value);
}
</script>
