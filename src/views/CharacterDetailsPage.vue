<template>
<div class="border-4  min-h-screen border-slate-500">
  <button @click="router.go(-1)" class="border-2 m-2 p-2 bg-lime-300">Redirecting  To Home Page</button>


  <div class="flex flex-col justify-center items-center">
    <img :src="characterCardDetails.image" :alt="characterCardDetails.id" />
    <div>Name - {{ characterCardDetails.name }}</div>
    <div>Status - {{ characterCardDetails.status }}</div>
    <div>Species - {{ characterCardDetails.species }}</div>
     <div>Origin - {{ characterCardDetails?.origin?.name }}</div>
    <div>Location - {{ characterCardDetails?.location?.name }}</div> 
  </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  id: String,
});

const router = useRouter();
const store = useStore();
const characterCardDetails = computed(() => store.state.singleCharacter);

onMounted(() => {
  store.dispatch("fetchCharacterById", props.id);
});
</script>
