<script setup>
const config = useRuntimeConfig();
const { siteURL, apiURL } = config.public;
const { data, error, refresh } = await useFetch(`${apiURL}/settings`, {
    params: {
        setting: 'site_logo', // Example query var, replace with the setting you need
    }
});
</script>

<template>
    <a :href="siteURL">
        <img v-if="data.value.url" :src="data.value.url" :alt="data.value.alt" :title="data.value.title" :class="data.value.class">
    </a>
</template>