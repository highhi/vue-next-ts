<template>
  <form @submit="handleSubmit">
    <input type="text" name="user" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gitHubApi } from "@/uitl";
import { Repo, DefinitionEvent } from "@/types";

export default defineComponent({
  name: "SearchForm",
  emits: ["update"],
  setup(_, { emit }) {
    async function handleSubmit(event: DefinitionEvent<HTMLFormElement>) {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const username = form.get("user") as string;
      const repos = await gitHubApi<Repo[]>(`/users/${username}/repos`);

      try {
        emit("update", repos);
      } catch (err) {
        console.error(err);
      }
    }

    return { handleSubmit };
  }
});
</script>
