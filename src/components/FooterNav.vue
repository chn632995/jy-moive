<template>
    <div class="nav">
        <ul>
            <router-link tag="li" to="/film" active-class="active" >
                <i class="iconfont icondianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema" active-class="active">
                <i class="iconfont iconyingyuan"></i>
                <p>影院</p>
            </router-link>
            <!-- <router-link tag="li" to="/zixun" active-class="active">
                <i class="iconfont iconzixun"></i>
                <p>资讯</p>
            </router-link> -->
            <router-link tag="li" to="/center" active-class="active">
                <i class="iconfont icongeren"></i>
                <p>个人中心</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {
    
}
</script>

<style lang="scss" scoped>
.nav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    color: #797d82;
    height: 50px;
    text-align: center;
    width: 100%;
    border-top: 1px solid #ccc;
    background-color: #ffffff;
    ul{
        display: flex;
        // align-items: center;
        li { 
            flex: 1;
            margin-top: 5px;
            &.active {
                color: #fe5100;
            }
        }
    }
}

</style>