<template>
<div id=search>
    <mu-appbar >
      <mu-text-field icon="search" class="appbar-search-field"  hintText="请输入搜索内容" v-model='search'/>
    </mu-appbar>
     <mu-flat-button color="white" label="flat Button" slot="right"/>
    <ul class='search-results'>
        <li v-for='s in arr'>
            <a :href="'#/detail/'+s.id">
                <img :src='s.images.large'>
                <div class="subject-info">
                    <span class="subject-title">{{s.title}}</span>
                    <p class="rating">
                        <span class="rating-stars" data-rating="79.0"><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-gray"></span></span>
                        评分：
                        <span>{{s.rating.average}}</span>
                    </p>
                </div>
            </a>
        </li>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
export default{
    data(){
        return{
            search:'',
            arr:[]
        }
    },
    watch:{
        search(a){
            var self=this;
            this.$.ajax({
                type : "get", //jquey是不支持post方式跨域的
                async:false,
                url : "https://api.douban.com/v2/movie/search?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", //跨域请求的URL
                dataType: "jsonp",
                data:{
                    q:a
                },
                success : function(json){
                    console.log(json);
                    self.arr=json.subjects
                }
            });
        }
    },
}
</script>
<style scope lang="sass">
#search{
}
.search-results  {
    li{
        border-bottom: 1px solid #F2F2F2;
        overflow: hidden;
        a{
            display: block;
            overflow: hidden;
        }
    }
    img {
        float: left;
        padding: 10px 0px;
        width: 40px;
    }
    .subject-info {
        display: block;
        padding: 10px 0;
        overflow: hidden;
    }
    .subject-title {
        display: block;
        padding-left: 10px;
        font-size: 17px;
        color: #494949;
    }
    .rating {
        padding-left: 10px;
        -webkit-margin-after: 0px;
        -webkit-margin-before: 3px;
        span {
            color: #aaa;
            height: 14px;
            vertical-align: middle;
        }
    }
    .rating-stars {
        display: inline-block;
        vertical-align: middle;
    }
    .rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
        width: 10px;
        height: 10px;
        background-size: 10px 10px;
    }
}
a{text-decoration:none}
ul,li{
    list-style:none;
    z-index:1000;
}
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
  .mu-appbar{
    color:#58bc58;
    width:100%;
}
hr{
    width:150%;
}
}
</style>