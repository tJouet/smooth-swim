<template>
  <div
    class="md:h-screen md:flex-row md:p-10 py-10 bg-darkBlue flex flex-col text-center items-center justify-between"
  >
    <StickyTitle isReflected:false title="Our programs" />
    <Title isReflected:false title="Our programs" />
    <h2 class="text-2xl py-10 font-medium">
      From learning to swim to perfecting your stroke
    </h2>
    <ProgramDisplay />
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
export default class Programs extends Vue {}
</script>
