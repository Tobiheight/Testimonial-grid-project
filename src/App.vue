<template>
  <main class="h-full w-full flex items-center justify-center bg-sky-100 py-10 font-main">

    <article class="tablet:w-[87%] tablet:grid-cols-4 tablet:gap-x-5 tablet:grid-row-2

    mid:grid-cols-1 mid:grid-row-2 
    
    px-5 grid  gap-y-6 font-main text-white 

    *:grid *:gap-y-5 *:*:grid *:*:gap-y-5
    
    *:*:*:px-8 *:*:*:py-6 
    
    *:*:*:*:flex *:*:*:*:flex-row *:*:*:*:items-center *:*:*:*:gap-5 [&_h1]:*:*:*:*:text-[14px] 
    
    [&_h2]:*:*:*:*:text-[12px] [&_h2]:*:*:*:*:opacity-70  *:*:*:rounded-lg

    [&_img]:*:*:*:*:w-9 [&_img]:*:*:*:*:h-9 [&_img]:*:*:*:*:rounded-full [&_img]:*:*:*:*:border-[2.65px]
       
    [&_h3]:*:*:*:text-[16.1px] [&_h3]:*:*:*:font-semibold [&_h3]:*:*:*:py-3 
      
    [&_p]:*:*:*:text-[11.7px] [&_p]:*:*:*:opacity-70  ">

      <section class="one 
      tablet:grid-rows-2 tablet:col-span-3 mid:grid-rows-2 ">

        <div class="tablet:grid-cols-3 tablet:gap-x-5 
         mid:grid-cols-2 mid:row-span-1 mid:gap-x-5">

          <div class="home-wrap bg-viol relative tablet:col-span-2 mid:col-span-1">

            <div class="info">

              <img src="./assets/images/image-daniel.jpg" alt="" class=" border-violet-400">

              <span class="">

                <h1 class="">{{ jsonData[0].name }}</h1>

                <h2>{{ cred = 'Verified Graduate' }}</h2>

              </span>

            </div>

            <h3 class="z-40">{{ jsonData[0].head }}</h3>
            <p>"{{ jsonData[0].main }}"</p>

          </div>

          <div class="home-wrap bg-gray-darkblue mid:container">

            <div class="info ">

              <img src="./assets/images/image-jonathan.jpg" alt="" class="border-white">

              <span class="">

                <h1 class="">{{ jsonData[1].name }}</h1>

                <h2>{{ cred = 'Verified Graduate' }}</h2>

              </span>

            </div>

            <h3>{{ jsonData[1].head }}</h3>
            <p>{{ jsonData[1].main }}</p>


          </div>

        </div>

        <div class="tablet:grid-cols-3 tablet:gap-x-5 mid:grid-cols-2 mid:row-span-1 mid:gap-x-5">

          <div class="home-wrap bg-white text-black tablet:col-span-1">

            <div class="info ">

              <img src="./assets/images/image-jeanette.jpg" alt="" class="border-white">

              <span class="">

                <h1 class="">{{ jsonData[2].name }}</h1>

                <h2>{{ cred = 'Verified Graduate' }}</h2>

              </span>

            </div>

            <h3>{{ jsonData[2].head }}</h3>
            <p>{{ jsonData[2].main }}</p>

          </div>

          <div class="home-wrap bg-blackblue tablet:col-span-2">

            <div class="info ">

              <img src="./assets/images/image-patrick.jpg" alt="" class="border-violet-500">

              <span class="">

                <h1 class="">{{ jsonData[3].name }}</h1>

                <h2>{{ cred = 'Verified Graduate' }}</h2>

              </span>

            </div>

            <h3>{{ jsonData[3].head }}</h3>
            <p>{{ jsonData[3].main }}</p>

          </div>

        </div>

      </section>

      <section class="two tablet:grid-cols-1 ">


        <div class=" ">

          <div class="home-wrap bg-white text-black">

            <div class="info ">

              <img src="./assets/images/image-kira.jpg" alt="" class="border-white">
              <span class="">

                <h1 class="">{{ jsonData[4].name }}</h1>

                <h2>{{ cred = 'Verified Graduate' }}</h2>

              </span>

            </div>

            <h3>{{ jsonData[4].head }}</h3>
            <p>{{ jsonData[4].main }}</p>

          </div>


        </div>



      </section>

    </article>

  </main>
</template>

<script setup>

import { ref } from 'vue';

import Info from './assets/info.json'

const jsonData = ref(Info);

</script>

<style lang="css" scoped></style>