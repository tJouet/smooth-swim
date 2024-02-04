<template>
  <div class="flex flex-row justify-end items-end">
    <TestimonyBig class="translate-x-[360px]" />
    <TestimonySmall class="z-10" />
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
