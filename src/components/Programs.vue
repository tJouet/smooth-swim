<template>
  <div
    class="md:h-screen md:flex-row md:p-10 bg-darkBlue flex flex-col text-center items-center justify-between"
  >
    <StickyTitle isReflected:false title="Our programs" class="" />
    <Title isReflected:false title="Our programs" />
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
