<template>
    <div>
        <h1>电影院</h1>
    </div>
</template>

<script>
import { cinemaListData } from "@/api/api";
export default {
    data() {
        return {
            cinemas: [],
        };
    },
    async mounted() {
        let ret = await cinemaListData();
        this.cinemas = ret.data.data.cinemas;
    },
};
</script>
