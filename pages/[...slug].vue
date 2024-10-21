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
const { data, error, refresh } = await useFetch(`${apiURL}/pages`, {
    query: { slug: slug.value },
});

</script>

<template>
    <div>
        <Header :slug="slug" />
        <NuxtLayout name="content" :pageData="data[0]" :slug></NuxtLayout>

    </div>
</template>