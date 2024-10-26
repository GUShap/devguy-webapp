<script setup>
const props = defineProps({
    acfData: Object,
});
const aboutSectionTop = inject('aboutSectionTop');
const servicesSection = ref(null);
const bgMode = useBgMode()

let prevAboutSectionTop = 0;
let scrollCounter = 0;

const setServiceSectionTransition = (isScrollingDown) => {
    if (aboutSectionTop.value <= 0) return;
    const $servicesSection = servicesSection.value;
    if (aboutSectionTop.value === prevAboutSectionTop) {
        isScrollingDown ?
            scrollCounter++ :
            scrollCounter--;
    }

    if (isScrollingDown && scrollCounter > 30) {
        $servicesSection.style.top = '0';
        bgMode.value = 'blue';
    }
    
    if (!isScrollingDown && scrollCounter < 30) {
        $servicesSection.style.top = '100%';
        bgMode.value = 'gray';
    }

    prevAboutSectionTop = aboutSectionTop.value;
};
onMounted(() => {
    let lastScrollTop = 0;
    const isScrollingDown = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const isDown = scrollTop > lastScrollTop;

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Reset for mobile or negative scrolls
        return isDown;
    }
    window.addEventListener('scroll', () => {
        setServiceSectionTransition(isScrollingDown());
    });
});
</script>

<template>
    <section class="services pt-44 pb-16 px-20 fixed top-full left-0 right-0 transition-top duration-500 h-[100vh] ease-in-out bg-accent_blue text-[#fff]" ref="servicesSection">
        <div class="content-wrapper flex flex-col gap-y-8">
            <h2 class="main-title text-4xl font-extrabold" v-html="acfData.services_title"></h2>
            <div class="subtitle">
                <p class="text-2 max>W-[65ch]">{{ acfData.services_subtitle }}</p>
            </div>
        </div>
    </section>
</template>