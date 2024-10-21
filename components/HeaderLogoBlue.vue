<script setup>
const config = useRuntimeConfig();
const { siteURL, apiURL } = config.public;
const { data, error, refresh } = await useFetch(`${apiURL}/options`, {
    params: {
        setting: 'blue_logo'
    },
});
</script>

<template>
    <div class="logo-container w-[33%] flex justify-center">
        <a :href="siteURL" class="w-32 translate-x-2/4">
            <img v-if="data.url" :src="data.url" :alt="data.alt" :title="data.title" :class="data.class">
        </a>
    </div>

</template>
