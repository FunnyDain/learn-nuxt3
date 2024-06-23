<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="column">
        <RouterLink to="/">RouterLink Home</RouterLink>

        <!-- 404 : RouterLink는 내부페이지로 연결하는 링크이기 때문, 외부로 이동하려면 앵커태그를 사용 -->
        <!-- <a href="/https://youtube.com/@gymcoding" class="">RouterLink Youtube </a> -->
        <RouterLink to="https://youtube.com/@gymcoding"
          >RouterLink Youtube
        </RouterLink>
        <br />
        <NuxtLink prefetched-class="bg-yellow" to="/">NuxtLink Home</NuxtLink>

        <!-- NuxtLink컴포넌트는 연결된 링크가 내부인지 외부인지 스스로 판단 -->
        <!-- <a href="https://youtube.com/@gymcoding" rel="noopener noreferrer">RouterLink Youtube </a> -->
        <!-- 특징 -->
        <!-- 1. 외부링크라고 판단했기 때문에 앞에 /가 안붙음 -->
        <!-- 2. rel속성이 자동으로 삽입됌(최적화) -->
        <!-- prefetching을 원하지 않는다면, no-prefetch or :prefetch-false -->
        <!-- prefetch됐을때, 특정 클래스를 추가하고 싶다면 prefetched-class="클래스" 적용 -->
        <NuxtLink to="https://youtube.com/@gymcoding"
          >NuxtLink Youtube
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
