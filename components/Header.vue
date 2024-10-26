<template>
    <header class="bg-bg_light py-12 px-20 text-accent_text sticky top-0 w-full z-50" ref="mainHeader">
        <div class="nav-container flex justify-between items-center">
            <LeftNav />
            <HeaderLogo :bgMode :logoData v-bind="logoData" />
            <ContactButton />
        </div>
    </header>
</template>

<script setup>

const props = defineProps({
    title: String,
    slug: String,
    logosData: Object,
});

const bgMode = useBgMode();
const { logosData } = props;
let logoData = ref(logosData.blue_logo);
const mainHeader = ref(null);
onMounted(() => {
    const $mainHeader = mainHeader.value;
    
    window.addEventListener('scroll', () => {
        if (bgMode.value === 'blue') {
            logoData.value = logosData.white_logo;
            $mainHeader.classList.add('bg-accent_blue');
            $mainHeader.classList.add('text-[#fff]');
            $mainHeader.classList.remove('bg-bg_light');
            $mainHeader.classList.remove('text-accent_text');
        } else {
            logoData.value = logosData.blue_logo;
            $mainHeader.classList.add('bg-bg_light');
            $mainHeader.classList.add('text-accent_text');
            $mainHeader.classList.remove('bg-accent_blue');
            $mainHeader.classList.remove('text-[#fff]');
        }
    });
});
</script>

<style>
header.bg-accent_blue{
    transition: all 0.3s ease-in-out 0.2s;
}
</style>