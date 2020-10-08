<template>
    <div>
        <FilmListTopNav/>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from '@/components/FilmListTopNav'
export default {
    components: {
        FilmListTopNav
    }
}
</script>