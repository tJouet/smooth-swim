<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    :class="{ 'box-expanded': isExpanded, 'box-contract': !isExpanded }"
    class="bg-white shadow p-4 pb-2 flex flex-col justify-between text-black w-[600px] h-[200px]"
  >
    <div class="flex flex-row gap-3">
      <img src="@/assets/quote.svg" class="w-5 h-5 fill-red-600" />
      <h2 class="text-xl font-bold">
        Paolo creates a super-friendly squad atmosphere, he is great because he
        gives personalized tips to improve technique for each person in the
        pool.
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
export default class TestimonySmall extends Vue {
  isExpanded!: boolean;
  startAnimation!: () => void;
  resetAnimation!: () => void;
}
</script>

<style scoped>
.box-expanded {
  height: 250px;
  transition: height 0.5s ease-in;
}
.box-contract {
  height: 200px;
  transition: height 0.5s ease-in-out;
}
</style>
