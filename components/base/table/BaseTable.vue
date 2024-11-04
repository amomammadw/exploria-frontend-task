<template>
  <div class="lg:overflow-x-clip overflow-x-hidden">
    <table
      v-if="data"
      class="w-full lg:table block lg:overflow-clip overflow-auto relative"
    >
      <BaseTableHeader />

      <BaseTableBody />
    </table>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { setQuery } = useSearchQuery();

const { data } = await useFetch("/api/users", {
  watch: [() => route.query],
  key: "users-list",
  onRequest({ options }) {
    options.query = route.query;
  },
});

// * set default queries
if (!route.query.page || !route.query.per_page)
  setQuery({ page: "1", per_page: "10" });
</script>
