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
               <h3><i class="fa fa-check-square-o"></i> Managed IT Services</h3>
              <p>Instead of relying on a single employee who may or may not be with your firm for the long-term, hire an entire team of technological experts that can expand and grow along with your business needs.</p>
            </li>
            <li>
              <h3> <i class="fa fa-check-square-o"></i> Managed Workstation</h3>
              <p>Instead of assigning a single employee the responsibility of resolving the varying computer issues for their entire staff, businesses choose to hire a professional provider of Managed Workstation Services.</p>
            </li>
            <li>
              <h3><i class="fa fa-check-square-o"></i> Help Desk</h3>
              <p>As companies continue to expand, grow, and become more profitable, the need for consistent and timely Help Desk services from a team of knowledgeable professionals becomes more critical. </p>
            </li>
            <li>
              <h3><i class="fa fa-check-square-o"></i> Network Support</h3>
              <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best  By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best.</p>
            </li>
          </ul>
          <button v-link="'/contact'" class="round-btn lg orange">Learn More</button>
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
