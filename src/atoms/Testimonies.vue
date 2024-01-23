<template>
  <div class="flex flex-row relative w-full">
    <TestimonyBig class="absolute -left-60 bottom-0" />
    <TestimonySmall class="z-10 absolute bottom-0" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as Atoms from "@/atoms";

@Options({
  components: {
    ...Atoms,
  },
})
export default class Testimonies extends Vue {}
</script>
