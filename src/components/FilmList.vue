<template>
    <div class="list" :style="{ height: height + 'px' }">
        <div>
            <Loading v-if="loading"></Loading>
            <div
                class="item"
                v-else
                v-for="(item, index) in data"
                @click="goDetail(item.filmId)"
                :key="index"
            >
                <div class="left">
                    <img :src="item.poster" />
                </div>
                <div class="middle">
                    <div>{{ item.name }}</div>
                    <div>
                        <span>观众评分 </span>
                        <span class="grade">{{ item.grade }}</span>
                    </div>
                    <div>主演：{{ item.actors | parseActors }}</div>
                    <div v-if="type == 1">
                        {{ item.nation }} | {{ item.runtime }}分钟
                    </div>
                </div>
                <div class="right">
                    <span v-if="type == 1">购票</span>
                    <span v-else>预约</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 导入组件
import Loading from "@/components/Loading";
import BScroll from "better-scroll";
import { nowPlayingListData, comingSoonListData } from "@/api/api";
export default {
    data() {
        return {
            loading: true,
            height: 0,
            bs: null,
            pageNum: 1,
            data: [],
            flag: true,
        };
    },
    props: ["list", "type"],
    created() {
        this.data = this.list;
        if (this.data.length > 0) {
            this.loading = false;
        }
    },
    components: {
        Loading,
    },
    filters: {
        parseActors: function(value) {
            let actors = "";
            value.forEach((element) => {
                actors += element.name + " ";
            });
            return actors;
        },
    },
    methods: {
        goDetail: function(filmId) {
            this.$router.push({ name: "detail", params: { filmId } });
        },
        getData: async function() {
            this.pageNum++;
            if (this.flag) {
                if (this.type == 1) {
                    var ret = await nowPlayingListData(this.pageNum);
                } else {
                    var ret = await comingSoonListData(this.pageNum);
                }
                if (ret.data.data.films.length) {
                    this.data = this.data.concat(ret.data.data.films);
                } else {
                    this.flag = false;
                }
            }
        },
    },
    mounted() {
        this.height = document.documentElement.clientHeight - 100;
    },
    updated() {
        this.$nextTick(() => {
            this.bs = new BScroll(".list", {
                pullUpLoad: true,
                pullDownRefresh: true,
                click: true,
            });
            this.bs.on("pullingUp", () => {
                this.getData();
                this.bs.finishPullUp();
            });
            this.bs.on("pullingDown", () => {
                this.getData();
                this.bs.finishPullDown();
            });
        });
    },
    beforeDestroy() {
        this.bs = null;
    },
};
</script>

<style lang="scss" scoped>
.list {
    margin-bottom: 50px;
    overflow: hidden;

    .item {
        margin-top: 15px;
        padding-bottom: 15px;
        display: flex;
        color: #797d82;
        font-size: 13px;
        border-bottom: 1px solid #ededed;

        .left {
            width: 77px;
            height: 100px;
            margin-left: 20px;
            img {
                width: 66px;
                height: 100%;
            }
        }

        .middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 55%;

            div:nth-of-type(1) {
                color: #191a1b;
                font-size: 16px;
            }

            div:nth-of-type(3) {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .grade {
                color: #ffb232;
                font-size: 14px;
            }
        }

        .right {
            width: 15%;
            display: flex;
            align-items: center;
            margin-right: 20px;

            span {
                border: 1px solid #ff5f16;
                background: white;
                color: #ff5f16;
                border-radius: 2px;
                height: 25px;
                line-height: 25px;
                font-size: 13px;
                width: 50px;
                text-align: center;
            }
        }
    }
}
</style>
