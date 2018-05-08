<template>
    <div>
        <searchButton></searchButton>
        <Carousel></Carousel>
        <div style="min-width:320px">
            <mu-tabs :value="activeTab" @change="handleTabChange" v-scroll="fixedTab">
                <mu-tab value="tab1" title="正在热映" href="#/hot/hotting" />
                <mu-tab value="tab2" title="即将上映" href="#/hot/willing" />
            </mu-tabs>
            <router-view style="margin-bottom: 50px">
            </router-view>
        </div>
    </div>
</template>
<script>
import Carousel from "../Carousel.vue"
import searchButton from "../searchButton.vue"

export default {
    data() {
        return {
            activeTab: 'tab1',
            subjects: [],
        }
    },
    methods: {
        handleTabChange(val) {
            this.activeTab = val
        },
        fixedTab(bool, el) {
            let $willingFilter = $(el.nextSibling.nextSibling).children('.hotBackground');
            if (bool) {
                el.style.position = "fixed";
                el.style.top = "30px";
                if ($willingFilter.length > 0) {
                    $willingFilter.css({
                        position: 'fixed',
                        top: '60px'
                    });
                    el.nextSibling.nextSibling.style.marginTop = "70px";
                } else { el.nextSibling.nextSibling.style.marginTop = "30px"; }

            } else {
                el.style.position = "";
                el.style.top = "";
                el.nextSibling.nextSibling.style.marginTop = "";
                $willingFilter.css({
                    position: '',
                    top: ''
                });
            }
        }
    },
    mounted() {
        var willingReg = /^\/hot\/willing(?:\/(?=$))?$/i;
        this.$route.matched.forEach(e => {
            if (willingReg.test(e.path)) { this.activeTab = 'tab2' }
        })
    },
    components: { Carousel, searchButton },
    directives: {
        scroll: {
            bind(el, binding) {
                let ox = 0;
                let i = 0;
                window.onscroll = () => {
                    if (i === 0) {
                        ox = el.offsetTop;
                        ++i;
                    }
                    binding.value(window.scrollY + 30 >= ox, el);
                }
            }
        }
    }
}
</script>
<style lang="sass">
.mu-tabs {
    background-color: #fff;
    height: 30px;
    border-bottom: 1px solid #eee;
}

.mu-tab-link {
    color: #ccc;
}

.mu-tab-link-highlight {
    background-color: #333;
}

.mu-tab-active {
    color: #333;
}
</style>