<template>
  <div>
    <div
      class="xl:overflow-x-clip xl:h-[calc(100dvh-160px)] h-[calc(100dvh-250px)] overflow-y-auto overflow-x-hidden"
    >
      <table
        v-if="data"
        class="w-full xl:table block xl:overflow-clip overflow-auto relative"
      >
        <BaseTableHeader />

        <BaseTableBody />
      </table>
    </div>

    <BaseTableFooter />
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
