<template>
  <!-- ** <div></div> : 주의! 페이지 내에서 <NuxtLayout></NuxtLayout>을 사용하는 경우 루트 요소가 아니여야함 -->

  <div>
    <!-- 상위컴포넌트(custom.vue)의 layout이 custom이기 때문에 하위 컴포넌트 역시 동일하게 적용 -->
    <NuxtLayout name="custom">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  // ** 루트요소로 NuxtLayout을 사용하고 싶다면
  // layoutTransition: false
});
</script>

<style lang="scss" scoped></style>
