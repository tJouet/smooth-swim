<template>
  <div
    class="bg-water-image bg-cover bg-center flex items-center justify-center h-screen"
  >
    <div class="md:h-screen h-[350px] p-10 flex flex-row w-full">
      <p
        :class="'reflected'"
        class="sticky top-5 text-2xl font-semibold self-start mx-5 whitespace-nowrap"
      >
        About Us
      </p>

      <div class="w-full pl-6 flex flex-col items-start gap-4">
        <h1 :class="'reflected-title'" class="text-6xl font-bold pb-8 pl-6">
          Our Staff
        </h1>
        <StaffPresentation />
        <StaffPresentation />
        <StaffPresentation />
      </div>
      <div class="z-10 w-full flex flex-col between h-full bg-red-400">
        <div class="flex flex-col">
          <h1>THIS IS A TEST DO NOT PANIC</h1>
          <h1>THIS IS A TEST DO NOT PANIC</h1>
          <h1>THIS IS A TEST DO NOT PANIC</h1>
          <h1>THIS IS A TEST DO NOT PANIC</h1>
        </div>
        <Testimonies />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as Atoms from "@/atoms";
import Testimonies from "@/atoms/Testimonies.vue";

@Options({
  components: {
    ...Atoms,
    Testimonies,
  },
})
export default class AboutUs extends Vue {}
</script>
<style>
.reflected {
  -webkit-box-reflect: below -15px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
.reflected-title {
  -webkit-box-reflect: below -140px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
</style>

<!-- https://www.sebastianlundberg.dk/personlig-traening -->
<!--https://www.airnauts.com/  -->
