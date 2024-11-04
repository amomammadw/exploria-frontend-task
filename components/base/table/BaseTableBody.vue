<template>
  <tbody>
    <tr v-for="tableItem in data">
      <td v-for="tdItem in tableItem" class="p-3">
        {{ tdItem }}
      </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
const { data } = useNuxtData("users-list");
</script>
