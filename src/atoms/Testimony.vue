<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    :class="{ 'box-expanded': isExpanded }"
    class="bg-white shadow p-4 pb-2 flex flex-col justify-between text-black w-[600px] h-[300px] max-h-[600px]"
  >
    <div class="flex flex-row gap-3">
      <img src="@/assets/quote.svg" class="w-3 h-3" />
      <h2
        :class="{ 'box-expanded': isExpanded }"
        class="font-bold text-black text-xl pr-6"
      >
        Paolo’s attention to detail is everything. From the planning of the
        sessions, his eye for identifying tweaks in technique and ability to
        cater for all swimmers is fantastic.
      </h2>
    </div>
    <div class="flex flex-rox gap-2 items-center">
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
export default class Testimony extends Vue {}
</script>

<style scoped>
.box-expanded {
  height: 350px;
  -webkit-line-clamp: none;
  transition: height 0.5s ease-in;
}
</style>
