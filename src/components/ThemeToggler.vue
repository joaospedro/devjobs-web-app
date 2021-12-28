<template>
  <div class="theme-toggler flex items-center space-x-1.5">
  <img :src="iconSun" />
  <div @click="toggleTheme" class="w-12 h-6 rounded-xl bg-white cursor-pointer p-1.5">
    <div class="round transform translate-x-6 transition-transform duration-700 w-3 h-3 bg-violet rounded-3xl" />
    </div>
    <img class="pl-0.5" :src="iconMoon" />
  </div>
</template>

<script>
export default {
  name: 'ThemeToggler',
  data() {
    return {
      iconMoon: require('@/assets/desktop/icon-moon.svg'),
      iconSun: require('@/assets/desktop/icon-sun.svg')
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");

      const round = document.querySelector(".round")
      round.classList.toggle("translate-x-6");
    },
  },
};
</script>