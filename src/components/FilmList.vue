<template>
    <div class="list">
        <Loading v-if="loading"></Loading>
        <div
            class="item"
            v-else
            v-for="(item, index) in list"
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
                <div v-if="type == 1">{{ item.nation }} | {{ item.runtime }}分钟</div>
            </div>
            <div class="right">
                <span v-if="type == 1">购票</span>
                <span v-else>预约</span>
            </div>
        </div>
    </div>
</template>

<script>
// 导入组件
import Loading from "@/components/Loading";
export default {
    data() {
        return {
            loading: true,
        };
    },
    props: ["list","type"],
    created() {
        if (this.list.length > 0) {
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
    },
};
</script>

<style lang="scss" scoped>
.list {
    margin-bottom: 50px;

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
