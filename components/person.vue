<template>
    <div>
        <mu-icon-button icon="settings" id="option" iconClass="iconColor"/>
        <mu-card style="height: 180px;line-height: 180px">
            <mu-card-header title="请登录">
                <mu-avatar src="./img/ic_account_circle_white_24dp.png" slot="avatar" style="margin: 45px 0 0" />
            </mu-card-header>
        </mu-card>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab :value="t.value" :title="t.title" v-for="t in tabs" />
        </mu-tabs>
        <div v-if="activeTab === t.value" v-for="t in tabs" class="accountBackground">
            <h2>
            	<!-- {{t.title}} -->
            </h2>
            <p>
                <!-- {{t.value}} -->
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeTab: 'tab1',
            tabs: [{
                value: "tab1",
                title: "讨论",
            }, {
                value: "tab2",
                title: "想看",
            }, {
                value: "tab3",
                title: "在看",
            }, {
                value: "tab4",
                title: "看过",
            }, {
                value: "tab5",
                title: "影评",
            }, {
                value: "tab6",
                title: "影人",
            }, ]
        }
    },
    methods: {
        handleTabChange(val) {
            this.activeTab = val
        },
    }
}
</script>
<style lang="sass">
.mu-avatar {
    background-color: rgba(0,0,0,0);
    height: 80px;
    width: 80px;
}
.mu-card{
	background-image: url(../dist/img/green.jpg);
}
.mu-card-header-title
{.mu-card-title{
	color:#fff;
}
}
#option {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9
}

.accountBackground {
    width: 100%;
    min-height: 350px;
    float: left;
    background: url(../dist/img/zzz.png) no-repeat center center;
    background-color: #fafafa;
}
.iconColor{
	color:#fff;
}
</style>