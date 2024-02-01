<template>
  <div class="flex py-[40px] justify-between items-center px-8">
    <img class="h-20 w-20" src="../assets/fakelogo.svg" alt="Website's logo" />
    <ul class="flex flex-row gap-4">
      <li>
        <button :click="() => sendPlacement('home')">Home</button>
      </li>
      <li>
        <button v-on:click="() => sendPlacement('programs')">
          Our programs
        </button>
      </li>
      <li>
        <button v-on:click="() => sendPlacement('aboutUs')">About us</button>
      </li>
      <li>
        <button v-on:click="() => sendPlacement('swimClinic')">
          Swim clinic
        </button>
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
    sendPlacement(placement: string) {
      this.$emit("new-placement", placement);
    },
    print() {
      console.log(this?.PagePlacement);
    },
  },
})
export default class Header extends Vue {
  print!: () => void;
  sendPlacement!: () => void;
}
</script>
