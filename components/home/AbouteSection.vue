<template>
    <section class="about relative px-20 pb-80 opacity-0 top-[180px] z-10 max-w-[1050px]" ref="aboutSection">
        <div class="py-0">
            <h2 class="text-7xl font-bold" v-html="acfData.about_title"></h2>
            <div class="content flex relative">
                <div class="about-image-wrapper w-2/3 h-[500px]">
                    <img :src="aboutImageData.url" :alt="aboutImageData.alt" :title="aboutImageData.title"
                        class="main-about-image" ref="mainAboutImage">
                </div>
                <div class="text-wrapper flex flex-col gap-10 pt-4">
                    <div class="about-content mt-10">
                        <p class="text-2 max-w-[65ch]">{{ acfData.about_subtitle }}</p>
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
    aboutScrollEffectImageData: Object,
    acfData: Object,
});

</script>
<script>

export default {
    mounted() {
        const setHeroScroll = ($heroSection, distancePercentage) => {
            const opacity = 1 - distancePercentage;
            const rotateX = 150 * distancePercentage + 'deg';

            const addedGap = distancePercentage * 70 < 30 ? '28px' : distancePercentage * 70 + 'px';

            $heroSection.style.opacity = opacity;
            $heroSection.style.transform = `rotateX(${rotateX}) translateX(${-distancePercentage * 90}%)`;
        };

        const setAboutScroll = ($aboutSection, distancePercentage) => {
            const opacity = distancePercentage;
            const translateX = 30 * (1 - distancePercentage) + '%';
            const $aboutImage = this.$refs.mainAboutImage;
            $aboutSection.style.opacity = opacity;

            if (distancePercentage > 0.898) {
                $aboutImage.style.position = 'fixed';
                $aboutImage.style.bottom = 0;
            } else {
                $aboutImage.style.position = 'relative';
            }
        };
        const originalTop = this.$refs.aboutSection.getBoundingClientRect().top;
        window.addEventListener('scroll', () => {
            const $heroSection = document.querySelector('.hero');
            const $aboutSection = this.$refs.aboutSection;

            const aboutSectionTop = $aboutSection.getBoundingClientRect().top;
            const lowerLimit = 250;
            const upperLimit = originalTop - 10;
            if (aboutSectionTop > lowerLimit && aboutSectionTop < upperLimit) {
                const distancePercentage = (aboutSectionTop - upperLimit) / (lowerLimit - upperLimit);
                $aboutSection.style.opacity = distancePercentage;

                setAboutScroll($aboutSection, distancePercentage);
                setHeroScroll($heroSection, distancePercentage);
            }
            if (aboutSectionTop < lowerLimit) {
                setAboutScroll($aboutSection, 1);
                setHeroScroll($heroSection, 1);
            }
            if (aboutSectionTop > upperLimit) {
                setAboutScroll($aboutSection, 0);
                setHeroScroll($heroSection, 0);
            }
        });
    }
}
</script>