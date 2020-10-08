<template>
    <div class="nav">
        <ul>
            <router-link to="/film/nowplaying" tag="li" exact active-class="active">
                <span>正在热映</span>
            </router-link>
            <router-link to="/film/comingsoon" tag="li" active-class="active">
                <span>即将上映</span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    ul {
        display: flex;
        text-align: center;
        li {
            flex: 1;
            display: flex;
            justify-content: center;
            &.active {
                span {
                    width: 40%;
                    border-bottom: 2px solid red;
                    display: block;
                }
            }
        }
    }
}
</style>