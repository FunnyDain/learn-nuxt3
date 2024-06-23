<template>
  <q-card class="card">
    <!-- Named Slot : header네임을 가진 slot콘텐츠가 있을때 렌더링 -->
    <q-card-section v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </q-card-section>

    <q-card-section class="card__body">
      <slot></slot>
    </q-card-section>

    <q-separator />

    <q-card-actions v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
// 1. 기존 : runtime 선언
// defineProps({
//   title: {
//     type: String,
//     default: '',
//   },
// });

// ts적용 : 타입 기반 선언
// 2. 제네릭 선언
// <> 꺽쇠괄호 안에 타입을 적어주면 된다.
// defineProps<{ title: string }>();

// 3. 인터페이스 분리
interface Props {
  // ? : 필수값이 아니라 선택
  title?: string;
}
defineProps<Props>();
</script>

<style scoped>
.card__header {
  padding: 32px 32px 0px 32px;
}
.card__body {
  padding: 32px;
}
.card__footer {
  padding: 16px 32px 16px 32px;
}
</style>
