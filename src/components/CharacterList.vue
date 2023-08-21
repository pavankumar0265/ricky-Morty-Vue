<template>
  <div class="bg-neutral-700 text-white p-2 h-full">
    <img :src="rickyMorty.image" alt="image" class="w-full" />
    <div class="">
        <div class="flex ">
        <span>{{ rickyMorty.name }}</span>
      </div>
      <div class=" border-b flex justify-between px-px-2">
        <div class="text-xs">
          <span> id: {{ rickyMorty.id }}</span>
          <span class="pl-4">created: {{ createdBy(rickyMorty) }}</span>
        </div>
      </div>
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
    <div class="border-b grid grid-cols-2 justify-between px-px-2">
      <span>ORIGIN</span
      ><span class="text-right">{{ rickyMorty.origin.name }} </span>
    </div>
    <div class="grid grid-cols-2">
      <span>LAST LOCATION</span
      ><span class="text-right">{{ rickyMorty.location.name }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  rickyMorty: Object,
});
function createdBy(rickyMorty) {
  const date = new Date(Date.parse(rickyMorty.created));
  const currentDate = new Date();
  const formattedDate =
    currentDate.getFullYear() - date.toString().split(" ")[3];
  return `${formattedDate} years ago`;
}
</script>