<template>
    <header class="bg-bg_light py-12 px-20 text-accent_text sticky top-0 w-full">
        <div class="nav-container flex justify-between items-center">    
            <LeftNav />
            <HeaderLogoBlue />
            <ContactButton />
        </div>
    </header>
</template>

<script setup>
const  props = defineProps({
        title: String,
        slug: String,
    });
</script>