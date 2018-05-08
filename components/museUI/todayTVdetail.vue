<template>
<div class="gridlist-demo-container">

  <h3> <span @click="$router.go(-1)">&lt;</span>今日推荐</h3>
  <mu-grid-list class="gridlist-demo">
  <a   v-for="tile ,index in lists"  :key="index"   :href="'#/detail/'+tile.id">
    <mu-grid-tile  class='todays'>
      <img  :src="tile.images.large"/>
      <span slot="title">{{tile.title}}</span>
    </mu-grid-tile></a>
  </mu-grid-list>
</div>
</template>

<script>
import $ from "jquery";

export default {
  data () {
    return {
      lists:[],
    }
  },
  mounted(){
    console.log(this);
    var self = this;
    $.ajax({
      type:'GET',
      url:"https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=10&count=30&client=somemessage&udid=dddddddddddddddddddddd",
      
      dataType:"jsonp",
      success:function(data){
       
        self.lists = data.subjects;
      }
    })
  }
}
</script>

<style scoped>
a{width: 50%;
    padding: 2px;
    height: 180px;}
h3{width:100%;background-color:#FFF;margin:0;text-align:center;color:#000;marginheight:60px;line-height:60px;}
h3 span{float:left;color:#000;font-size: 30px;margin-left: 10px;font-weight:300;}
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 111px;
}

.gridlist-demo{
  width: 500px;
  height: 80% !important;
  overflow-y: auto;
}
.todays{width:100% !important;}
.mu-grid-tile-subtitle, .mu-grid-tile-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
   text-align: center !important;
}
.mu-grid-tile-title span{width:100%;display:block;text-align: center;}

</style>