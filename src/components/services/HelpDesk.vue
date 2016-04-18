<script>
  import ServicesBanner from '../site-sections/ServicesBanner.vue'
  import Cta from '../site-sections/Cta.vue'
  import ServicesService from '../../services/services'

  export default {
    name: "HelpDesk",

    components: {
      ServicesBanner,
      Cta
    },

    data: function(){
      return {
        service: {},
        editServiceInfo: false,
        editImgSection: false,
        editParallaxSection: false
      }
    },

    ready: function() {
      var service  = ServicesService.getService('helpDesk').service;
		  this.$set('service', service);

    },

    methods: {
      editSection: function() {
        this.editImgSection = true;
      },
      bindImgSection: function() {
        this.editImgSection = false;
        var imgSectionRaw = document.getElementById("imgSectionEdit").innerHTML;
        this.service.imgSection = imgSectionRaw;
      },
      editParallax: function() {
        this.editParallaxSection = true;
      },
      bindParallaxSection: function() {
        this.editParallaxSection = false;
        var parallaxSectionRaw = document.getElementById("parallaxSectionEdit").innerHTML;
        this.service.parallaxSection = parallaxSectionRaw;
      },
    }
  }
</script>

<template v-for="service" >

  <services-banner title="Services" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg"></services-banner>
  <div v-if="service.title" class="service-intro-section-wrapper">
    <div class="service-intro-section">
      <div v-on:dblclick="editServiceInfo = true" v-if="!editServiceInfo" class="service-info-box">

        <h1>{{service.title | firstWord}} <span>{{service.title | lastWords}}</span></h1>
        <p>
          {{service.mainDescription}}
        </p>
        <div class="clearfix"></div>
      </div>

      <div v-if="editServiceInfo" class="service-info-box">
        <input type="text" v-model="service.title">

        <textarea v-model="service.mainDescription"></textarea>

        <button v-on:click="editServiceInfo = false">Save</button>
      </div>



      <div class="company-info-box">
        <h3><b>Get  your FREE</b> consultation <span>Today!</span>
        </br> <b>Contact Us</b></h3>
        <p>
          878 Marina Dr,</br>
          Weston FL, 33327
        </p>
        <p>
          contact@managedservicesit.com </br>
          (954) 000-0000
        </p>

        <div class="subscribe-box">
          <p><b>Subscribe</b> to our newsletter</p>
          <input type="email" placeholder="Enter your email address"><button>Subscribe</button>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>

  <div v-on:dblclick="editSection" v-if="!editImgSection" class="traditional-tasks-wrapper page-section light">
    {{{service.imgSection}}}
    <div class="clearfix"></div>
  </div>

  <div v-if="editImgSection" class="traditional-tasks-wrapper page-section light">

    <div id="imgSectionEdit" contentEditable="true">
      {{{service.imgSection}}}
    </div>
    <button v-on:click="bindImgSection">Save</button>
    <div class="clearfix"></div>
  </div>

  <div class="parallax-section-banner">
  </div>
  <div class="service-bullet-points-wrapper page-section light">
    <div class="service-bullet-points">
      <ul>
        <li v-for="bulletPoint in service.bulletPoints"><i class="fa fa-check-circle-o fa-3x"></i> <p>{{bulletPoint}}</p></li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
  <div v-on:dblclick="editParallax" v-if="!editParallaxSection" class="parallax-section-banner">
    {{{service.parallaxSection}}}
    <div class="clearfix"></div>
  </div>
  <div v-if="editParallaxSection" class="parallax-section-banner">
    <div id="parallaxSectionEdit" contentEditable="true">
      {{{service.parallaxSection}}}
    </div>
    <button v-on:click="bindParallaxSection">Save</button>
    <div class="clearfix"></div>
  </div>

  <cta></cta>
</template>
