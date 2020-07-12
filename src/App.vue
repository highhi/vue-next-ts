<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Home from "@/components/Home.vue";
import Home from "@/components/Home";

export default defineComponent({
  name: "App",
  components: {
    Home
  }
});
</script>
