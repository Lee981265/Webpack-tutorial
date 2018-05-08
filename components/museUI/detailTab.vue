<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="评论"/>
    <mu-tab value="tab2" title="讨论区"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'" @click='film'>
    <section class="subject-comments">
        <h2>{{subject.title}}</h2>
        <div class="bd" id="comment-list">
        <ul data-reactroot="" class="list comment-list">
        <li class="" v-for='a in person'><div class="desc"><a :href="a.author.alt"><img :src="a.author.avatar" alt="辣眼看电视"></a><div class="user-info"><strong>{{a.author.name}}</strong><span class="rating-stars" data-rating="4"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span></span><div class="date">{{a.created_at}}</div></div></div><p>{{a.content}}</p><div class="btn-info"><div class="ic-btn ic-btn-like  left "><span class="text"></span></div><div class="ic-btn ic-btn-more   right"></div></div></li><li class=""><div class="desc"><a href="/people/1005928/"><img src="https://img1.doubanio.com/icon/up1005928-127.jpg" alt="影志"></a><div class="user-info"><strong>影志</strong><span class="rating-stars" data-rating="4"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span></span><div class="date">2017-09-26 20:03:54</div></div></div><p>开心麻花回归纯粹的喜剧路线，马丽出场一开口就忍不住笑了…变身后进入女浴室的狂欢，达到全片最高潮，“好运来”莫名的喜庆，吴良太帅！2017版《你的名字》+《摔跤吧爸爸》+《激战》。“是不是有种恍然大明白的感觉？”哈哈哈…</p><div class="btn-info"><div class="ic-btn ic-btn-like  left "><span class="text">4283</span></div><div class="ic-btn ic-btn-more   right"></div></div></li><li class=""><div class="desc"><a href="/people/1032989/"><img src="https://img3.doubanio.com/icon/up1032989-50.jpg" alt="桃桃淘电影"></a><div class="user-info"><strong>桃桃淘电影</strong><span class="rating-stars" data-rating="3"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span><span class="rating-star rating-star-medium-gray"></span></span><div class="date">2017-10-01 10:59:07</div></div></div><p>始终没办法喜欢开心麻花的电影，满场尴尬到不行。甚至在身体互换梗这个题材里，也不算特别突出的，笑点的打磨程度，远不如夏洛特，虽然那部也挺奇怪的。开心麻花的问题始终是，你能感觉到他们卖力在演，一直出戏。</p><div class="btn-info"><div class="ic-btn ic-btn-like  left "><span class="text">2880</span></div><div class="ic-btn ic-btn-more   right"></div></div></li><li class=""><div class="desc"><a href="/people/50060410/"><img src="https://img1.doubanio.com/icon/up50060410-8.jpg" alt="朝阳区白百合"></a><div class="user-info"><strong>朝阳区白百合</strong><span class="rating-stars" data-rating="3"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span><span class="rating-star rating-star-medium-gray"></span></span><div class="date">2017-09-19 22:12:01</div></div></div><p>十一档票房冠军！比「夏洛特」好，马丽表演真的很厉害！要说Bug，可能就是拜师学艺后，练了那么久拳击的艾伦怎么还是一肚子囊肉，完全不符合人设呀....</p><div class="btn-info"><div class="ic-btn ic-btn-like  left "><span class="text">3761</span></div><div class="ic-btn ic-btn-more   right"></div></div></li><li class="go-comment-list"><a href="/movie/subject/27038183/comments?from=subject">查看全部短评</a></li><!-- react-empty: 76 --><!-- react-empty: 77 --></ul></div>
    </section>
  </div>
  <div v-if="activeTab === 'tab2'" @click='discuss'>
    <div id="discussions-root"><div data-reactroot="" class="subject-forum-topics"><h2><!-- react-text: 3 -->讨论(<!-- /react-text --><!-- react-text: 4 -->495<!-- /react-text --><!-- react-text: 5 -->)<!-- /react-text --></h2><ul class="list"><li><a href="/movie/discussion/615043167"><h3>我不是针对谁，我是说在座的打四星及以上的都是煞笔！</h3><div class="info"><!-- react-text: 11 -->36<!-- /react-text --><!-- react-text: 12 -->回应<!-- /react-text --></div></a></li><li><a href="/movie/discussion/615048757"><h3>没去电影院看完了</h3><div class="info"><!-- react-text: 17 -->1<!-- /react-text --><!-- react-text: 18 -->回应<!-- /react-text --></div></a></li><li><a href="/movie/discussion/615042171"><h3>笑过了，你们却说不好</h3><div class="info"><!-- react-text: 23 -->61<!-- /react-text --><!-- react-text: 24 -->回应<!-- /react-text --></div></a></li><li><a href="/movie/discussion/615044557"><h3>还是豆瓣聪明人多，B站的脑残不要太多</h3><div class="info"><!-- react-text: 29 -->17<!-- /react-text --><!-- react-text: 30 -->回应<!-- /react-text --></div></a></li><li><a href="/movie/discussion/615033623"><h3>全程尬到底，能打负分吗？</h3><div class="info"><!-- react-text: 35 -->153<!-- /react-text --><!-- react-text: 36 -->回应<!-- /react-text --></div></a></li><li class="go-list"><a href="/movie/subject/27038183/discussions">查看全部讨论</a></li></ul></div></div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      arr:[],
      person:[],
      subject:[]
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    film(){
      var self=this;
      this.$.ajax({
          type : "get", //jquey是不支持post方式跨域的
          url : "https://api.douban.com/v2/movie/subject/"+self.$route.params.id+"/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", 
          dataType: "jsonp",
          success : function(json){
              console.log(json);
              self.arr=json
              self.person=json.comments
              self.subject=json.subject
          }
      });
    },
    discuss(){
      var self=this;
      this.$.ajax({
          type : "get", //jquey是不支持post方式跨域的
          url : "https://api.douban.com/v2/movie/subject/"+self.$route.params.id+"/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", 
          dataType: "jsonp",
          success : function(json){
              console.log(json);
              self.brr=json   
              
          }
      });
    }
  }
}
</script>
<style scoped>
.mu-tabs{
      background-color: #58bc58;
      margin-top:30px;
}
</style>