<template>
<div>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="hotMovie" title="热映" icon="event_seat" iconClass="lighterColor" href="#/hot"/>
    <mu-bottom-nav-item value="findMovie" href="#/findMoives" title="找片" icon="remove_red_eye" iconClass="lighterColor" />
    <mu-bottom-nav-item value="myAccount" title="我的" icon="person_outline" iconClass="lighterColor" href="#/person" />
  </mu-bottom-nav>
</mu-paper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'hotMovie'
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val
    }
  },
  mounted(){
      var hotReg=/^\/hot(?:\/(?=$))?$/i;
      var findReg=/^\/findMoives(?:\/(?=$))?$/i;
      var myReg=/^\/person(?:\/(?=$))?$/i;
      // var willingReg=/^\/hot\/willing(?:\/(?=$))?$/i;
      this.$route.matched.forEach(e=>{
        if(hotReg.test(e.path)){this.bottomNav='hotMovie'}
        if(findReg.test(e.path)){this.bottomNav='findMovie'}
        if(myReg.test(e.path)){this.bottomNav='myAccount'}
      })
    },

}
</script>

<style lang="sass">
  .lighterColor{
    color:#bbb;
  }
  .mu-bottom-item-active{
        .mu-bottom-item-icon,.mu-bottom-item-text {
          color: #333;
        }
  }
  .mu-paper{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px solid #eee;
    height: 50px;
  }
</style>
