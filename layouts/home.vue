<script setup>
const aboutSectionTop = ref(0);

// Method to update the top value from the child component
const updateTop = (newTop) => {
    aboutSectionTop.value = newTop;
};
const props = defineProps({
    pageData: Object,
});
const acfData = ref(props.pageData.acf);
const { animation, about_image } = toRefs(props.pageData.acf);
const config = useRuntimeConfig();
const { siteURL, apiURL } = config.public;

const { data: heroImageData } = await useFetch(`${apiURL}/media/${animation.value}`);
const { data: aboutImageData } = await useFetch(`${apiURL}/media/${about_image.value}`);

provide('aboutSectionTop', aboutSectionTop);
</script>

<template>
    <div class="overflow-hidden">
        <div class="top">
            <FloatingGlobe :heroImageData />
            <HomeHeroSection :acfData />
            <HomeAbouteSection :aboutImageData :acfData @updateAboutSectionTop="updateTop" />
        </div>
        <div class="middle pt-12">
            <HomeServicesSection :acfData/>
        </div>
    </div>
</template>

<style>
.cta .btn-primary {
    position: relative;
}

.cta .btn-primary:before,
.cta .btn-primary:after {
    content: '';
    position: absolute;
    border-color: #fff;
    right: 1rem;
    transition: all 0.3s linear;
}

.cta .btn-primary:before {
    height: 16px;
    width: 2px;
    background-color: #fff;
    transform: rotate(45deg) translate(4.5px, calc(50% + 5px));
    top: 0;
}

.cta .btn-primary:after {
    width: 10px;
    height: 10px;
    top: 50%;
    transform: translate(0, -50%);
    border-top: 2px solid;
    border-right: 2px solid;
}

.cta .btn-primary:hover:before {
    background-color: var(--accent_blue);
}

.cta .btn-primary:hover:after {

    border-color: var(--accent_blue);
}
</style>