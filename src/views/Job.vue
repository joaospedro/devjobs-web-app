<template>
  <Company :company="job" />
  <div class="max-w-3xl mx-12 p-8 lg:mx-auto mt-40 rounded-lg bg-white dark:bg-darkblue font-kumbh transition-all duration-700">
    <div class="space-y-10 pb-3 lg:space-y-0 flex lg:flex-row flex-col lg:items-center lg:justify-between">
      <div class="space-y-2">
        <span class="inline-flex items-center space-x-2 text-gray">
          <h6>{{job.postedAt}}</h6>
          <svg class="fill-current" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2"/>
          </svg>
          <h6>{{job.contract}}</h6>
        </span>
        <h1 class="font-bold text-darkblue dark:text-white lg:text-3xl text-xl">{{job.position}}</h1>
        <h6 class="font-bold text-violet text-sm">{{job.location}}</h6>
      </div>
      <div class="bg-violet hover:bg-lightviolet transition-colors duration-700 text-center py-3 px-6 rounded">
        <a :href="`${job.apply}`">
        <button class="font-bold text-white">
        Apply Now
        </button>
        </a>
      </div>
    </div>
    <div class="mt-6 space-y-6">
      <p class="text-gray leading-relaxed">{{job.description}}</p>
      <div class="space-y-3.5">
        <h1 class="text-darkblue dark:text-white font-bold text-xl py-3">Requirements</h1>
        <p class="text-gray leading-relaxed">{{job.requirements.content}}</p>
        <ul class="list-inside list-disc" v-for="item in job.requirements.items" :key="item">
          <li class="list-items text-gray">{{item}}</li>
        </ul>
      </div>
      <div class="space-y-3.5">
        <h1 class="text-darkblue dark:text-white font-bold text-xl py-3">What You Will Do</h1>
        <p class="text-gray leading-relaxed">{{job.role.content}}</p>
        <ul class="list-inside list-disc" v-for="item in job.role.items" :key="item">
          <li class="list-items text-gray">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
  <apply-tab :apply="job" />
</template>

<script>
import Company from '@/components/Company.vue'
import ApplyTab from '@/components/ApplyTab.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Job',
  components: {
    Company,
    ApplyTab
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters([
      'getJobById'
    ]),
    job() {
      return this.getJobById(this.id)
    }
  },
}
</script>

