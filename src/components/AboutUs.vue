<template>
  <div
    class="bg-water-image bg-cover bg-center flex items-center justify-center h-screen"
  >
    <div class="md:h-screen h-[350px] p-10 flex flex-row w-full">
      <p
        class="sticky top-5 text-xl font-semibold self-start mx-5 whitespace-nowrap"
      >
        About Us
      </p>

      <div class="bg-green-200 w-full"></div>
      <div class="bg-red-200 w-full"></div>
    </div>
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

<!-- https://www.sebastianlundberg.dk/personlig-traening -->
<!--https://www.airnauts.com/  -->
