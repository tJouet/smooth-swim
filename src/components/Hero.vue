<template>
  <div class="bg-hero-pattern bg-cover bg-center md:h-screen h-[350px]">
    <Header />
    <h1>{{ title }}</h1>
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
