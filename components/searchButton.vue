<template>
    <div class="hotBackground">
        <div class="topBar">
            <div class="location"><span>广州</span>
                <div class="icon-contaner">
                    <mu-icon value="expand_more" color="#aaa" />
                </div>
            </div>
            <a href="#/search">
                <div class="search">
                    <div class="button">
                        <div class="icon-contaner">
                            <mu-icon value="search" color="#aaa" :size="20" />
                        </div>电影 / 电视剧 / 影人
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<style scoped lang="sass">
.hotBackground {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 9;
}

.topBar {
    width: 95%;
    min-width: 270px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    font-size: 0.8rem;
    color: #333;
}

.location {
    float: left;
    height: 30px;
    span,
    i {
        float: left;
        height: 30px;
    }
    i {
        padding-top: 3px;
    }
}

.search {
    float: right;
    height: 24px;
    line-height: 24px;

    width: 80%;
    background-color: #eee;
    color: #aaa;
    border-radius: 3px;
    margin: 3px 0;
    .button {
        width: 60%;
        margin: 0 auto;
    }
    i {
        padding-top: 2px
    }
}

.icon-contaner {
    overflow: hidden;
    float: left;
}
</style>