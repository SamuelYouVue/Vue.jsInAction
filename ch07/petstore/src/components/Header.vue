<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{ name: 'iMain' }">
            {{ sitename }}
          </router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link exact :to="{name: 'Form'}">
            <button
                type="button"
                class="btn btn-default btn-lg"
            >
                <span class="glyphicon glyphicon-shopping-cart">
                    {{ cartItemCount }}
                </span>
                Checkout
            </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "myheader",
  data() {
    return {
      sitename: "Vue.js Pet Depot",
    };
  },
  props: ["cartItemCount"],
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
      console.log(this.$router);
    },
  },
};
</script>
<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
};

.router-link-exact-active {
    color: blue;
}
</style>