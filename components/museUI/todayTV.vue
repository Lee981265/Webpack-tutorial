<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-grid-tile   v-for="tile ,index in lists"  :key="index" class='todays' >
      <a :href="'#/detail/'+tile.id"><img @touchmove="ok" :src="tile.images.large"/></a>
      <span slot="title">{{tile.title}}</span>
    </mu-grid-tile>
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
  },
  methods:{
    ok(){
      console.log(1231)
    }
  }
}
</script>

<style scoped>

.gridlist-demo-container{width:2000px;}
.gridlist-demo .todays{
  float:left;
  width: 5% !important;
  padding: 2px !important;
  height: 180px !important;
}
.gridlist-demo .todays img{width:100%;}
.mu-grid-tile-subtitle, .mu-grid-tile-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
    text-align: center !important;
}

</style>