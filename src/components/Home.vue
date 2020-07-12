<template>
  <div>
    <SearchForm @update="setRepos" />
    <LazyRepoList :repos="state.repos" v-if="isDisplayRepos" />
  </div>
</template>

<script lang="ts">
import { defineComponent, shallowReactive, computed } from "vue";
import SearchForm from "./SearchForm.vue";
import { LazyRepoList } from "./LazyRepoList";
import { Repo } from "@/types";

export default defineComponent({
  name: "Home",
  components: { SearchForm, LazyRepoList },
  setup() {
    const state = shallowReactive<{ repos: Repo[] }>({ repos: [] });

    function setRepos(repos: Repo[]) {
      state.repos = repos;
    }

    const isDisplayRepos = computed(() => state.repos.length > 0);

    return {
      isDisplayRepos,
      setRepos,
      state
    };
  }
});
</script>
