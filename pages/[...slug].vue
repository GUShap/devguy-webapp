<script setup>
import { ref } from 'vue';

const route = useRoute();
const slug = ref('');

if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1;

    slug.value = !route.params.slug[lastIndex]
        ? route.params.slug[lastIndex - 1]
        : route.params.slug[lastIndex];
} else {
    slug.value = 'home';
}

const { data, error, refresh } = await useFetch('https://lightcoral-panther-746127.hostingersite.com/wp-json/wp/v2/pages', {
    query: { slug: slug.value },
});
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>