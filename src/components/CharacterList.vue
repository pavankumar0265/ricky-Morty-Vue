<template>
  <div class="bg-neutral-700 text-white p-2 h-full">
    <img :src="data.image" alt="image" class="w-full" />
    <div class="">
        <div class="flex ">
        <span>{{ data.name }}</span>
      </div>
      <div class=" border-b flex justify-between px-px-2">
        <div class="text-xs">
          <span> id: {{ data.id }}</span>
          <span class="pl-4">created: {{ createdBy(data) }}</span>
        </div>
      </div>
    </div>
    <div class="border-b flex justify-between px-px-2">
      <span> STATUS</span><span>{{ data.status }}</span>
    </div>
    <div class="border-b flex justify-between px-px-2">
      <span>SPECIES</span>
      <span>{{ data.species }}</span>
    </div>
    <div class="border-b flex justify-between px-px-2">
      <span> GENDER</span><span>{{ data.gender }}</span>
    </div>
    <div class="border-b grid grid-cols-2 justify-between px-px-2">
      <span>ORIGIN</span
      ><span class="text-right">{{ data.origin.name }} </span>
    </div>
    <div class="grid grid-cols-2">
      <span>LAST LOCATION</span
      ><span class="text-right">{{ data.location.name }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: Object,
});
function createdBy(data) {
  const date = new Date(Date.parse(data.created));
  const currentDate = new Date();
  const formattedDate =
    currentDate.getFullYear() - date.toString().split(" ")[3];
  return `${formattedDate} years ago`;
}
</script>