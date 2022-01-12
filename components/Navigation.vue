<template>
  <nav class="navigation">
    <Logo :title="logoText" /> 
    <nuxt-link v-for="elem in linksArray" class="link" :to="elem.to" :key="elem.title">
      {{ elem.title }}
    </nuxt-link>
    <button class="button" @click="toggleModal">{{ text }}</button>
    <Modal v-show="showModal" :onToggle="toggleModal" />
  </nav>
</template>

<script>
  import Logo from './navigation/logo';
  export default {
    components: {
      Logo
    },
    data() {
      return {
        text: 'Enter',
        logoText: 'НКО-проект',
        linksArray: [
          { to: '/', title: 'Main' },
          { to: '/about', title: 'About page' },
        ],
        showModal: false,
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      }
    }
  }
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
  background: rgba(255,255,255,0.2);
}

.button {
  width: 100px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: .3s;
}
.button:hover {
  background: black;
  color: white;
  transition: .3s;
}

.link {
  color: black;
}
</style>