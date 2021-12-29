<template>
  <div class="max-w-3xl lg:mx-auto mx-12 relative top-28 rounded-lg bg-white dark:bg-darkblue font-kumbh transition-all duration-700">
    <div class="flex lg:flex-row flex-col items-center lg:justify-between justify-center">
      <div class="contents lg:flex lg:items-center lg:gap-x-10">
        <div class="img-container w-12 h-12 lg:h-36 lg:w-36 rounded-lg lg:static relative bottom-6" :style="`background-color: ${company.logoBackground}`">
          <img class="object-contain p-2 lg:p-8 h-full" :src="`${company.logo}`" />
        </div>
        <div class="text-center lg:text-left space-y-1.5">
          <h1 class="font-bold text-darkblue dark:text-white text-xl">{{company.company}}</h1>
          <p class="dark:text-gray text-darkgray">{{company.website}}</p>
        </div>
      </div>
      <div class="bg-transparent dark:bg-darkgray dark:hover:bg-gray transition-colors duration-700 my-7 md:mr-10 py-3 px-6 rounded">
        <a :href="`https://${company.website}`">
        <button class="font-bold text-violet dark:text-white">
        Company Site
        </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Company',
    props: ['company'],
}
</script>