<!-- 레이아웃이 동적으로 변경되는 페이지 -->
<template>
  <div class="q-pa-md">
    <div class="q-my-xl text-center q-gutter-md">
      <q-btn
        label="default layout"
        color="dark"
        @click="changePageLayout('default')"
      />
      <q-btn
        label="admin layout"
        color="dark"
        @click="changePageLayout('admin')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Nuxt 프레임워크에서는 자동으로 생성된 타입을 지원
import type { LayoutKey } from '#build/types/layouts';

const changePageLayout = (layout: LayoutKey) => {
  // 동적으로 layout을 변경하기 위해 제공하는 nuxt util함수
  setPageLayout(layout);
};

definePageMeta({
  // layout을 적용하기 싫다면 false를 전달
  layout: false,
});
</script>

<style></style>
