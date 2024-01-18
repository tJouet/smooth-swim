<template>
  <!-- This div is to prevent overlapping from other components on the Hero -->
  <div class="md:h-screen h-[350px]">
    <div class="relative flex flex-col w-full h-full">
      <Header class="z-10" />
      <div
        class="absolute top-0 left-0 w-full bg-hero-pattern bg-cover bg-center md:h-screen h-[350px] flex flex-col justify-center items-center"
      >
        <div class="w-full flex flex-col justify-start items-center">
          <h1
            class="md:text-[64px] font-bold md:leading-[64px] leading-[36px] text-center text-[32px]"
          >
            UNLOCK YOUR <br />FULL <span class="text-clearBlue">SWIMMING</span
            ><br />
            POTENTIAL
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
  props: {
    title: String,
  },
})
export default class Hero extends Vue {
  title!: string;
}
</script>
