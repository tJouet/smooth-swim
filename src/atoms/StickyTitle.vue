<template>
  <p
    :class="{ reflected: isReflected }"
    class="sticky top-5 text-2xl font-semibold self-start mx-5 whitespace-nowrap"
  >
    {{ title }}
  </p>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    isReflected: Boolean,
  },
})
export default class StickyTitle extends Vue {
  title!: string;
  isReflected!: boolean;
}
</script>
<style>
.reflected {
  -webkit-box-reflect: below -15px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
</style>
