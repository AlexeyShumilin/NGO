<template>
  <div class="container">
    <Test />
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style scoped>
.container {
  background: url('~static/images/bgd.jpeg') center no-repeat;
  background-size: cover;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
