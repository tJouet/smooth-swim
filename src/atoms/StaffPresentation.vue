<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    class="flex flex-row rounded-full p-2 max-h-[590px] bg-transpDarkBlue hover:bg-darkBlue"
    :class="{ 'box-expanded': isExpanded, 'box-contracted': !isExpanded }"
  >
    <img
      src="@/assets/bee.webp"
      alt="staff profil picture"
      class="rounded-full w-[200px] h-[200px]"
    />
    <div class="flex flex-col justify-center items-start pl-5 gap-1">
      <h2 class="font-bold text-2xl flex flex-row gap-2 whitespace-nowrap">
        NAME OF STAFF
        <span :class="{ 'text-display': isExpanded, 'text-hide': !isExpanded }">
          Job description</span
        >
      </h2>
      <p
        class="font-semibold text-xl"
        :class="{ 'middle-text-hide': isExpanded, 'text-display': !isExpanded }"
      >
        Description of job
      </p>
      <p
        class="w-[90%] max-h-[65px] truncate whitespace-pre-line line-clamp-3"
        :class="{ 'middle-text-hide': !isExpanded, 'text-display': isExpanded }"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
        dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing
        elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
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
export default class StaffPresentation extends Vue {
  isExpanded!: boolean;
  startAnimation!: () => void;
  resetAnimation!: () => void;
}
</script>

<style>
.box-expanded {
  width: 100%;
  opacity: 1;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}
.box-contracted {
  width: 500px;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
}
.text-display {
  opacity: 1;
  transition: width 0.5s ease-in-out, opacity 0.5 ease-in;
}
.text-hide {
  opacity: 0;
  width: 0%;
  overflow: hidden;
  transition: width 0 0.5s ease-in-out, opacity 0.5 ease-out;
}
.middle-text-hide {
  opacity: 0;
  width: 0%;
  height: 0%;
  overflow: hidden;
  transition: width 0 0.5s ease-in-out, opacity 0.5 ease-out;
}
</style>
