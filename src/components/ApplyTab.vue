<template>
  <div class="mt-20 apply-tab w-full bg-transparent dark:bg-darkblue transition-all duration-700">
    <div class="max-w-3xl mx-12 lg:mx-auto flex justify-between py-6">
      <div class="font-kumbh hidden lg:block">
        <h6 class="font-bold text-darkblue dark:text-white text-xl ">{{apply.position}}</h6>
        <p class="text-gray">{{apply.company}}</p>
      </div>
      <div class="bg-violet hover:bg-lightviolet transition-colors duration-700 text-center w-full lg:w-auto py-3 lg:px-6 rounded">
        <a :href="`${apply.apply}`">
        <button class="font-bold text-white">
        Apply Now
        </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ApplyTab',
    props: ['apply']
}
</script>