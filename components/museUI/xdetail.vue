<template>
    <transition name='detail'>
        <div class="card">
            <dtitle></dtitle>
        </div>
    </transition>
</template>
<script>
import dtitle from './detailTitle.vue'
export default {
    components: {
        dtitle
    }

}
</script>
<style scope>
.card{
    padding: 0 20px;
}
section p {
    font-size: 15px;
    color: #494949;
}

subject-mark #mark-item a {
    height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid #ffb712;
    border-radius: 3px;
    margin-right: 10px;
    color: #ffb712;
    font-size: 15px;
    text-align: center;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.photo-list {
    position: relative;
    height: 120px;
    margin-left: -18px;
}

.photo-list ul {
    word-break: keep-all;
    white-space: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    width: auto;
    position: absolute;
    left: 0;
    right: -18px;
}

.photo-list ul li {
    margin: 0;
    height: 120px;
    overflow: hidden;
    display: inline-block;
}

.photo-list ul li img {
    height: 100%;
    display: block;
}

.photo-list ul .video {
    width: 213.33333px;
    overflow: hidden;
    background-size: 100%;
}

.subject-rec .bd {
    position: relative;
    height: 160px;
    margin-left: -18px;
}

.subject-rec ul {
    word-break: keep-all;
    white-space: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    width: auto;
    position: absolute;
    left: 0;
    right: -18px;
}

.subject-rec ul li:first-child {
    margin-left: 18px;
}

.subject-rec ul li {
    width: 80px;
    overflow: hidden;
    background: #fff;
    display: inline-block;
    margin: 0 8px 8px 0;
    vertical-align: top;
}

.subject-rec img {
    width: 100%;
    height: 112px;
}

.subject-rec h3 {
    font-size: 15px;
    line-height: 18pt;
    white-space: normal;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: center;
    color: #494949;
    margin-top: 8px;
}

section h3 {
    line-height: 22px;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}

.list li:first-child {
    padding-top: 0;
}

.list li {
    position: relative;
    padding: 15px 18px 15px 0;
    word-wrap: break-word;
    overflow: hidden;
}

.list li:first-child {
    padding-top: 0;
}

.comment-list li .desc {
    font-size: 0;
    line-height: normal;
    margin: 0 0 11px;
    color: #494949;
    position: relative;
}

.list li .desc>a {
    display: inline;
}

.list a {
    display: block;
    overflow: hidden;
    text-decoration: none;
    color: #494949;
}

.comment-list li .desc img,
.comment-list li .desc .avatar {
    width: 36px;
    border-radius: 50%;
    vertical-align: text-top;
    margin-right: 10px;
    float: left;
}

.comment-list li .desc .user-info {
    margin-left: 40px;
}

.comment-list li .desc strong {
    font-size: 15px;
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}

.comment-list li .desc .date {
    margin-top: 6px;
    font-size: 12px;
    color: #aaa;
}

.comment-list li p {
    padding: 0 0 0 40px;
    line-height: 22px;
    color: #494949;
}

.detail-enter-active,
.detail-leave-active {
    transition: all 0.3s;
}

.detail-enter,
.detail-leave-to {
    transform: translate3d(100%, 0, 0)
}
</style>