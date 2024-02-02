<template>
  <div
    class="p-5 text-right md:flex-row-reverse md:flex md:justify-between items-center border-b-[1px] md:ml-96"
  >
    <img
      :src="image"
      class="h-[210px] w-[315px] object-cover rounded-[30px] overflow-hidden border-2 border-clearBlue"
    />
    <h3 class="text-2xl font-semibold mt-4 md:text-6xl md:pl-48">
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
  props: {
    title: String,
    description: String,
    link: String,
    image: String,
  },
})
export default class ProgramDisplay extends Vue {
  title!: string;
  description!: string;
  link!: string;
  image!: string;
}
</script>
