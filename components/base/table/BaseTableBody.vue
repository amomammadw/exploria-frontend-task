<template>
  <tbody>
    <template v-if="data && data.length > 0">
      <tr
        :key="tableItem.id"
        v-for="tableItem in data"
        class="hover:bg-slate-100 transition-all"
      >
        <td
          v-for="(tdItem, tdKey) in tableItem"
          class="p-3 whitespace-nowrap"
          :class="tdKey === 'id' ? 'lg:max-w-full max-w-36 truncate' : ''"
        >
          {{ tdItem }}
        </td>
      </tr>
    </template>

    <template v-else>
      <div class="p-3 w-full">
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
