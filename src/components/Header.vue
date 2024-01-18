<template>
  <div class="flex py-[40px] justify-between items-center px-8">
    <img class="h-20 w-20" src="../assets/fakelogo.svg" />
    <ul class="flex flex-row gap-4">
      <li>
        <button :click="() => modifyPagePlace('home')">Home</button>
      </li>
      <li>
        <button v-on:click="() => modifyPagePlace('programs')">
          Our programs
        </button>
      </li>
      <li>
        <button v-on:click="() => modifyPagePlace('aboutUs')">About us</button>
      </li>
      <li>
        <button v-on:click="() => modifyPagePlace('swimClinic')">
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
import { mapMutations, mapState } from "vuex";

@Options({
  methods: {
    ...mapMutations(["setNewPagePlacement"]),
    modifyPagePlace(place: string) {
      // Appel de la mutation pour modifier la variable dans le store
      this.setNewPagePlacement({ page: place });
    },
    print() {
      console.log(this?.PagePlacement);
    },
  },
  computed: {
    ...mapState(["PagePlacement"]),
  },
})
export default class Header extends Vue {
  print!: () => void;
  modifyPagePlace!: () => void;
}
</script>
