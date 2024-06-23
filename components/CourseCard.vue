<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text- grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// props ts적용
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}
defineProps<Props>();

// 기존 : defineEmits(['click']);
// event ts적용: 제네릭으로 이벤트명, 대괄호로 파라미터 지정하면 됌!(없다면 빈값)
defineEmits<{
  // 파라미터가 없을때 : 빈값
  click: [];
  // click: [msg: string];
}>();
</script>
