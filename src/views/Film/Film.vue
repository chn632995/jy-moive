<template>
    <div>
        <FilmListTopNav :class="fixed ? 'fixed' : ''" />
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from "@/components/FilmListTopNav";
export default {
    data() {
        return {
            // 默认不吸顶
            fixed: false,
        };
    },
    components: {
        FilmListTopNav,
    },
    mounted() {
        window.addEventListener(
            "scroll",
            (e) => {
                let top = document.documentElement.scrollTop;
                if (top > 150) {
                    // 吸顶
                    this.fixed = true;
                } else {
                    // 还原
                    this.fixed = false;
                }
            },
            true
        );
    },
};
</script>

<style lang="scss" scoped>
.fixed {
    position: fixed;
    top: 0;
    background: #ffffff;
}
</style>
