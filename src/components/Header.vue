<template>
  <div class="flex py-[40px] justify-between items-center px-8">
    <img class="h-20 w-20" src="../assets/fakelogo.svg" />
    <ul class="flex flex-row gap-2">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about" target="_blank" rel="noopener">Programmes</a>
      </li>
      <li>
        <a href="/about" target="_blank" rel="noopener">Test</a>
      </li>
      <li>
        <a href="/about" target="_blank" rel="noopener">More test</a>
      </li>
    </ul>
    <button
      class="border border-clearBlue rounded-full p-3 hover:bg-clearBlue hover:text-darkBlue"
      v-on:click="print"
    >
      Contact us
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    print: () => {
      console.log("This is a place holder");
    },
  },
})
export default class Header extends Vue {
  print!: () => void;
}
</script>
