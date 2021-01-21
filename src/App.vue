<template>
    <div class="flex">
        <!-- side bar -->
        <div class="ml-4 top-1/3 z-10 hidden fixed md:block">
            <ul class="mb-3">
                <li>
                    <a href="#hero" class="transition ease-in-out duration-700 hover-trigger 
                    bg-gray-100 dark:bg-true-gray-800 text-gray-700 dark:text-true-gray-600 dark:hover:text-gray-300 
                     hover:text-white hover:bg-blue-800 
                    rounded-full p-4 w-14 hover:w-28 hover:-mt-1 flex items-center">
                        <div><svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg></div>
                        <div class="hover-target">Home</div>
                    </a>
                </li>
            </ul>

            <ul class="mb-3">
                <li>
                    <a href="#about" class="btn-fade-in transition ease-in-out duration-700 hover-trigger 
                    bg-gray-100 dark:bg-true-gray-800 text-gray-700 dark:text-true-gray-600 dark:hover:text-gray-300  hover:text-white hover:bg-blue-800 active:bg-blue-800
                    rounded-full p-4 w-14 hover:w-28 hover:-mt-1 flex items-center">
                        <div> <svg class="w-5 mr-1"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg> </div>
                        <div class="hover-target">Tentang</div>
                    </a>
                </li>
            </ul>

            <ul class="mb-3">
                <li>
                    <a href="#skill" class="transition ease-in-out duration-700 hover-trigger 
                    bg-gray-100 dark:bg-true-gray-800 text-gray-700 dark:text-true-gray-600 dark:hover:text-gray-300  hover:text-white hover:bg-blue-800 
                    rounded-full p-4 w-14 hover:w-28 hover:-mt-1 flex items-center">
                        <div> <svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> </svg> </div>
                        <div class="hover-target">Keahlian</div>
                    </a>
                </li>
            </ul>

            <ul class="mb-3">
                <li>
                    <a href="#portfolio" class="transition ease-in-out duration-700 hover-trigger 
                    bg-gray-100 dark:bg-true-gray-800 text-gray-700 dark:text-true-gray-600 dark:hover:text-gray-300  hover:text-white hover:bg-blue-800 
                    rounded-full p-4 w-14 hover:w-28 hover:-mt-1 flex items-center">
                        <div> <svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg> </div>
                        <div class="hover-target">Portfolio</div>
                    </a>
                </li>
            </ul>
        </div>

        <!-- toggle dark mode -->
        <div class="fixed w-screen z-40 hidden md:block">
            <div class="flex justify-end items-center m-10 space-x-2">
                <svg v-if="!isDarkMode" class="text-gray-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" /> </svg>
                <svg v-if="isDarkMode" class="text-gray-100 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> </svg>
                <div>
                    <input type="checkbox" id="darkmode" class="hidden" @click="selectTheme(!isDarkMode)" :checked="isDarkMode">
                    <label for="darkmode">
                        <div class="w-9 h-5 bg-gray-400 rounded-full p-1 flex items-center">
                            <div class="toggle-dot flex w-4 h-4 bg-white rounded-full shadow-md transform"></div>
                        </div>
                    </label>
                </div>
                <svg v-if="!isDarkMode" class="text-gray-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /> </svg>
                <svg v-if="isDarkMode" class="text-gray-100 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /> </svg>
            </div>
        </div>

        <!-- navbar icon -->
        <div class="fixed w-screen z-50 md:hidden">
            <div class="flex m-4 justify-end text-gray-700">
                <svg v-if="!isToggle" @click="setToggle(!isToggle)" class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
                <svg v-if="isToggle" @click="setToggle(!isToggle)" class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /> </svg>
            </div>
        </div>

        <!-- navbar -->
        <div v-if="isToggle" class="transition duration-500 ease-in-out transform scale-110 -translate-y-1 items-center flex fixed md:hidden z-50 w-3/4 h-screen bg-white dark:bg-true-gray-900">
            <div class="m-3 w-full">
                 <div class="flex justify-end mb-3 mr-2 items-center space-x-2">
                    <svg v-if="!isDarkMode" class="text-gray-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" /> </svg>
                    <svg v-if="isDarkMode" class="text-gray-100 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> </svg>
                    <div>
                        <input type="checkbox" id="darkmode" class="hidden" @click="selectTheme(!isDarkMode)" :checked="isDarkMode">
                        <label for="darkmode">
                            <div class="w-9 h-5 bg-gray-400 rounded-full p-1 flex items-center">
                                <div class="toggle-dot flex w-4 h-4 bg-white rounded-full shadow-md transform"></div>
                            </div>
                        </label>
                    </div>
                    <svg v-if="!isDarkMode" class="text-gray-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /> </svg>
                    <svg v-if="isDarkMode" class="text-gray-100 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /> </svg>
                </div>
                <a href="#hero" class="mb-3 ml-2 bg-gray-100  text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hover:text-white hover:bg-blue-800 
                        rounded-full p-4 hover:-mt-1 dark:hover:-mt-1 flex items-center">
                    <div><svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg></div>
                    <div>Home</div>
                </a>

                <a href="#hero" class="mb-3 ml-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hover:text-white hover:bg-blue-800 
                        rounded-full p-4 hover:-mt-1 dark:hover:-mt-1 flex items-center">
                    <div> <svg class="w-5 mr-1"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg> </div>
                    <div >Tentang</div>
                </a>

                <a href="#hero" class="mb-3 ml-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hover:text-white hover:bg-blue-800 
                        rounded-full p-4 hover:-mt-1 dark:hover:-mt-1 flex items-center">
                    <div> <svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> </svg> </div>
                    <div >Keahlian</div>
                </a>

                <a href="#hero" class="mb-3 ml-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hover:text-white hover:bg-blue-800 
                        rounded-full p-4 hover:-mt-1 dark:hover:-mt-1 flex items-center">
                    <div> <svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg> </div>
                    <div >Portfolio</div>
                </a>
                
            </div>
        </div>

        <div class="w-screen">
            <main class="w-full dark:bg-true-gray-900">
                <!-- hero -->
                <section id="hero" class="h-screen">
                    <div><img class="h-screen w-screen object-cover object-right md:object-top" src="./assets/img/hero_img.jpg"></div>
                    <div class="relative">
                        <div class="absolute bottom-0 bg-white dark:bg-black opacity-75 dark:opacity-0 h-screen w-full"></div>
                    </div>
                    <div class="absolute text-4xl md:text-5xl text-gray-700 dark:text-gray-200 font-bold font-sans top-1/3 left-2 text-center md:text-right md:top-52 md:left-40 z-10 h-screen">Helfanza Nanda Alfara</div>
                    <div class="absolute text-gray-700 dark:text-gray-200 text-2xl flex font-sans  top-1/2 left-20 md:top-72 md:left-44 z-10 h-screen">
                        <p class="mr-2">i'm</p>
                        <typical class="typicalWrapper" :steps="['Web Developer', 1000, 'Laravel Developer', 1000]" :loop="Infinity" :wrapper="'h3'" > </typical>
                    </div>
                </section>

                <!-- about -->
                <section id="about" class="pt-10 h-screen md:px-36 dark:bg-true-gray-900" >
                    <div class="text-center text-2xl uppercase font-bold text-gray-700 dark:text-gray-300">Tentang</div>
                    <div class="flex flex-wrap justify-center text-blue-800 dark:text-blue-900 my-2">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /> </svg>
                    </div>
                    <div class="px-5 md:px-14 text-center text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa vitae asperiores ut tenetur vero nesciunt similique sit fugiat veritatis eos harum amet, blanditiis mollitia. Maiores, doloribus. At, repudiandae doloremque.</div>

                    <div class="mt-10 block md:flex justify-center m-3">
                        <div class="mb-3 md:mb-0 md:w-3/6 md:mr-5"><img class="rounded-lg" src="./assets/img/about_img.jpg" alt=""></div>
                        <div class="justify-start">
                            <div class="mb-3 text-3xl font-bold text-gray-500 dark:text-gray-300 capitalize">web developer.</div>
                            <div class="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit illo aperiam culpa sed facilis accusantium dicta assumenda sit magnam.</div>
                            <div class="block md:flex mt-2">
                                <div class="mr-0 md:mr-44">
                                    <div class="flex items-center">
                                        <div class="text-blue-800  dark:text-blue-900 mr-2"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /> </svg></div>
                                        <div class="text-gray-700 dark:text-gray-300"><strong>Tanggal Lahir</strong>: 19 Desember 1998</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div class="flex items-center">
                                            <div class="text-blue-800 dark:text-blue-900 mr-2"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /> </svg></div>
                                            <div class="text-gray-700 dark:text-gray-300"><strong>Umur</strong>: 22 Tahun</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- skill -->
                <section id="skill" class="pt-10 md:px-24 md:pb-16 dark:bg-true-gray-900">
                    <div class="text-center text-2xl uppercase font-bold text-gray-700 dark:text-gray-300">Keahlian</div>
                    <div class="flex flex-wrap justify-center text-blue-800 dark:text-blue-900 my-2">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /> </svg>
                    </div>
                    <div class="px-5 md:px-14 text-center text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa vitae asperiores ut tenetur vero nesciunt similique sit fugiat veritatis eos harum amet, blanditiis mollitia. Maiores, doloribus. At, repudiandae doloremque.</div>

                    <div class="w-full md:w-3/4 md:m-auto mt-6 md:mt-8">
                        <div class="block md:flex md:flex-wrap md:justify-between">
                            <div class="mb-2 mx-3 md:mx-0" v-for="(skill, index) in skills" :key="index">
                                <div class="flex w-full md:w-96 justify-between font-sans uppercase font-semibold text-gray-700 dark:text-gray-300">
                                    <div>{{ skill.skill }}</div>
                                    <div>{{ skill.percent }}%</div>
                                </div>
                                <div class="shadow w-full bg-gray-100 dark:bg-gray-800">
                                    <div class="bg-blue-800 dark:bg-gray-700 text-xs leading-none h-3 text-center text-white" :style="{width: skill.percent+'%'}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- portfolio -->
                <section id="portfolio" class="pt-10 md:px-24 dark:bg-true-gray-900">
                    <div class="text-center text-2xl uppercase font-bold text-gray-700 dark:text-gray-300">Portofilio</div>
                    <div class="flex flex-wrap justify-center text-blue-800 dark:text-blue-900 my-2">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /> </svg>
                    </div>
                    <div class="px-5 md:px-14 text-center text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa vitae asperiores ut tenetur vero nesciunt similique sit fugiat veritatis eos harum amet, blanditiis mollitia. Maiores, doloribus. At, repudiandae doloremque.</div>

                    <div class="w-52 mx-auto mt-10 mb-4">
                        <div class="flex justify-evenly uppercase">
                            <a href="#all" @click="filterPortfolio('all')" class="hover:text-blue-700 dark:hover:text-blue-900  text-gray-700 dark:text-gray-300 font-semibold">all</a>
                            <a href="#mobile" @click="filterPortfolio(true)" class="hover:text-blue-700 dark:hover:text-blue-900 text-gray-700 dark:text-gray-300 font-semibold">mobile</a>
                            <a href="#web" @click="filterPortfolio(false)" class="hover:text-blue-700 dark:hover:text-blue-900 text-gray-700 dark:text-gray-300 font-semibold">web</a>
                        </div>
                    </div>

                    <div class="flex flex-col md:grid md:auto-rows-max md:grid-cols-3 md:gap-4 w-screen items-center
                     text-center md:w-5/6 mx-auto md:justify-items-center">
                        <div v-for="(item, index) in filtered" :key="index"
                        :class="'row-span-'+item.rowspan" class="mb-2 mx-3 md:mx-0">
                            <img class="rounded-xl w-full md:w-72 object-cover object-center" 
                            :src="item.source" alt="">
                        </div>
                    </div>
                </section>

                <!-- footer  -->
                <section id="footer" class="flex bg-gray-200  dark:bg-true-gray-800">
                    <div class="w-full md:w-1/3 h-16 items-center m-auto text-center font-semibold dark:text-gray-300">
                        <p>© Copyright 2021</p>
                        <p>Designed by Helfanza Nanda Alfara</p>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<style>
