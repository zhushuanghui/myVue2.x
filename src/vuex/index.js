let Vue;
const install = (_Vue) => {
  console.log('install');
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      console.log(this.$options.name);
      //  this.$store = this.options.store
    }
  })
}

class Store {};

export default {
  install,
  Store
}