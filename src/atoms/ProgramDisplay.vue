<template>
  <div class="p-5">
    <img
      :src="image"
      class="max-h-[315px] h-[210px] object-cover rounded-[30px] overflow-hidden border-2 border-clearBlue"
    />
    <h3 class="text-2xl font-semibold mt-4">{{ title }}</h3>
    <p class="font-light my-4">
      {{ description }}
    </p>
    <a href="" class="text-clearBlue">{{ link }}</a>
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
