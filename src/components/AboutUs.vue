<template>
  <div class="md:h-screen h-[350px] bg-red-600 flex flex-col justify-end p-10">
    <Testimony />
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
export default class AboutUs extends Vue {}
</script>
