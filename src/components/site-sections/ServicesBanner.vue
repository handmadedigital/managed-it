<script>

  export default {
    name: "ServicesBanner",

    props: ['title','mainbg','mobilebg'],

    data: function(){
      return {
        isMobile: false
      }
    },

    ready: function() {

      var self = this,
          windowWidth = window.innerWidth;

      if (windowWidth < 640) {

        self.isMobile = true;

      }

      window.addEventListener('resize', function(){

        if (window.innerWidth < 640) {

          self.isMobile = true;

        } else {
          self.isMobile = false;
        }
      });

      window.addEventListener('scroll', function(e){
         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
             shrinkOn = 300,
             mainBanner = document.getElementById("mainBanner"),
             mainBannerBg = document.getElementById("mainBannerBg"),
             mainBannerInfo = document.getElementById("mainBannerInfo"),
             opacity = Math.abs( (distanceY/500 - 1)/2 ),
             bgWidth = Math.abs( (distanceY/15 - 100)),
             zoom = Math.abs( (distanceY/500 - 1) );

         if (10 < distanceY < 500) {
          mainBannerBg.style.opacity = opacity;
          mainBannerBg.style.width = bgWidth + '%';
          mainBannerInfo.style.opacity =  opacity;
          mainBannerInfo.style.transform =  'scale(' + zoom + ')';

         }

         if (10 > distanceY) {
           mainBannerBg.style.opacity = 1;
           mainBannerInfo.style.opacity =  1;
           mainBannerInfo.style.transform =  'scale(1)';
         }

       });
    }
  }
</script>

<template>
  <div id="mainBanner" class="main-banner-wrapper page-section">
    <div v-if="mobilebg">
      <div v-if="!isMobile" class="main-banner-img">
        <img id="mainBannerBg" class="main-banner-bg" :src="mainbg">
      </div>
      <div v-if="isMobile" class="main-banner-img">
        <img id="mainBannerBg" class="main-banner-bg" :src="mobilebg">
      </div>
    </div>
    <div v-if="!mobilebg">
      <div class="main-banner-img">
        <img id="mainBannerBg" class="main-banner-bg" :src="mainbg">
      </div>
    </div>

    <div v-if="!mainbg">
      <div v-if="!isMobile" class="main-banner-img">
        <img id="mainBannerBg" class="main-banner-bg" src="/imgs/main-banner-img.jpg">
      </div>
      <div v-if="isMobile" class="main-banner-img">
        <img id="mainBannerBg" class="main-banner-bg" src="/imgs/main-banner-img-mobile.jpg">
      </div>
    </div>

    <div class="row">
      <div id="mainBannerInfo" >
        <div class="small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3 columns">
          <h1>{{title}}</h1>
        </div>
      </div>
    </div>

    <div class="angled-banner-bottom no-mobile">
      <img src="/imgs/services-banner-bottom-angle.png">
    </div>

    <div class="angled-banner-bottom no-desktop">
      <img src="/imgs/main-banner-bottom-angle.png">
    </div>
  </div>
</template>
