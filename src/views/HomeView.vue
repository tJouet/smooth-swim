<template>
  <Hero />
  <div class="relative h-[450px] bg-red-500 w-full"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Hero from "@/components/Hero.vue";
@Options({
  components: {
    Hero,
  },
})
export default class HomeView extends Vue {}
</script>
