<script>
// import 'swiper/dist/css/swiper.css';
// import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
export default {
    name: 'index',
    components: {
        Swipe,
        SwipeItem
    },
    data () {
        return {
            index: 0,
            swiperOption: {
                slidesPerView: 1,
                // spaceBetween: 30,
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
            }
        }
    },
    created(){
    },
    methods: {
    }
}
</script>
<template>
<div>
    <swipe
        v-model="index"
        style="text-align: center; line-height: 80px; height: 100px; background: #42b983;"
        :autoplayTime="3000"
        >
        <swipe-item style="height: 100px; line-height: 100px">item1</swipe-item>
        <swipe-item style="height: 100px; line-height: 100px">item2</swipe-item>
        <swipe-item style="height: 100px; line-height: 100px">item3</swipe-item>
    </swipe>
    <!-- <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <div class="box stamp">
        卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
    </div>
    <div class="box stamp-apart">
    <div class="stamp-inner stamp-top">
        卡片式的顶部内容 卡片式的顶部内容 卡片式的顶部内容 卡片式的顶部内容 卡片式的顶部内容
    </div>
    <div class="stamp-center"></div>
    <div class="stamp-inner stamp-bottom">
        卡片式的底部内容 卡片式的底部内容 卡片式的底部内容
    </div>
    </div>
</div>
</template>
<style lang="scss">
.swiper-slide{
    height: 200px;
    background: grey;
}
@import "../styles/main";
</style>

