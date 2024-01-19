<template>
  <!-- This div is to prevent overlapping from other components on the Hero -->
  <div class="md:h-screen h-[350px]">
    <div class="relative flex flex-col w-full h-full">
      <Header class="z-10" @new-placement="jumpTo" />
      <div class="absolute top-0 left-0 w-full">
        <Hero ref="home" />
      </div>
    </div>
  </div>
  <Programs ref="programs" />
  <AboutUs ref="aboutUs" />
  <SwimClinic ref="swimClinic" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Hero, Programs, Header, AboutUs, SwimClinic } from "@/components";

@Options({
  components: {
    AboutUs,
    Hero,
    Header,
    Programs,
    SwimClinic,
  },
  methods: {
    jumpTo(destination: string) {
      var place = this.$refs[destination];
      var top = place.$el.offsetTop;
      window.scrollTo(0, top);
    },
  },
  computed: {},
})
export default class HomeView extends Vue {
  jumpTo!: () => void;
}
</script>
