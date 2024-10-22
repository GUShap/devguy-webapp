<script setup>
    const props = defineProps({
        heroImageData: Object,
    });
</script>

<template>
    <div class="w-[750px] fixed right-0 translate-x-[50%] z-10">
        <img :src="heroImageData.url" :alt="heroImageData.alt" :title="heroImageData.title">
    </div>
</template>