<script>
  export default {
    name: "Topics",

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

      window.addEventListener('scroll', function(e){
         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
             topicsSection = document.getElementById("topicsSection"),
             topicsSectionTop = topicsSection.offsetTop - distanceY;



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
  <div class="topics-section-wrapper page-section light">
    <div id="topicsSection" class="topics-section">
      <div class="row">
        <div v-if="isMobile" class="small-12 small-pull-12 medium-4 large-6 column">
          <div class="comp-img-3d-wrapper">
            <div class="comp-img-3d">
              <img src="/imgs/flat-laptop.png">
              <img src="/imgs/flat-lock-laptop-icon.png">
              <img src="/imgs/flat-gear-laptop-icon.png">
              <img src="/imgs/flat-cloud-laptop-icon.png">
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="small-12 small-push-12 medium-8 large-6 column">
          <ul>
            <li>
               <h3><i class="fa fa-check-square-o"></i> Network Support</h3>
              <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best  By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best.</p>
            </li>
            <li>
              <h3> <i class="fa fa-check-square-o"></i> Network Support</h3>
              <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best  By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best.</p>
            </li>
            <li>
              <h3><i class="fa fa-check-square-o"></i> Network Support</h3>
              <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best  By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best.</p>
            </li>
            <li>
              <h3><i class="fa fa-check-square-o"></i> Network Support</h3>
              <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best  By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best.</p>
            </li>
          </ul>
          <button class="round-btn lg orange">Learn More</button>
        </div>
        <div v-if="!isMobile" class="small-12 small-pull-12 medium-4 large-6 column">
          <div class="comp-img-3d-wrapper">
            <div class="comp-img-3d">
              <img src="/imgs/flat-laptop.png">
              <img src="/imgs/flat-lock-laptop-icon.png">
              <img src="/imgs/flat-gear-laptop-icon.png">
              <img src="/imgs/flat-cloud-laptop-icon.png">
              <div class="clearfix"></div>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
