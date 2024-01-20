<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    :class="{ 'box-expanded': isExpanded, 'box-contract': !isExpanded }"
    class="bg-white shadow p-4 pb-2 flex flex-col justify-between text-black w-[600px] h-[350px]"
  >
    <div class="flex flex-row gap-3">
      <img src="@/assets/quote.svg" class="w-5 h-5 fill-red-600" />
      <!-- https://www.sebastianlundberg.dk/personlig-traening -->
      <!--https://www.airnauts.com/  -->
      <h2 class="text-xl font-bold">
        Paolo’s attention to detail is everything. From the planning of the
        sessions, his eye for identifying tweaks in technique and ability to
        cater for all swimmers is fantastic.
      </h2>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <div class="rounded-full bg-red-400 w-6 h-6"></div>
      <div class="flex flex-col text-xs">
        <p class="">Name of the game</p>
        <p class="font-extralight">POS of the game</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    startAnimation() {
      this.isExpanded = true;
    },
    resetAnimation() {
      this.isExpanded = false;
    },
  },
})
export default class TestimonyBig extends Vue {
  isExpanded!: boolean;
  startAnimation!: () => void;
  resetAnimation!: () => void;
}
</script>

<style scoped>
.box-expanded {
  height: 400px;
  transition: height 0.5s ease-in-out;
}
.box-contract {
  height: 350px;
  transition: height 0.5s ease-in-out;
}
</style>
