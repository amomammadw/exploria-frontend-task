<template>
  <div>
    <BaseTable />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { setQuery } = useSearchQuery();

const { data } = await useLazyFetch("/api/users", {
  watch: [() => route.query],
  onRequest({ options }) {
    options.query = route.query;
  },
});

// * set default queries
if (!route.query.page && !route.query.per_page)
  setQuery({ page: "1", per_page: "10" });
</script>
