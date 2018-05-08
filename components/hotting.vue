<template>
    <div>
        <a :href="'#/detail/'+m.id" v-for="m in subjects" v-if="!showFlag">
            <div class="hotMovie">
                <img :src="m.images.small" :alt="m.title" style="float:left;">
                <ul class="hotDetail">
                    <li style="font-size:1.2rem">{{m.title}}</li>
                    <li class="text-style">
                        <div class="icon-contaner" v-if="m.rating.average>0">
                            <span v-if="m.rating.stars>10"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                            <span v-else-if="m.rating.stars>=5"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                            <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                            <span v-if="m.rating.stars>20"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                            <span v-else-if="m.rating.stars>=15"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                            <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                            <span v-if="m.rating.stars>30"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                            <span v-else-if="m.rating.stars>=25"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                            <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                            <span v-if="m.rating.stars>40"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                            <span v-else-if="m.rating.stars>=35"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                            <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                            <span v-if="m.rating.stars>=50"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                            <span v-else-if="m.rating.stars>=45"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                            <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                            <span style="position:relative;top:-1.8px">{{m.rating.average}}</span>
                        </div>
                        <div v-else>
                            <span>暂无评分</span>
                        </div>
                    </li>
                    <li class="text-style">导演：<span v-for="(n,index) in m.directors">{{n.name}}<span v-if="index<m.directors.length-1">/</span></span>
                    </li>
                    <li class="text-style">主演：<span v-for="(l,index) in m.casts">{{l.name}}<span v-if="index<m.casts.length-1">/</span></span>
                    </li>
                </ul>
                <ul class="hotDetailButton">
                    <li style="font-size:9px">{{m.collect_count|number}}人看过</li>
                    <li>
                        <div class="button">
                            购票
                        </div>
                    </li>
                </ul>
            </div>
        </a>
        <mu-circular-progress :size="40" color="green" v-if="showFlag" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            subjects: [],
            showFlag: true,
            page: 1,
            count: 20
        }
    },
    methods: {
        loadMore() {
            jsonp(`https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=广州&start={(page-1)*count}&count=20`, null, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    this.subjects.concat(data.subjects);
                };
            })
        }
    },
    mounted() {
        if (sessionStorage.getItem('hotting')) {
            this.subjects = JSON.parse(sessionStorage.getItem('hotting'));
            this.showFlag = false;
        } else {
            jsonp('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=广州&start=0&count=20', null, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    this.subjects = data.subjects;
                    sessionStorage.setItem('hotting', JSON.stringify(data.subjects));
                    this.showFlag = false;
                }
            });

        }
    },
    filters: {
        number: function(value) {
            if (value < 9999) return value;
            else { return (value / 10000).toFixed(1) + "万" }

        }
    }
}
</script>
<style scoped lang="sass">
a {
    color: #333;
}

.mu-circular-progress {
    margin: 30px auto;
    display: block;
}

.hotDetail {
    float: left;
    list-style: none;
    margin: 0;
    padding: 0 20px;
    width: 54%;
}

.hotMovie {
    padding: 10px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}

.hotDetailButton {
    list-style: none;
    float: right;
    padding: 0;
    width: 24%;
    text-align: center;
    vertical-align: middle;
    margin: 25px 0 0;
    color: #ff1744;
}

.text-style {
    font-size: 8px;
    color: #888;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

.button {
    width: 100%;
    border: 1px solid #ff4081;
    border-radius: 3px
}
</style>