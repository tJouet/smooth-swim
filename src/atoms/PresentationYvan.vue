<template>
  <div
    class="flex flex-col bg-transpSeaBlue justify-evenly items-center rounded-full px-24 p-11 w-[600px] h-[600px]"
  >
    <p class="text-bold text-[32px]">Yvan Yvanovitch</p>
    <img
      src="@/assets/bee.webp"
      alt="staff profil picture"
      class="rounded-full w-[200px] h-[200px]"
    />
    <div class="flex items-center justify-center rounded-full text-center">
      <p>
        Also known as Aquaman Dubai for completing 300km swim in 30 days during
        Dubai Fitness 30 x 30 Challenge. This achievement resulted in entering
        the Dubai Hall of Fame 2020. Yvan has a strong background in swimming on
        the international level and also discovered his passion for triathlon.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class PresentationYvan extends Vue {}
</script>
