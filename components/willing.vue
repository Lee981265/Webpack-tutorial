<template>
    <div>
        <div class="hotBackground">
            <div class="filter">
                <div class="leftFilter">
                    <span class="highlight-text">全部</span>
                    <span>10月</span>
                    <span>11月</span>
                    <span>12月</span>
                </div>
                <div class="rightFilter">
                    <span>|</span>
                    <span class="highlight-text">时间</span>
                    <span>热度</span>
                </div>
            </div>
        </div>
        <div v-for="(val,key) in movieObjs" v-if="!showFlag">
            <div class="classTitle">{{key}}</div>
            <a :href="'#/detail/'+value.id" v-for="value in val">
                <div class="hotMovie">
                    <img :src="value.images.small" :alt="value.title" style="float:left;">
                    <ul class="hotDetail">
                        <li style="font-size:1.2rem">{{value.title}}</li>
                        <li class="text-style">导演：<span v-for="(n,index) in value.directors">{{n.name}}<span v-if="index<value.directors.length-1">/</span></span>
                        </li>
                        <li class="text-style">主演：<span v-for="(l,index) in value.casts">{{l.name}}<span v-if="index<value.casts.length-1">/</span></span>
                        </li>
                    </ul>
                    <ul class="hotDetailButton">
                        <li style="font-size:9px">{{value.collect_count|number}}人想看</li>
                        <li>
                            <div class="button">
                                想看
                            </div>
                        </li>
                    </ul>
                </div>
            </a>
        </div>
        <mu-circular-progress :size="40" color="green" v-if="showFlag" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            movieObj: {},
            showFlag: true
        }
    },
    computed: {
        movieObjs() {
            return this.movieObj;
        }
    },
    mounted() {
        if (sessionStorage.getItem('willing')) {
            this.movieObj = JSON.parse(sessionStorage.getItem('willing'));
            this.showFlag = false;
        } else {
            jsonp('https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city=广州&start=0&count=100', null, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {

                    let dateSet = new Set();
                    let movieArr = [];
                    let timeStr = "";
                    data.subjects.forEach((e, i) => {
                        if (timeStr === e.mainland_pubdate) {
                            movieArr.push(e);
                        } else {
                            movieArr = [];
                            movieArr.push(e);
                            timeStr = e.mainland_pubdate
                        }
                        if (!e.mainland_pubdate) {
                            dateSet.add(["即将到来", movieArr])
                            return;
                        }
                        dateSet.add([resetTime(timeStr), movieArr])
                    })
                    const movieMap = new Map(dateSet);
                    this.movieObj = strMapToObj(movieMap);

                    sessionStorage.setItem('willing', JSON.stringify(this.movieObj));
                    this.showFlag = false;


                    function strMapToObj(strMap) {
                        let obj = Object.create(null);
                        for (let [k, v] of strMap) {
                            obj[k] = v;
                        }
                        return obj;
                    }

                    function resetTime(str) {
                        let timeArr = str.split("-");
                        let timeObj = new Date();
                        timeObj.setFullYear(timeArr[0], timeArr[1], timeArr[2]);
                        let timeStr = timeObj.toString().slice(0, 3);
                        let week = "几";
                        switch (timeStr) {
                            case "Mon":
                                week = "一";
                                break;
                            case "Tue":
                                week = "二";
                                break;
                            case "Wes":
                                week = "三";
                                break;
                            case "Fur":
                                week = "四";
                                break;
                            case "Fri":
                                week = "五";
                                break;
                            case "Sat":
                                week = "六";
                                break;
                            case "Sun":
                                week = "日";
                                break;
                        }
                        str = timeArr[0] + "年" + timeArr[1] + "月" + timeArr[2] + "日，星期" + week;
                        return str;
                    }
                }
            })
        };
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
$buttonColor:#ffb300;

a {
    color: #333
}
.mu-circular-progress{
    margin: 30px auto;
    display: block;
}
.hotBackground {
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 9;
    height: 40px;
    line-height: 40px;
}

.hotDetail {
    float: left;
    list-style: none;
    margin: 0;
    padding: 0 20px;
    width: 57%;
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
    width: 21%;
    text-align: center;
    vertical-align: middle;
    margin: 25px 0 0;
    color: $buttonColor;
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
    border: 1px solid $buttonColor;
    border-radius: 3px
}

.classTitle {
    background-color: #eee;
    color: #888;
    padding: 5px 10px;
    font-size: 0.7rem
}

.filter {
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
    color: #ddd;
    .leftFilter {
        float: left;
    }
    .rightFilter {
        float: right;
    }
    span {
        padding: 2px 3px;
        font-size: 0.9rem
    }
    .highlight-text {
        color: #333;
    }
}
</style>