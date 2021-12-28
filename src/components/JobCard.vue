<template>
  <div class="job-card bg-transparent dark:bg-darkblue px-7 font-kumbh text-gray mt-16 w-80 h-56 rounded-lg transition-all duration-700">
    <img class="relative select-none bottom-5 w-12 h-12 object-contain rounded-xl p-3" :src="`${job.logo}`" :style="`background-color: ${job.logoBackground}`"> 
    <div class="leading-9">
      <span class="inline-flex items-center space-x-2">
        <h6>{{job.postedAt}}</h6>
        <svg class="fill-current" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2"/>
        </svg>
        <h6>{{job.contract}}</h6>
      </span>
      <router-link :to="`/job/${job._id}`">
        <h1 class="font-bold text-darkblue dark:text-white truncate text-xl">{{job.position}}</h1>
      </router-link>
      <h6>{{job.company}}</h6>
    </div>
    <div class="job-location pt-6">
      <h6 class="text-violet font-bold text-sm">{{job.location}}</h6>
    </div>
  </div>
</template>

<script>
export default {
    name: 'JobCard',
    props: ['job']
}
</script>