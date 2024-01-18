<template>
  <Hero />
  <div class="relative h-screen w-full"></div>
  <Programs />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Hero from "@/components/Hero.vue";
import Programs from "@/components/Programs.vue";
@Options({
  components: {
    Hero,
    Programs,
  },
})
export default class HomeView extends Vue {}
</script>
