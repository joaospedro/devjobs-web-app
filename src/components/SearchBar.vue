<template>
  <div class="flex items-center lg:justify-start justify-between bg-white dark:bg-darkblue px-6 font-kumbh rounded-lg relative top-10 transition-all duration-700">
    <div class="inline-flex items-center gap-x-4 pr-8">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z" fill="#5964E0"/>
      </svg>
      <input class="bg-transparent outline-none lg:w-80 w-60 truncate dark:text-white py-6 lg:border-r dark:border-gray border-white border-opacity-0 dark:border-opacity-20" v-model="general" type="text" spellcheck="false" placeholder="Filter by title, companies, expertise...">
    </div>
    <div class="lg:inline-flex items-center gap-x-4 hidden pr-8">
      <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4477 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.4477 23.894L1.75057 14.2119C-0.747997 10.8781 -0.384894 5.37556 2.53693 2.45105C4.11575 0.870546 6.21459 0 8.4477 0ZM5.47357 8.29091C5.47357 9.97484 6.84272 11.3455 8.52485 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52485 5.23636C6.84272 5.23636 5.47357 6.60698 5.47357 8.29091Z" fill="#5964E0"/>
      </svg>
      <input class="bg-transparent outline-none w-60 dark:text-white py-6 lg:border-r dark:border-gray border-white border-opacity-0 dark:border-opacity-20" v-model="location" spellcheck="false" type="text" placeholder="Filter by location">
    </div>
    <div class="inline-flex items-center">
      <div class="lg:inline-flex items-center gap-x-4 hidden">
        <div id="fulltime" class="pt-5 cursor-pointer">
          <input type="checkbox" aria-labelledby="fulltime" class="check-box h-6 w-6 appearance-none cursor-pointer bg-gray checked:bg-violet checked:opacity-100 opacity-20 rounded transition-all" v-model="fullTime">
          <img :src="iconCheck" alt="Check mark" class="icon-check relative left-1 bottom-6 opacity-0" />
        </div>
        <span class="font-bold text-darkblue dark:text-white">Full Time Only</span>
      </div>
      <div @click="toggleMobile()" class="text-gray cursor-pointer block lg:hidden">
        <svg class="fill-current" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill-rule="nonzero"/>
        </svg>
      </div>
    </div>
  </div>
  <!--Mobile Menu Modal-->
  <div v-if="showModal" class="fixed z-10 inset-0 bg-midnight bg-opacity-90 overflow-y-auto h-full w-full font-kumbh">
    <div class="relative top-60 mx-auto w-96 rounded-lg bg-white dark:bg-darkblue">
      <div class="py-5 px-6 inline-flex items-center gap-x-4 text-white">
        <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4477 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.4477 23.894L1.75057 14.2119C-0.747997 10.8781 -0.384894 5.37556 2.53693 2.45105C4.11575 0.870546 6.21459 0 8.4477 0ZM5.47357 8.29091C5.47357 9.97484 6.84272 11.3455 8.52485 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52485 5.23636C6.84272 5.23636 5.47357 6.60698 5.47357 8.29091Z" fill="#5964E0"/>
        </svg>
        <input class="bg-transparent outline-none dark:text-white" v-model="location" spellcheck="false" type="text" placeholder="Filter by location">
        <svg @click="toggleMobile" xmlns="http://www.w3.org/2000/svg" class="bg-violet cursor-pointer rounded-lg h-6 w-6 relative bottom-8 left-24 ml-1 p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <hr class="min-w-max text-white dark:text-gray opacity-20" />
      <div class="px-6 inline-flex items-center gap-x-4">
        <label class="pt-5 cursor-pointer">
        <input type="checkbox" class="check-box h-6 w-6 cursor-pointer appearance-none bg-gray checked:bg-violet checked:opacity-100 opacity-20 rounded transition-all" v-model="fullTime">
        <img :src="iconCheck" class="icon-check relative left-1 bottom-6 opacity-0" />
        </label>
        <span class="font-bold text-darkblue dark:text-white">Full Time Only</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            showModal: false,

            iconCheck: require('@/assets/desktop/icon-check.svg')
        }
    },
    methods: {
        toggleMobile() {
            this.showModal = !this.showModal;
        }
    },
    computed: {
        location: {
            get() {
                return this.$store.state.search.location
            },
            set(value) {
                this.$store.commit('searchLocation', value)
            }
        },
        general: {
            get() {
                return this.$store.state.search.general
            },
            set(value) {
                this.$store.commit('searchGeneral', value)
            }
        },
        fullTime: {
            get() {
                return this.$store.state.search.fullTime
            },
            set(value) {
                this.$store.commit('searchFullTime', value)
            }
        }
    }
}
</script>