<template>
  <div class="video-container">
    <iframe
      width="100%"
      height="100%"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src?: string;
}
// defalut값을 설정 하는 방법 : withDefault 매크로 함수
// 따로 import 하지 않아도 됌
// 첫번째 인자 : DefineProps를 호출해서 나온 props객체
// 두번째 인자 : 객체로 속성에 대한 default값을 설정
withDefaults(defineProps<Props>(), {
  src: 'https://www.youtube.com/embed/zmq2zu-UsRk',
});
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
