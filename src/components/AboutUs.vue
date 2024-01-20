<template>
  <div class="md:h-screen h-[350px] bg-red-600 p-10 flex flex-row">
    <div class="bg-clearBlue w-[50%]"></div>
    <Testimonies class="relative -right-80" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as Atoms from "@/atoms";
import Testimonies from "@/atoms/Testimonies.vue";

@Options({
  components: {
    Testimonies,
    ...Atoms,
  },
})
export default class AboutUs extends Vue {}
</script>
