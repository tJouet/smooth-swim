<template>
  <div
    class="bg-water-image bg-cover bg-center flex items-center justify-center h-screen"
  >
    <div class="md:h-screen h-[350px] p-10 flex flex-row w-full">
      <div class="w-[50%]">
        <p class="sticky top-20 left-80 text-xl font-semibold pl-10">
          About Us
        </p>
      </div>

      <Testimonies class="-right-80" />
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
