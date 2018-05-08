<template>
    <section class="subject-pics">
        <h2>{{arr.title}}的图片</h2>
        <div class="bd photo-list">
            <ul class="wx-preview">
                <li class="video" data-type="cover" style="background-image: url(&quot;https://img3.doubanio.com/img/trailer/medium/2499811714.jpg?&quot;);">
                    <a href="/movie/trailer/221820"></a>
                </li>
                <li class="pic" v-for="a in arr">
                    <a href="/photos/photo/2499795043?type=S&amp;pos=0">
                        <img  :src="a.image">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default{
    data(){
        return{
            arr:[],
        }
    },
	mounted(){
    var self=this;
    this.$.ajax({
        type : "get", //jquey是不支持post方式跨域的
        url : "https://api.douban.com/v2/movie/subject/"+self.$route.params.id+"/photos?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", 
        dataType: "jsonp",
        success : function(json){
            console.log("111",json);
            self.arr=json.subject;
        }
    });
  }
}
</script>

<style scope>

</style>