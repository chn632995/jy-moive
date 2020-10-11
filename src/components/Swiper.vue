<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    mounted() {
        this.$nextTick(() => {
            new Swiper(".swiper-container", {
                slidesPerView: 4,
            });
        });
    },
};
</script>
