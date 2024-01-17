<template>
  <div class="flex flex-col">
    <Hero />
    <p>SECOND PART</p>
  </div>
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