.hover-trigger .hover-target {
    display: none;
}

.hover-trigger:hover .hover-target {
    display: block;
}

#darkmode:checked ~ label div.toggle-dot {
    @apply translate-x-3;
}

</style>

<script>
import typical from '@/components/typical.js'
export default {
    components: { typical, },
    data : () => ({
        skills : [
            {
                skill : "Tailwind CSS",
                percent : "90",
            },
            {
                skill : "Laravel",
                percent : "70",
            },
            {
                skill : "Vue Js",
                percent : "30",
            },
        ],
        search : null,
        filtered : [],
        portfolios : [
            {
                id : 1,
                source : "https://images.unsplash.com/photo-1554260570-c7068c223285?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : true,
                height: "96",
                rowspan: "2",
            },
            {
                id : 2,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
            {
                id : 3,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
            {
                id : 4,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
            {
                id : 5,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
            {
                id : 6,
                source : "https://images.unsplash.com/photo-1554260570-c7068c223285?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : true,
                height: "96",
                rowspan: "2",
            },

            {
                id : 4,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
            {
                id : 5,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },

            {
                id : 4,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
            {
                id : 5,
                source : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                isMobile : false,
                height: "44",
                rowspan: "1",
            },
        ],
        percent : 0,
        isToggle : false,
        isDarkMode : false,
    }),

    created(){
        this.filtered = this.portfolios
    },

    mounted(){
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.isDarkMode = true
            document.querySelector('html').classList.add('dark')
        } else {
            this.isDarkMode = false
            document.querySelector('html').classList.remove('dark')
            
        }

        localStorage.removeItem('theme')
        //document.querySelector('html').classList.add(localStorage.getItem('theme'))
    },

    methods:{
        selectTheme(theme) {
            this.isDarkMode = theme
            this.isDarkMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
            document.querySelector('html').classList.add(localStorage.getItem('theme'))
            this.isDarkMode ? document.querySelector('html').classList.remove('light') : document.querySelector('html').classList.remove('dark')
        },
        setToggle(b){
            this.isToggle = b
        },
        filterPortfolio(query){
            if(query == 'all'){
                return this.filtered = this.portfolios
            }
            const search = this.portfolios.filter(portfolio => {
                return portfolio.isMobile == query
            })
            this.filtered = search
        }
    },
}
</script>
