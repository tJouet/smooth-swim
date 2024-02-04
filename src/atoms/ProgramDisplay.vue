<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    class="p-5 text-center md:flex-row-reverse md:flex md:justify-between items-center border-b-[1px] md:ml-96"
  >
    <img
      :src="image"
      :class="{
        'is-expanded': isExpanded,
        'is-contract': !isExpanded,
      }"
      class="h-[210px] w-[315px] object-cover rounded-[30px] md:translate-x-[-20px] overflow-hidden border-2 border-clearBlue"
    />
    <h3
      :class="{
        'title-is-expanded': isExpanded,
        'title-is-contract': !isExpanded,
      }"
      class="text-2xl font-semibold mt-4 md:text-6xl md:pl-32"
    >
      {{ title }}
    </h3>
    <p class="font-light my-4 md:hidden">
      {{ description }}
    </p>
    <a :href="link" class="text-clearBlue md:hidden">Read more</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return { isExpanded: false };
  },
  props: {
    title: String,
    description: String,
    link: String,
    image: String,
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
export default class ProgramDisplay extends Vue {
  title!: string;
  description!: string;
  link!: string;
  image!: string;
  isExpanded!: boolean;
  startAnimation!: () => void;
  resetAnimation!: () => void;
}
</script>

<style scoped>
.is-expanded {
  transform: translateX(0px);
  opacity: 1;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.is-contract {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
</style>
