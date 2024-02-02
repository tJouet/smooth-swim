<template>
  <div
    class="md:h-screen md:flex-row md:p-10 py-10 bg-darkBlue flex flex-col text-center items-center justify-between"
  >
    <StickyTitle isReflected:false title="Our programs" />
    <Title isReflected:false title="Our programs" />
    <h2 class="text-2xl py-10 font-medium">
      From learning to swim to perfecting your stroke
    </h2>
    <ProgramDisplay
      v-for="program in FakeData"
      :title="program.label"
      :description="program.description"
      :image="program.url"
      :key="program.id"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as Atoms from "@/atoms";
import FakeData from "../data.json";

interface ProgramData {
  id: number;
  label: string;
  description: string;
  url: string;
  link: string;
}

@Options({
  components: {
    ...Atoms,
  },
  data() {
    return { FakeData };
  },
})
export default class Programs extends Vue {
  FakeData!: Array<ProgramData>;
}
</script>
