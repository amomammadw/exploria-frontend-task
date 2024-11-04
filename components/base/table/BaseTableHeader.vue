<template>
  <thead class="bg-slate-100 sticky top-[70px]">
    <tr>
      <td class="p-3" v-for="headerItem in headerItems">{{ headerItem }}</td>
    </tr>
  </thead>
</template>

<script setup lang="ts">
const headerItems = [
  "User ID",
  "Name of the User",
  "Date of Registration",
  "Address",
  "Phone Number",
];
</script>
