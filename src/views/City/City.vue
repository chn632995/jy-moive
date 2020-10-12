<template>
    <div>
        <van-index-bar :index-list="indexList" highlight-color="#ff0000">
            <template v-for="item in dataList">
                <van-index-anchor :index="item.index" :key="item.index" style="background:#eee"></van-index-anchor>
                <van-cell @click="chooseCity(sub.name)" v-for="(sub,key) in item.data" :title="sub.name" :key="key" />
            </template>
        </van-index-bar>
    </div>
</template>

<script>
import { cityListData } from "@/api/api";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);


export default {
    data() {
        return {
            dataList: [],
            indexList: [],
        };
    },
    async mounted() {
        // 获取城市的列表数据
        let ret = await cityListData();
        this.dataList = ret[0];
        this.indexList = ret[1];
    },
    created() {
        this.eventBus.$emit('footernav',false)
    },
    methods: {
        // 获取选择的城市名称
        chooseCity: function(city){
            console.log(city);
        }
    },
    
};
</script>
