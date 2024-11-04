<template>
  <thead class="bg-slate-100 whitespace-nowrap lg:sticky lg:top-[70px]">
    <tr>
      <td class="p-3 group" v-for="headerItem in headerItems">
        <div class="flex items-center gap-2">
          <p>{{ headerItem.label }}</p>
          <button
            v-if="headerItem.sortable"
            class="invisible group-hover:visible size-5 flex items-center justify-center rounded-full group-hover:bg-slate-600 transition-all cursor-pointer"
          >
            <Icon
              name="tabler:arrows-down-up"
              size="16px"
              class="text-slate-100 my-auto"
            />
          </button>
        </div>
      </td>
    </tr>
  </thead>
</template>

<script setup lang="ts">
const headerItems = [
  {
    label: "User ID",
    sortable: false,
  },
  {
    label: "Name of the User",
    sortable: true,
  },
  {
    label: "Date of Registration",
    sortable: true,
  },
  {
    label: "Address",
    sortable: false,
  },
  {
    label: "Phone Number",
    sortable: false,
  },
];
</script>
