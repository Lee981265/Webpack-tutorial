<template>
    <div class="demo-infinite-container anr">
        <mu-list>
            <template v-for="(item,index) in lists">
                <!--  <mu-list-item/> -->
                <!-- <div>{{i}}</div> -->
                <a :href="'#/detail/'+item.id">
                    <div class='tenter'>
                        <!--  <div class='NO left' ><b><i>{{index+1}}</i></b></div> -->
                        <img :src="item.images.small" alt="" class='IMG left'>
                        <div class='left details'>
                            <div class='name'>{{item.title}}</div>
                            <div>主演：{{item.casts[0]?item.casts[0].name_en:"未知"}}</div>
                            <div class='year'>类型：{{item.genres[0]}}/{{item.genres[1]}}</div>
                            <!--  <div class='time'>时长：{{item.durations[0]}}</div> -->
                            <div class='stars left'></div>
                            <div class='pingfeng left'>{{item.rating.average}}</div>
                            <div class='count left'>{{item.collect_count}}人评价</div>
                        </div>
                    </div>
                </a>
                <mu-divider/>
            </template>
        </mu-list>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data() {
        //const list = []
        // for (let i = 0; i < 6; i++) {
        //   list.push('item' + (i + 1))
        // }
        return {
            //list,
            lists: [],
            num: 20,
            start: 20,
            loading: false,
            scroller: null
        }
    },
    methods: {
        loadMore() {
            this.loading = true
            setTimeout(() => {

                var self = this;
                if (self.start >= 130) {
                    return
                }
                try {
                    $.ajax({
                        type: 'GET',
                        //url:"https://api.douban.com//v2/movie/top250?start="+self.start+"&count=10",
                        url: "https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=" + self.start + "&count=" + self.num + "&client=somemessage&udid=dddddddddddddddddddddd",
                        dataType: "jsonp",
                        success: function(data) {
                            // console.log(data.subjects);
                            self.lists = data.subjects;
                            // self.lists = self.lists.concat(data.subjects);
                            self.start += 20;
                        }
                    })
                } catch (e) {}


                this.num += 10
                this.loading = false
            }, 5000)
        }
    },
    mounted() {
        this.scroller = this.$el;
        this.loadMore();

    }
}
</script>
<style lang="css" scoped>
a {
    color: #000;
}

.tenter {
    padding: 15px 5px;
}

.stars {
    background: -webkit-image-set(url(https://img3.doubanio.com/f/shire/680a4bc4c384199245b080c7104da5be8ed717d3/pics/rating_icons/ic_rating_m.png) 2x) no-repeat;
    height: 8px;
    width: 47px;
    margin-top: 4px;
}

.NO {
    margin: 5px 10px 0 5px;
}

.left {
    float: left;
}

.tenter {
    width: 100%;
    overflow: hidden;
}

.demo-infinite-container {
    /*overflow: auto;*/
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    padding-bottom: 100px !important;
}



.anr {
    height: auto !important;
}

.pingfeng {
    margin-right: 5px;
}

.details {
    margin-left: 30px;
    margin-top: 10px;
}

.pingfeng,
.count {
    color: #ddd !important;
    font-size: 9px !important;
}
</style>