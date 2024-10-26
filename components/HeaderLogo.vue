<script setup>
const config = useRuntimeConfig();
const { siteURL } = config.public;
const props = defineProps({
    bgMode: String,
    logoData: Object,
});
</script>

<template>
    <div class="logo-container w-[33%] flex justify-center">
        <a :href="siteURL" class="w-32 translate-x-2/4">
            <img v-if="logoData.url" :src="logoData.url" :alt="logoData.alt" :title="logoData.title"
                :class="logoData.class">
        </a>
    </div>

</template>
