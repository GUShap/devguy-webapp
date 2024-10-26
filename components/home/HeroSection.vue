<script setup>
const props = defineProps({
    acfData: Object,
});
</script>

<template>
    <section class="hero pt-2 pb-44 px-20 sticky top-[160px]" ref="heroSection">
        <div class="content-wrapper flex flex-col gap-y-8">
            <h1 class="main-title text-7xl font-extrabold" v-html="acfData.title"></h1>
            <div class="subtitle">
                <p class="text-2 max-w-[65ch]">{{ acfData.subtitle }}</p>
            </div>
            <div class="cta">
                <a class="btn btn-primary bg-accent_text text-bg_white rounded-full pl-8 pr-12 py-2"
                    :href="acfData.button_link.url" :target="acfData.button_link.target">
                    {{ acfData.button_link.title }}
                </a>
            </div>
        </div>
    </section>
</template>