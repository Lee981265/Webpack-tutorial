<template>
  <div>
    <h1 class="title">{{arr.original_title}}</h1>
    <section class="subject-info">
        <div class="right">
        <a href="https://www.douban.com/doubanapp/card/get_app?client_uri=douban://douban.com/movie/27038183&amp;from=mdouban&amp;channel=card_movie_cover" rel="nofollow" onclick="ga('send', 'event', 'android', 'click', 'card more link')">
                <img :src='url.large' :alt="arr.original_title" class="cover" style="width:100px;height:140px;">
            </a>
        </div>
        <div class="left">
            <p class="rating">
            评分：
            <strong>{{rating.average}}</strong>
              <span>172883人评价</span>
            </p>
            <p class="meta">
                {{arr.durations[0]}}/{{arr.genres[0]}} / {{arr.genres[1]}} /  {{arr.pubdate}}(中国大陆) 上映
            </p>
        </div>
    </section>
    <section class="subject-intro">
      <h2>{{arr.original_title}}的剧情简介</h2>
      <div class="bd" style="position: static;">
          <p data-clamp="3">{{arr.summary}}</p>
      </div>
    </section> 
    <photo></photo>
    <tab></tab>
    <section class="subject-rec">
        
        <h2>喜欢{{arr.original_title}}的人也喜欢</h2>
        <div class="bd">
            <ul>
                    
                    <li>
                        <a href="/movie/subject/25964071?from=rec" rel="">
                            <div class="wp">
                                <img alt="夏洛特烦恼" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2264377763.webp">
                                <h3>夏洛特烦恼</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/1306249?from=rec" rel="">
                            <div class="wp">
                                <img alt="唐伯虎点秋香" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1946455272.webp">
                                <h3>唐伯虎点秋香</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/10574622?from=rec" rel="">
                            <div class="wp">
                                <img alt="人再囧途之泰囧" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1793720172.webp">
                                <h3>人再囧途之泰囧</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/1302425?from=rec" rel="">
                            <div class="wp">
                                <img alt="喜剧之王" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1043597424.webp">
                                <h3>喜剧之王</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/1299398?from=rec" rel="">
                            <div class="wp">
                                <img alt="大话西游之月光宝盒" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1280323646.webp">
                                <h3>大话西游之月光宝盒</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/10741643?from=rec" rel="nofollow">
                            <div class="wp">
                                <img alt="我的个神啊" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2243803873.webp">
                                <h3>我的个神啊</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/25937854?from=rec" rel="nofollow">
                            <div class="wp">
                                <img alt="银河护卫队2" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2455261804.webp">
                                <h3>银河护卫队2</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/25662329?from=rec" rel="nofollow">
                            <div class="wp">
                                <img alt="疯狂动物城" data-type="cover" src="https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2315672647.webp">
                                <h3>疯狂动物城</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/3793023?from=rec" rel="nofollow">
                            <div class="wp">
                                <img alt="三傻大闹宝莱坞" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p579729551.webp">
                                <h3>三傻大闹宝莱坞</h3>
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/movie/subject/26311973?from=rec" rel="nofollow">
                            <div class="wp">
                                <img alt="唐人街探案" data-type="cover" src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2302930556.webp">
                                <h3>唐人街探案</h3>
                            </div>
                        </a>
                    </li>
            </ul>
        </div>
    </section>
  </div>
    
</template>

<script>
import tab from './detailTab.vue'
import photo from './photo.vue'
export default {
  data(){
        return{
            arr:{},
            rating:[],
            url:[]
        }
  },
  mounted(){
    var self=this;
    this.$.ajax({
        type : "get", //jquey是不支持post方式跨域的
        url : "https://api.douban.com/v2/movie/subject/"+self.$route.params.id+"?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", 
        dataType: "jsonp",
        success : function(json){
            self.arr=json
            console.log(self.arr);
            console.log("aaa",self.arr.durations[0]);
            self.rating=json.rating
            self.url=json.images
        }
    });
  },
  components:{
    tab,
    photo
  } 
}
</script>
<style>
h1 {
    margin: 30px 0 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;
}
.subject-info {
    position: relative;
    margin-bottom: 30px;
}
.subject-info .right {
    float: right;
}
.subject-info .left {
    padding-bottom: 30px;
    margin-right: 100px;
}
.subject-info .rating span {
    color: #aaa;
}
</style>