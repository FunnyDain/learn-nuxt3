<template>
  <NuxtLayout>
    <!-- default layout -->
    <!-- <RouterView /> -->
    <!-- : 컴포넌트가 렌더링될때, 한번만 렌더링 됌! -->

    <!-- <NuxtPage /> -->
    <!-- : path가 변경되면 다시 렌더링됌(기본속성) -->
    <!-- 단, 쿼리에 의해서는 변경되지 않음 -->
    <!-- ex) <NuxtPage page-key="static" /> -->
    <!-- 이를 변경하고 싶다면 page-key속성을 사용, 정적인 값을 주면 다시 렌더링이 안됌-->

    <!-- page-key속성을 이용해서 쿼리가 변경되었을 때도 렌더링 되도록 수정해보자! -->
    <!-- page-key를 동적으로 설정하는 것! 이를 위해 page-key에 콜백함수로 리턴하면 된다. -->
    <!-- <NuxtPage :page-key="(route) => route.fullPath" /> -->
    <!-- 만약 <NuxtPage>가 Vue3에서 제공하는 내장 컴포넌트인 <Suspense>로 페이지가 렌더링 된다면 문제가 발생할 수 있기 때문에 Route객체를 사용하는 것을 권장하지 않는다.  -->
    <!-- 대안으로 pageKey는 /pages디렉토리에 있는 Vue컴포넌트의 <script>섹션에서 definePageMeta함수를 통해 key값으로 전달할 수 있다. -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
