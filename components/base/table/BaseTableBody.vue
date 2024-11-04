<template>
  <tbody>
    <template v-if="data && data.length > 0">
      <tr v-for="tableItem in data" :key="tableItem.id">
        <td v-for="tdItem in tableItem" class="p-3">
          {{ tdItem }}
        </td>
      </tr>
    </template>

    <template v-else>
      <div class="p-3 absolute left-1/2 -translate-x-1/2 top-20">
        No Items Found
        <button
          class="text-blue-500 underline transition-all hover:text-blue-700"
          @click="resetFilter"
        >
          Reset Filters
        </button>
      </div>
    </template>
  </tbody>
</template>

<script setup lang="ts">
import type { IUser } from "~/types/user.type";

const { data } = useNuxtData<IUser[]>("users-list");

function resetFilter() {
  return navigateTo({
    query: {
      page: 1,
      per_page: 10,
    },
  });
}
</script>
