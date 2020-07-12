<template>
  <ul>
    <li v-for="repo in repos" :key="repo.id">
      <p>{{ repo.name }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Repo } from "@/types";

export default defineComponent({
  name: "RepoList",
  props: {
    repos: {
      type: Array as PropType<Repo[]>,
      default: []
    }
  }
});
</script>
