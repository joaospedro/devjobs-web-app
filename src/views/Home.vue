<template>
  <div class="max-w-5xl lg:mx-auto mx-12 pt-20">
    <search-bar />
    <div class="flex mt-16 last:pb-16 justify-center lg:justify-start items-center flex-wrap gap-x-8">
      <job-card v-for="job in filteredSearch" :key="job" :job="job" />
    </div>
  </div>
  <div v-if="totalSize === jobs.length && filteredSearch != 0" @click="loadMore" class="text-center pb-16">
    <button @click="loadMore()" class="bg-violet text-white font-bold font-kumbh py-3 px-6 rounded">
    Load More
    </button>
  </div>
</template>

<script>
import JobCard from '@/components/JobCard.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    JobCard,
    SearchBar,
  },
  data() {
    return {
      loadMoreSize: 9,
      totalSize: 0
    }
  },
  methods: {
    loadMore() {
     this.totalSize = this.loadMoreSize + this.jobs.length;
    }
  },
  mounted() {
    this.loadMore();
    this.$store.dispatch('fetchJobs');
  },
  computed: {
    jobs() {
      let jobs = this.$store.state.jobs;
      return jobs.slice(0, this.totalSize);
    },
    filteredSearch() {

      let general = this.jobs.filter((job) => {
        return job.position.toLowerCase().match(this.$store.state.search.general.toLowerCase()) ||
          job.company
          .toLowerCase()
          .match(this.$store.state.search.general.toLowerCase())
      });

      let location = general.filter((job) => {
        return job.location.toLowerCase().match(this.$store.state.search.location.toLowerCase())
      })

      if (this.$store.state.search.fullTime === true) {
        return location.filter((job) => job.contract === 'Full Time')
      } else {
        return location
      }
    }
  }
}
</script>
