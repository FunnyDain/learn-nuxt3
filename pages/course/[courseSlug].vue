<template>
  <AppCard aria-controls>
    <template #header>
      <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
      <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
        <span class="flex items-center">
          <q-icon name="star" size="16px" color="orange" />
          <span>{{ course?.rating }}</span>
        </span>
        <span> {{ course?.reviewsCount }}개의 수강평 </span>
        <span>&middot;</span>
        <span>{{ course?.studentCount }}명의 수강생</span>
        <q-space />
        <a class="text-bold" :href="course?.reviewsUrl" target="_blank">
          수강평 보기
        </a>
      </div>
    </template>
    <div class="q-mb-md">
      <VideoPlayer :src="course?.video" />
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-btn
          label="인프런에서 수강하기"
          unelevated
          class="full-width"
          color="primary"
          :href="course?.inflearnUrl"
          target="_blank"
        />
      </div>
      <div class="col-6">
        <q-btn
          label="짐코딩 클럽에서 수강하기"
          unelevated
          class="full-width"
          color="red"
          :href="course?.gymcodingUrl"
          target="_blank"
        />
      </div>
    </div>
    <p class="q-mt-lg text-grey-8">
      {{ course?.content }}
    </p>
    <q-separator class="q-mb-lg" />
    <q-form class="q-gutter-y-md">
      <q-btn
        label="수강완료"
        class="full-width"
        color="green"
        unelevated
        :outline="completed ? false : true"
        :icon="completed ? 'check' : undefined"
        @click="completed = !completed"
      />
      <q-input
        v-model="memo"
        type="textarea"
        outlined
        dense
        placeholder="메모를 작성해주세요."
        rows="3"
        autogrow
      />
    </q-form>
    <!-- 이전 강의, 다음 강의 버튼 추가 -->
    <template #footer>
      <ClientOnly>
        <q-btn
          v-if="prevCourse"
          label="이전 강의"
          color="primary"
          unelevated
          @click="movePage(prevCourse.path)"
        />
        <q-btn
          v-if="prevCourse"
          label="쿼리 추가"
          color="dark"
          unelevated
          :to="{ path: $route.path, query: { timestamp: Date.now() } }"
        />
        <!-- fullPath는 쿼리까지 같이 온다. -->
        {{ $route.fullPath }}
        <q-space />
        <q-btn
          v-if="nextCourse"
          label="다음 강의"
          color="primary"
          unelevated
          @click="movePage(nextCourse.path)"
        />
      </ClientOnly>
    </template>
  </AppCard>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
// as string : string | string[]이 올 수 있기 때문에 string이라고 명시해줌!
const { course, prevCourse, nextCourse } = useCourse(courseSlug);

// 이 페이지가 재렌더링되는 지 test용 console
console.log('[courseSlug].vue 컴포넌트 setup hooks');

// const title = ref('');
// key에 동적으로 값을 할당하면 이러한 key를 기준으로 리렌더링 할 수 있다.
definePageMeta({
  key: (route) => route.fullPath,

  // 커스텀 메타 속성
  title: 'My home page',

  // error
  // definePageMeta와 같은 유틸 함수는 컴파일될 때 컴포넌트 밖으로 끌어올
  // title: title.value

  // 사용자 정의 메타데이터 타입 정의
  // 페이지에 사용자 정의 메타데이터를 추가하는 경우 타입이 안전한 방식으로 수행하는 것이 좋다.
  // definePageMeta가 허용하는 객체의 타입을 확장하는 것이 가능
  pageType: '',

  // 재렌더링하지 않고 캐싱됌
  keepalive: true,
  // alias로 접근할수 있는 url을 여러 개 더 설정 가능
  alias: ['/lecture/:courseSlug'],
});

console.log(`route.meta.title: `, route.meta.title);
const memo = ref('');
const completed = ref<boolean>(false);

const movePage = async (path: string) => {
  await navigateTo(path);
};
</script>

<style scoped></style>
