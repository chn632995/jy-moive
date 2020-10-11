<template>
    <div id="app">
        <FooterNav v-if="is_show" />
        <router-view />
    </div>
</template>

<script>
import FooterNav from "@/components/FooterNav";
export default {
    components: {
        FooterNav,
    },
    data() {
        return {
            is_show: true,
        };
    },
    created() {
        this.eventBus.$on("footernav", (flag) => {
            this.is_show = flag;
        });
    },
};
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
html,
body {
    height: 100%;
    touch-action: none;
    ul,
    li {
        list-style: none;
    }
}
</style>
