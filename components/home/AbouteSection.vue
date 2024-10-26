<template>
    <section class="about relative px-20 h-[120vh] opacity-0 top-[180px] z-10 max-w-[1050px]" ref="aboutSection">
        <div class="py-0">
            <h2 class="text-7xl font-bold" v-html="acfData.about_title"></h2>
            <div class="content flex relative">
                <div class="about-image-wrapper w-2/3 h-[500px]">
                    <img :src="aboutImageData.url" :alt="aboutImageData.alt" :title="aboutImageData.title"
                        class="main-about-image" ref="mainAboutImage">
                </div>
                <div class="text-wrapper flex flex-col gap-10">
                    <div class="about-content mt-[40px]">
                        <p class="text-2 max-w-[340px]">{{ acfData.about_subtitle }}</p>
                    </div>
                    <div class="cta">
                        <a class="btn btn-primary bg-accent_text text-bg_white rounded-full pl-8 pr-12 py-2"
                            :href="acfData.about_button_link.url" :target="acfData.about_button_link.target">
                            {{ acfData.about_button_link.title }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    aboutImageData: Object,
    acfData: Object,
});

const aboutSection = ref(null);
const emit = defineEmits();

function setHeroScroll($heroSection, distancePercentage) {
    const opacity = 1 - distancePercentage;
    const rotateX = 150 * distancePercentage + 'deg';

    $heroSection.style.opacity = opacity;
    $heroSection.style.transform = `rotateX(${rotateX}) translateX(${-distancePercentage * 90}%)`;
}
function setAboutScroll($aboutSection, distancePercentage, aboutSectionTop) {
    const $aboutImage = aboutSection.value.querySelector('.main-about-image');
    const $aboutTitle = $aboutSection.querySelector('h2');
    const $aboutContent = $aboutSection.querySelector('.text-wrapper');
    const opacity = distancePercentage;
    const topThreshold = 230;
    const translateX = ((aboutSectionTop - topThreshold) * 100 / topThreshold).toFixed(3) + '%';
    const aboutTextOffsetLeft = $aboutContent.offsetLeft;

    $aboutSection.style.opacity = opacity;

    if (distancePercentage >= 0.998) {
        $aboutImage.classList.add('fixed');
        $aboutImage.style.bottom = 0;
    } else {
        $aboutImage.classList.remove('fixed');
    }

    if (aboutSectionTop < topThreshold) {
        const contentStyle = {
            position: 'fixed',
            top: topThreshold + $aboutTitle.offsetHeight + 'px',
            left: aboutTextOffsetLeft + 'px',
            transform: `translateX(calc(80px - ${translateX}))`,
            opacity: (aboutSectionTop - 60) / 100
        };
        const titleStyle = {
            position: 'fixed',
            top: topThreshold + 'px',
            transform: `translateX(${translateX})`,
            opacity: (aboutSectionTop - 60) / 100
        };

        $aboutImage.style.transform = `translateX(${translateX})`;
        Object.assign($aboutContent.style, contentStyle);
        Object.assign($aboutTitle.style, titleStyle);
    } else {
        $aboutTitle.style.position = 'unset';
        $aboutTitle.style.transform = `translateX(0)`;
        $aboutContent.style.position = 'unset';
        $aboutContent.style.transform = `translateX(0)`;
    }
}

onMounted(() => {
    const $heroSection = document.querySelector('.hero');
    const $aboutSection = aboutSection.value;
    const originalTop = $aboutSection.offsetTop;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const aboutSectionTop = $aboutSection.offsetTop - currentScroll;
        const lowerLimit = 290;
        const upperLimit = originalTop - 10;

        if (aboutSectionTop > lowerLimit && aboutSectionTop < upperLimit) {
            const distancePercentage = ((aboutSectionTop - upperLimit) / (lowerLimit - upperLimit)).toFixed(3);
            $aboutSection.style.opacity = distancePercentage;

            setAboutScroll($aboutSection, distancePercentage, aboutSectionTop);
            setHeroScroll($heroSection, distancePercentage);

            // Emit the updated top offset using mitt
          emit('updateAboutSectionTop', aboutSectionTop);
        }

        if (aboutSectionTop > upperLimit) {
            setAboutScroll($aboutSection, 0, aboutSectionTop);
            setHeroScroll($heroSection, 0);
        }

        if (aboutSectionTop < lowerLimit) {
            setAboutScroll($aboutSection, 1, aboutSectionTop);
            setHeroScroll($heroSection, 1);
        }
    });
});
</script>
