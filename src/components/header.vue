<template>
  <div class="header">
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="200" height="86" src="//music.163.com/outchain/player?type=2&amp;id=464395476&amp;auto=1&amp;height=66"></iframe>
    <div class="profile">
      <div class="profile-icon">
        <a href="/"/>
      </div>
      <h1 class="profile-name"><a href="/">Xu Yawen</a></h1>
      <p class="profile-title">{{lastTime}}</p>
      <nav class="profile-nav">
        <ul>
          <router-link to="/article">diary</router-link>
          <router-link to="/topic">photos</router-link>
          <router-link to="/about">about</router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () { return {lastTime: '', meetTime: '2016-04-26'} },
  created () {
    const me = this
    setInterval(function () {
      me.lastTime = me.getDownTime()
    }, 1000)
  },
  methods: {
    getDownTime: function () {
      var dt = new Date(this.meetTime)

      var intervalMsec = Date.now() - dt // 目的时间减去现在的时间，获取两者相差的毫秒数

      var intervalSec = intervalMsec / 1000 // 转换成秒数

      var day = parseInt(intervalSec / 3600 / 24) // 天数

      var hour = parseInt((intervalSec - day * 24 * 3600) / 3600) // 小时

      var min = parseInt((intervalSec - day * 24 * 3600 - hour * 3600) / 60) // 分钟

      var second = parseInt(intervalSec - day * 24 * 3600 - hour * 3600 - min * 60) // 秒

      if (intervalMsec < 0) {
        hour = 0 - hour

        min = 0 - min
      }

      // 3.拼接字符串并返回

      var rs = day + '天' + hour + '时' + min + '分' + second + '秒'

      return rs
    }
  }
}
</script>

<style>
    .header{
        width: 270px;
        background-color: #007b8b;
        background-image: url(/images/no.jpeg);
        background-size: cover;
        height: 100%;
        position: fixed;
    }
    .profile{
         margin-left: 50px;
         border-bottom: none;
         height: auto;
         line-height: 30px;
         padding: 30px 0;
         width: 100%;
    }
    .profile-icon a{
        background-image: url(/images/logo.jpg);
        background-size: 100%, 100%;
        border-radius: 50%;
        display:block;
        height: 160px;
        margin: 15px 0 20px -10px;
        width: 160px;
    }

    .profile a {
        color: #efefef;
        text-shadow: 0 1px #666;
        transition: color .3s;
    }
    .profile-name {
        float:none;
        font-weight: 300;
        font-size: 30px;
    }
    .profile-title{
        color: #efefef;
    }
    .profile-nav {
        float: none;
        margin-top: 15px;
        margin-left: 0;
    }
    .profile-nav ul li {
        display: block;
        margin-left: 0;
        position: relative;
    }

	@media screen and (max-width: 1024px){
        .header{
            width: 210px;

        }
        .profile{
            margin-left: 30px;
        }
	}

	@media screen and (max-width: 640px){
        .header{
            background-image: none;
            position: relative;
            width: 100%;
        }
         .profile{
            margin-left: 0;
            border-bottom: none;
            height: auto;
            line-height: 30px;
            padding: 20px 0;
            width: 100%;
            text-align:center;
         }
          .profile-icon a{
             height: 56px;
             left: 12px;
             margin: 0;
             position: absolute;
             top:12px;
             width: 56px;
          }
         .profile-nav {
             margin-top: 10px;
         }
         .profile-nav ul li {
             display: inline;
             margin: 0 10px;
             text-align: center;
             position: relative;
         }
	}

</style>
