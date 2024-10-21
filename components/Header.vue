<template>
    <header class="bg-bg_light py-12 px-10 text-accent_text">
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