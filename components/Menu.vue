<template>
    
<!-- Section 1 -->
<section class="relative w-full px-8 text-gray-700 bg-white body-font border-b border-gray-200">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <NuxtLink to="/" class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">semarmesem<span class="text-purple-600">.art</span></NuxtLink>

        <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <NuxtLink to="/" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                Home
            </NuxtLink>
            <a href="#" v-scroll-to="'#about'" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span class="block">About</span>
            </a>
            <a href="#" v-scroll-to="'#team'" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span class="block">Team</span>
            </a>
            <a href="#" v-scroll-to="'#contact'" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span class="block">Contact</span>
            </a>
            <a href="#" v-scroll-to="'#faq'" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span class="block">FAQ</span>
            </a>
        </nav>

        <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <span class="inline-flex rounded-full shadow-sm">
                <a href="https://foundation.app/@semarmesem" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-purple-500 border border-purple-500 rounded-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ease-in-out duration-300">
                    View Collection
                </a>
            </span>
        </div>
    </div>
</section>

</template>