<template>
  <div>
    <button
      class="region"
      v-for="region in regions"
      :key="region"
      :class="isSelected(region)"
      @click="changeRegion({ region: region })"
    >
      {{ region }}
    </button>
  </div>
</template>

<script>
import Constant from "../Constant";
import { mapMutations } from "vuex";

export default {
  name: "RegionButtons",
  computed: {
    regions() {
      //store의 regions게터를 호출함 즉 state의 컨트리 정보의 지역명들만 가져옴.
      return this.$store.getters.regions;
    },
    currentRegion() {
      return this.$store.getters.currentRegion;
    },
  },
  methods: {
    isSelected(region) { //CSS클래스를 바인딩 하기 위한 메서드
      if (region == this.currentRegion) return { selected: true };
      else return { selected: false };
    },
    ...mapMutations([Constant.CHANGE_REGION]), //
  },
};
</script>

<style>
button.region {
  text-align: center;
  width: 80px;
  margin: 2px;
  border: solid 1px gray;
}
button.selected {
  background-color: purple;
  color: aqua;
}
</style>
