<script setup>
import { ref } from 'vue';

const route = useRoute();
const slug = ref('');
const config = useRuntimeConfig();
const { siteURL, apiURL } = config.public;
if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;
    slug.value = !route.params.slug[lastIndex]
        ? route.params.slug[lastIndex - 1]
        : route.params.slug[lastIndex];
} else {
    slug.value = 'home';
}
const { data: pageData } = await useFetch(`${apiURL}/pages`, {
    query: { slug: slug.value },
});
const { data: logosData } = await useFetch(`${apiURL}/options`, {
    params: {
        setting: 'all'
    },
});
</script>

<template>
    <div class="bg-bg_light">
        <Header :slug :logosData />
        <NuxtLayout name="content" :pageData="pageData[0]" :slug></NuxtLayout>

    </div>
</template>