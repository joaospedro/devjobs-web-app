<template>
  <div class="job-card bg-transparent dark:bg-darkblue px-7 font-kumbh dark:text-gray text-darkgray mt-16 w-80 h-56 rounded-lg transition-all duration-700">
    <img class="relative select-none bottom-5 w-12 h-12 object-contain rounded-xl p-3" :src="`${job.logo}`" :alt="`${job.company} logo`" :style="`background-color: ${job.logoBackground}`"> 
    <div class="leading-9">
      <div class="inline-flex items-center space-x-2">
        <p>{{job.postedAt}}</p>
        <svg class="fill-current" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2"/>
        </svg>
        <p>{{job.contract}}</p>
      </div>
      <router-link :to="`/job/${job._id}`">
        <h1 class="font-bold text-darkblue dark:text-white truncate text-xl">{{job.position}}</h1>
      </router-link>
      <p>{{job.company}}</p>
    </div>
    <div class="job-location pt-6">
      <p class="text-violet font-bold text-sm">{{job.location}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'JobCard',
    props: ['job']
}
</script>