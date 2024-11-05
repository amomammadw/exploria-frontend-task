<template>
  <thead class="bg-slate-100 whitespace-nowrap sticky top-0">
    <tr>
      <td class="p-3 group" v-for="headerItem in headerItems">
        <div class="flex items-center gap-2">
          <p>{{ headerItem.label }}</p>
          <button
            v-if="headerItem.sortable"
            class="invisible group-hover:visible size-5 flex items-center justify-center rounded-full group-hover:bg-slate-600 transition-all cursor-pointer"
            @click="toggleSort(headerItem.slug)"
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
const headerItems = shallowRef([
  {
    label: "User ID",
    sortable: false,
    slug: "id",
  },
  {
    label: "Name of the User",
    sortable: true,
    slug: "name",
    isAsc: true,
  },
  {
    label: "Date of Registration",
    sortable: true,
    slug: "created_at",
    isAsc: true,
  },
  {
    label: "Address",
    sortable: false,
    slug: "address",
  },
  {
    label: "Phone Number",
    sortable: false,
    slug: "number",
  },
]);

const { setQuery } = useSearchQuery();

function toggleSort(slug: string) {
  const selectedSortIndex = headerItems.value.findIndex((x) => x.slug === slug);
  headerItems.value[selectedSortIndex].isAsc =
    !headerItems.value[selectedSortIndex].isAsc;

  setQuery({
    [slug]: headerItems.value[selectedSortIndex].isAsc ? "asc" : "desc",
  });
}
</script>
