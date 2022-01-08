<template>
  <nav class="navigation">
    <Logo :title="logoText"/>
    <nuxt-link class="link" to="/">Main</nuxt-link>
    <nuxt-link class="link" to="/about">About page</nuxt-link>
    <button class="button">Enter</button>
    <!--<Modal />-->
  </nav>
</template>

<script>
import Logo from "./navigation/logo";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      text: "Hello yoyoyoy",
      logoText: "НКО проект",
    };
  },
};
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
}

.button {
  width: 100px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  background: black;
  color: white;
  transition: 0.3s;
}

.link {
  color: black;
}
</style>
