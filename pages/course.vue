<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-card>
          <q-item-label header>강의 로드맵</q-item-label>
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="course.path"
            >
              <q-item-section>
                {{ index + 1 }}. {{ course.title }}
              </q-item-section>
            </q-item>

            <!-- ** console이 해당 주소로 이동하지 않는 이상 찍히지 않는다. -->
            <!--             
            <q-item to="/course/prsefetching-1">Prefetching Test 1</q-item>
            <q-item to="/course/prefetching-2">Prefetching Test 2</q-item>
            <q-item to="/course/prefetching-3">Prefetching Test 3</q-item>
            -->

            <!-- NuxtLink의 prefetching으로 인하여 해당 링크로 설정된 페이지르 방문하기 전에 Resource를 미리 로드함 -->
            <!-- 이러한 데이터를 한꺼번에 가져오는 것이 아니라 해당 링크가 스크롤 되어 화면에 보이는 시점(뷰 포트에 보이는 시점)에 로드함 -->
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-1">
              <q-item clickable @click="navigate()">Prefetching Test 1</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-2">
              <q-item clickable @click="navigate()">Prefetching Test 2</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/course/prefetching-3">
              <q-item clickable @click="navigate()">Prefetching Test 3</q-item>
            </NuxtLink>
          </q-list>
        </q-card>
      </div>
      <div class="col">
        <!-- 중첩라우트 -->
        <!-- 1. 현재 렌더링된 컴포넌트(course.vue)와 일치하는 directory를 찾고 -->
        <!-- 2. 그 안에서 렌더링할 컴포넌트를 찾아서 <NuxtPage /> 이 위치에 렌더링 해줌 -->
        <NuxtPage />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>
