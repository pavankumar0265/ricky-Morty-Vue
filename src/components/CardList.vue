<template>
<div
          class="bg-neutral-700 text-white p-2 h-full "
        >
          <img :src="rickyMorty.image" alt="image" />
          <div class="border-b flex justify-between px-px-2">
            <span> ID</span><span>{{ rickyMorty.id }}</span>
          </div>
            <div class="border-b flex justify-between px-px-2">
            <span> NAME</span><span>{{ rickyMorty.name }}</span>
          </div>
          <div class="border-b flex justify-between px-px-2">
            <span> STATUS</span><span>{{ rickyMorty.status }}</span>
          </div>
          <div class="border-b flex justify-between px-px-2">
            <span>SPECIES</span>
            <span>{{ rickyMorty.species }}</span>
          </div>
          <div class="border-b flex justify-between px-px-2">
            <span> GENDER</span><span>{{ rickyMorty.gender }}</span>
          </div>
          <div class="border-b flex justify-between px-px-2">
            <span>ORIGIN</span><span>{{ rickyMorty.origin.name }} </span>
          </div>
          <div>
            <span>LAST LOCATION</span><span>{{ rickyMorty.location.name }}</span>
          </div>
        </div>
</template>
<script setup>

const props = defineProps({
  rickyMorty: Object,
});


</script>