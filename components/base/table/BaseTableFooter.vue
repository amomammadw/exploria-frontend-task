<template>
  <div
    class="bg-gray-100 p-3 grid xl:grid-cols-5 grid-cols-2 items-center gap-3"
  >
    <div>
      Page:
      <input
        v-model="page"
        min="1"
        :max="maximumPages"
        class="base-input"
        type="number"
        @keyup.enter="applyPagination"
      />
    </div>

    <div>
      Per Page:
      <input
        v-model="perPage"
        class="base-input"
        min="1"
        :max="usersList.length.toString()"
        type="number"
        @keyup.enter="applyPagination"
      />
    </div>

    <div>
      <input v-model="search" class="base-input" placeholder="Search" />
    </div>

    <button
      class="base-button bg-blue-500 hover:bg-blue-600"
      @click="applyPagination"
    >
      Apply <Icon name="tabler:filter" size="18" />
    </button>

    <button
      class="base-button bg-red-500 hover:bg-red-600"
      @click="resetPagination"
    >
      Reset <Icon name="tabler:filter-off" size="18" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { usersList } from "~/data/records";

const route = useRoute();
const { setQuery } = useSearchQuery();

const page = ref(
  parseInt(route.query.page ? route.query.page.toString() : "1")
);

const search = ref(route.query.q ? route.query.q.toString() : "");

const perPage = ref(
  parseInt(route.query.per_page ? route.query.per_page.toString() : "10")
);

const maximumPages = computed(() =>
  Math.ceil(usersList.length / perPage.value).toString()
);

function applyPagination() {
  setQuery({ page: page.value.toString(), per_page: perPage.value.toString() });
}

function resetPagination() {
  search.value = "";
  page.value = 1;
  perPage.value = 10;
  return navigateTo({ query: { page: "1", per_page: "10" } });
}

watch(
  () => route,
  () => {
    page.value = parseInt(route.query.page!.toString());
    perPage.value = parseInt(route.query.per_page!.toString());
    search.value = route.query.q?.toString() || "";
  },
  {
    deep: true,
  }
);

watchDebounced(
  search,
  () => {
    setQuery({ q: search.value });
  },
  { debounce: 1000 }
);
</script>

<style scoped>
.base-input {
  @apply border outline-none px-2 py-1 xl:min-w-20 min-w-full;
}

.base-button {
  @apply flex justify-center items-center gap-2 xl:w-36 w-full rounded text-white transition-all px-4 py-1;
}
</style>
