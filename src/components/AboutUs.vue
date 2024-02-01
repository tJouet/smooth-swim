<template>
  <div class="bg-water-image bg-cover bg-center h-screen">
    <div class="md:h-screen h-[350px] p-10 flex flex-row">
      <StickyTitle isReflected="true" title="About Us" />
      <div class="w-full pl-6 flex flex-col items-start gap-4 flex-1">
        <Title :title="'Our staff'" :isReflected="true" class="pb-8 pl-6" />
        <StaffPresentation />
        <StaffPresentation />
        <StaffPresentation />
      </div>
      <div class="flex flex-col h-full items-center justify-between w-[50%]">
        <PresentationYvan />
        <Testimonies class="translate-x-[-110px]" />
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

<!-- https://www.sebastianlundberg.dk/personlig-traening -->
<!--https://www.airnauts.com/  -->
