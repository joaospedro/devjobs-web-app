<template>
  <header class="absolute font-kumbh w-full rounded-bl-header bg-no-repeat bg-cover h-40" :style="`background-image: url(${this.bgheader});`">
      <div class="max-w-5xl lg:mx-auto py-11 mx-12">
          <div class="flex justify-between items-center">
              <div class="logo">
                <router-link to="/" aria-label="Home page">
                  <img :src="logo" alt="logo" />
                </router-link>
              </div>
              <div class="theme-toggler">
                  <theme-toggler />
              </div>
          </div>
      </div>
  </header>
  
  <main class="bg-white dark:bg-midnight min-h-screen transition-all duration-700">
      <router-view />
  </main>

</template>

<script>
import { mapGetters } from "vuex";
import ThemeToggler from '@/components/ThemeToggler.vue'

export default {
  name: 'App',
  components: {
    ThemeToggler
  },
  data() {
    return {
      'bgheader': require('@/assets/desktop/bg-pattern-header.svg'),
      'logo': require('@/assets/desktop/logo.svg'),
    }
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    }
  }
}
</script>