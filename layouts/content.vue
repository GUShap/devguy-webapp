<script setup>
const props = defineProps({
    pageData: Object,
    slug: String,
});

// if(slug == 'home'){}
</script>

<template>
    <div>
        <NuxtLayout :name="slug" :pageData="pageData"></NuxtLayout>
    </div>
</template>