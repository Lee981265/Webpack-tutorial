<template>
<div>
	<searchbox></searchbox>
	<div class='ert'>
		<mu-tabs :value="activeTab" @change="handleTabChange" v-scroll="fixedTab">
	    <mu-tab value="tab1" title="电影" />
	    <mu-tab value="tab2" title="电视剧" />
	  	</mu-tabs>
		
  <div v-if="activeTab === 'tab1'">
	 	<div class='top'>
	 		<h4 class='tops'>今日推荐<span> <a href="#/fMdetailMove">全部20  ></a></span></h4>
    		
    	
			<todaymovies></todaymovies>
	 	</div>
	    <div class='bread'>
	    	<div class='left'>
		    	<div class='left'>
		    		<span class='more'><img src="http://pic5.qiyipic.com/common/lego/20151217/dcb0aaf460974b96a65ac7f66e71a189.png" alt="" style="width:30px;"></span>
		    	</div>
		    	
	    		<div class='right'>
	    			<div><b>找电影</b></div>
	    			<div><span class='light'>喜剧/韩剧/悬疑</span></div>
	    		</div>
	    		
	    	</div>
	    	<div class='left jiange'>
		    		|
		    	</div>
	    	<div class='right'>
	    		<div class='left'>
	    			<span class='more'><img src="http://pic7.qiyipic.com/common/lego/20151201/88a672e670624791966f65d0520c8cd8.png" alt="" style="width:30px;"></span>
	    		</div>
	    		<div class='right'>
	    			<div><b>我的电影</b></div>
	    		<div><span class='light'>未登录</span></div>
	    		</div>
	    		
	    	</div>
	    </div>
	    <div class='top'>
	    	<h4 class='tops'>豆瓣 Top10</h4>
	    	<doubantop></doubantop>
	    </div>
	    <h4 style="margin-left:10px;margin-top:50px;">你可能感兴趣</h4>
		<doubaninterst></doubaninterst>
  </div>
  <div v-if="activeTab === 'tab2'">
    <div class='top'>
	 		<h4 class='tops'>近期热门电视剧<span> <a href="#/todayTVdetail">全部30  ></a></span></h4>
			<todayTV></todayTV>
	</div>
	 <div class='bread'>
	    	<div class='left'>
		    	<div class='left'>
		    		<span class='more'><img src="http://pic5.qiyipic.com/common/lego/20151217/dcb0aaf460974b96a65ac7f66e71a189.png" alt="" style="width:30px;"></span>
		    	</div>
		    	
	    		<div class='right'>
	    			<div><b>找电视</b></div>
	    			<div><span class='light'>国产剧/动画/悬疑</span></div>
	    		</div>
	    		
	    	</div>
	    	<div class='left jiange'>
		    		|
		    	</div>
	    	<div class='right'>
	    		<div class='left'>
	    			<span class='more'><img src="http://pic7.qiyipic.com/common/lego/20151201/88a672e670624791966f65d0520c8cd8.png" alt="" style="width:30px;"></span>
	    		</div>
	    		<div class='right'>
	    			<div><b>我的电视剧</b></div>
	    		<div><span class='light'>未登录</span></div>
	    		</div>	
	    	</div>
	</div>
	<h4 style="margin-left:10px;margin-top:50px;">你可能感兴趣</h4>
	<doubanTVinterst></doubanTVinterst>
  </div>
	</div>		
  
  
</div>
</template>

<script>
	import $ from "jquery";
	import todaymovies from "./todaymovies.vue";
	import doubantop from "./diubantop.vue";
	import doubaninterst from "./doubaninterst.vue";
	import todayTV from "./todayTV.vue";
	import doubanTVinterst from "./doubanTVintrest.vue";
	import searchbox from "./searchboutton.vue";
	//require("./css/index.css")

	export default {
	  data () {
	    return {
	      activeTab: 'tab1'
	    }
	  },
	  methods: {
	    handleTabChange (val) {
	      this.activeTab = val
	    },
	    handleActive () {
	      window.alert('tab active')
	    },
	    fixedTab(bool,el){
            let $willingFilter =  $(el.nextSibling.nextSibling).children('.hotBackground');
            
            if(bool){
                el.style.position="fixed";
                el.style.top="30px";
                if ($willingFilter.length>0) {
                    $willingFilter.css({
                        position: 'fixed',
                        top: '60px'
                    });
                        el.nextSibling.nextSibling.style.marginTop="70px";
                }else{try{el.nextSibling.nextSibling.style.marginTop="70px"}catch(e){}}

            }
        }
	  },
	  components:{
	  	todaymovies,
	  	doubantop,
	  	doubaninterst,
	  	todayTV,
	  	searchbox,
	  	doubanTVinterst
	  },
	  mounted(){
	  	var willingReg=/^\/hot\/willing(?:\/(?=$))?$/i;
	      this.$route.matched.forEach(e=>{
	        if(willingReg.test(e.path)){this.activeTab='tab2'}
	      })
	  },
	  directives:{
        scroll:{
            bind(el,binding){
                let ox=0;
                let i=0;
                window.onscroll=()=>{
                    if(i===0){
                        ox = el.offsetTop;
                        ++i;
                    }
                    binding.value(window.scrollY+30>=ox,el);
                }
            }
        }
    }

	}
</script>
<style scoped>
	body,div,h4,span{margin:0;padding:0;}
	.top{width:100%;margin-top: 10px;padding-left:10px;padding-right:10px;}
	/*.top h4{float:left;}*/
	.top span{float:right;display:block;color:#ddd;}
	.top span a{color:#ddd;}
	.tops{margin:10px 0;}

	h3{
		/*margin-left: 5px;*/
		width:80px;
	}
	/*span .mu-tab-link-highlight {
	    background-color: #333 !important;
	}*/
	.clear{display: block;width:100%;height:34px;}
	.bread{
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
		overflow: hidden;
		margin-top:20px;
		padding:10px;
		text-align: left;
	}
	.jiange{font-size: 26px;margin-left: 50px;}
	.bread img{margin-top:6px;}
	.bread .light{color:#ddd;font-size:12px;}
	.left{float:left;}
	.right{float:right;}
	.ert{margin-top:30px;}
	.mu-tabs{
		background-color: #fff;
	    height: 30px;
	    border-bottom: 1px solid #eee;
	 
	}
	.mu-tab-active {
    color: #333 !important;
	}
	.mu-tab-link {
    color: #ccc;
}
	
</style>