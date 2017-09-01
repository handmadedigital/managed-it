<script>
  import Support from './site-sections/Support.vue'
  import Team from './site-sections/Team.vue'
  import Topics from './site-sections/Topics.vue'
  import Cta from './site-sections/Cta.vue'
  import Help from './site-sections/Help.vue'
  import Services from './site-sections/Services.vue'
  import MainBanner from './site-sections/MainBanner.vue'

  export default {
    name: "Home",

    components: {
      Cta,
      Help,
      Services,
      Support,
      Team,
      Topics,
      MainBanner
    },

    data: function(){
      return {
        topicSection: false,
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
             topicsSection = document.getElementById("topicsSection"),
             topicsSectionTop = topicsSection.offsetTop - distanceY,
             opacity = Math.abs( (distanceY/500 - 1)/2 ),
             bgWidth = Math.abs( (distanceY/15 - 100)),
             zoom = Math.abs( (distanceY/500 - 1) );

          console.log(topicsSectionTop);

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

         if (topicsSectionTop < 300) {
           if (self.topicSection == false) {
             topicsSection.className += ' slide-in ';
             self.topicSection = true;
           }
         } else if ((' ' + topicsSection.className + ' ').indexOf(' ' + 'slide-in' + ' ') > -1) {
            topicsSection.classList.remove("slide-in");
            self.topicSection = false;
         }

       });
    }
  }
</script>

<template>
  <div>
    <main-banner title="We Take Care of All  Your Technical Needs" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg">
      <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best –
      running your business. The IT Department is your most valuable asset, but it also requires enormous
      amounts of time, money, and manpower to manage effectively.</p>
      <button v-link="'/contact'" class="round-btn lg "> Contact Us Today!</button>
    </main-banner>
    <services></services>
    <support></support>
    <topics></topics>
    <help></help>
    <team></team>
    <cta></cta>
  </div>
</template>
