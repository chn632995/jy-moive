<template>
    <div class="detail">
        <div class="film-header">
            <div class="goBack" @click="goBack()">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
                    alt=""
                />
            </div>
            <div class="title">我和我的家乡</div>
            <!---->
        </div>
        <div class="img">
            <img
                :src="film.poster"
            />
        </div>
        <div class="film-detail">
            <div>{{film.name}}</div>
            <div>{{film.category}}</div>
            <div>{{film.premiereAt | parsePremiereAt}}上映</div>
            <div>{{film.nation}} | {{film.runtime}} 分钟</div>
            <div>
                {{film.synopsis}}
            </div>
        </div>
    </div>
</template>

<script>
import { moiveDetail } from "@/api/api";
import moment from 'moment'
export default {
    data() {
        return {
            film: {},
        };
    },
    methods: {
        goBack: function() {
            this.$router.push({path: '/film'});
        },
    },
    async mounted() {
        let ret = await moiveDetail(this.$route.params.filmId);
        this.film = ret.data.data.film;
    },
    filters: {
        parsePremiereAt: function(value){
            return moment(value * 1000).format('YYYY-MM-DD')
        }
    }
};
</script>

<style lang="scss" scoped>
.detail {
    .img {
        width: 100%;
        height: 260px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .film-header {
        position: fixed;
        background-color: hsla(0, 0%, 100%, 0);
        color: transparent;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        width: 100vw;
        height: 44px;
        z-index: 1;

        .goBack img {
            width: 30px;
            margin-top: 10px;
            margin-left: 10px;
        }
    }

    .film-detail {
        padding: 15px;
        padding-top: 12px;
        background-color: #fff;
    }
}
</style>
