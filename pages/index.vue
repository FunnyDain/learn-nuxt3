<template>
  <q-page padding>
    <div class="q-my-xl tex-center">
      <div class="text-h4">All Courses</div>
      <p class="1-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요!</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <!-- @click(프로그래밍 방식)으로 이동할 수도 있지만 RouterLink도 가능 -->
        <!-- <RouterLink :to="`course/${courseSlug}`"> -->
        <!-- 결과는 같지만 라우터 링크를 사용하게 되면 최종적으로 앵커 태그(<a></a>)로 렌더링 되기 때문에 SEO 최적화에 유리-->

        <!-- ** vue router spec -->
        <!-- 그러나 a태그 적용시 스타일이 자동 적용됌(ex)밑줄)-->
        <!-- 그러므로 라우터링크에 있는 커스텀 속성을 사용하여 앵커 태그 말고 CourseCard컴포넌트로 바로 렌더링이 되게 하자! -->
        <!-- custom : 앵커 태그가 렌더링이 안됌, 그러므로 페이지 이동은 x -->
        <!-- navigate : v-slot에서 navigate메서드를 가져와 페이지를 이동시킴 -->
        <!-- <RouterLink v-slot="{ navigate }" custom :to="`course/${courseSlug}`"></RouterLink> -->

        <!-- ** nuxt router spec -->
        <!-- RouterLink를 대체하는 NuxtLink를 제공 -->
        <NuxtLink v-slot="{ navigate }" custom :to="path">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
            @click="navigate"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>

<style scoped></style>
