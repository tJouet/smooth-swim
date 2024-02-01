<template>
  <h1
    :class="{ 'reflected-title': isReflected }"
    class="md:text-6xl text-4xl md:font-bold font-semibold"
  >
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    isReflected: Boolean,
  },
})
export default class Title extends Vue {
  title!: string;
  isReflected!: boolean;
}
</script>
<style>
.reflected-title {
  -webkit-box-reflect: below -140px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
</style>
