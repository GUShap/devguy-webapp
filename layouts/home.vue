<script setup>
const props = defineProps({
    pageData: Object,
});
</script>

<template>
    <div>
        <section class="hero">
            <div class="content-wrapper">
                <div class="left">
                    <h1 class="main-title" v-html="pageData.acf.title"></h1>
                    <div class="subtitle">
                        <p>{{ pageData.acf.subtitle }}</p>
                    </div>
                    <div class="cta">
                        <a :href="pageData.acf.button_link.url" class="btn btn-primary" :target="pageData.acf.button_link.target">{{ pageData.acf.button_link.title }}</a>
                    </div>
                </div>
                <div class="right"></div>
            </div>
        </section>
    </div>
    
    <pre>{{ pageData.acf }}</pre>
</template>