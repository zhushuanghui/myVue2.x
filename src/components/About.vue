<template>
  <div>
    <h1>this is about</h1>
    <h2>count :{{ count }}</h2>
    <h3 style="color: red">relateCount: {{ relateCount }}</h3>
    <button @click="add">click</button>
    <button @click="asyncAdd">async click</button>
    <button @click="customAdd">custom click</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      a: 1,
    };
  },
  mounted() {
    console.log(this.$store.actions);
    this.add();
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      // relateCount,
    }),
    // ...mapGetters(["relateCount"]),
    ...mapGetters({ relateCount: "relateCount" }),
  },
  methods: {
    ...mapActions({
      add: "increment",
      asyncAdd: "asyncIncrement",
    }),
    customAdd() {
      this.$store.commit("increment");
    },
  },
};
</script>