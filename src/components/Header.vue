<template>
  <div class="flex py-[40px] justify-center items-center">
    <ul class="flex flex-row gap-2">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about" target="_blank" rel="noopener">Programmes</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>
