<script setup>
const props = defineProps({
    heroImageData: Object,
});
const bgMode = useBgMode();

const floatingGlobe = ref(null);

onMounted(() => {
    window.addEventListener('scroll', () => {
        const $floatingGlobe = floatingGlobe.value;
        if (bgMode.value !== 'gray') {
            $floatingGlobe.classList.add('bottom-[100vh]');
            $floatingGlobe.classList.remove('bottom-0');
        } else {
            $floatingGlobe.classList.remove('bottom-[100vh]');
            $floatingGlobe.classList.add('bottom-0');
        }
    });
});
</script>

<template>
    <div class="w-[750px] fixed right-0 translate-x-[50%] z-10 transition-all duration-200 ease-in-out bottom-0"
        ref="floatingGlobe">
        <img :src="heroImageData.url" :alt="heroImageData.alt" :title="heroImageData.title">
    </div>
</template>