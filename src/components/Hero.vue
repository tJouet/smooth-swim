<template>
  <!-- This div is to prevent overlapping from other components on the Hero -->

  <div
    class="bg-hero-pattern bg-cover bg-center md:h-screen h-[350px] flex flex-col justify-center items-center"
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
