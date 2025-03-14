<script setup>
import { ref, onMounted } from 'vue';
import MainHeader from '@/components/MainHeader/MainHeader.vue';
import RangeSliders from '@/components/RangeSliders/RangeSliders.vue';
import { rangeSliders } from '@/rangeSlidersData/rangeSliders';

const containerRef = ref(null);

const disableScrollbar = () => {
  console.log('disabled');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when needed
};

const enableScrollbar = () => {
  console.log('enabled');
  document.body.style.overflow = ''; // Restore scrolling
};

onMounted(() => {
  console.log('HomeView mounted');
});
</script>

<template>
  <main ref="containerRef" class="scroll-container">
    <MainHeader />

    <div style="height: 10vh"></div>

    <div class="container">
      <div class="container container_with-bg mb-rem-4-0 mb-rem-xs-3-0">
        <div class="row mb-rem-3-0 mb-xs-rem-2-0">
          <div class="col-lg-7 col-xs-12 mb-xs-rem-2-0">
            <div class="text text-xl">
              На основе полученной информации попробуй распределить области
              управления, исходя из своей должности.
            </div>
          </div>
          <div class="col-lg-5 col-xs-12">
            <div class="hint text-center">
              Потяни за ползунок влево или вправо, чтобы распределить области
              управления.
            </div>
          </div>
        </div>
        <RangeSliders :settings="rangeSliders" @disable-scrollbar="disableScrollbar" @enable-scrollbar="enableScrollbar" />
      </div>
    </div>

    <div style="height: 100vh"></div>
  </main>
</template>

<!-- <style scoped lang="scss">
.scroll-container {
  overflow: auto;
  max-height: 100vh;
}
</style> -->
