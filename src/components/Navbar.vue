<script>
  import ServicesService from '../services/services'

  export default {
    name: "Navbar",

    data: function(){
      return {
        services: [],
        isOpen: false,
        mobileNav: false,
        isFixed: false,
        currentRoute: '',
        servicesDropdown: false
      }
    },

    ready: function() {

      var self = this;

      //Here I am setting the current route variable
      this.currentRoute = this.$route.name;

      //Here we are calling the services data
      var services  = ServicesService.getAllServices('').services;
      this.$set('services', services);

      //Setting some variables for later use
      var navbar = document.getElementById("mainNavbar"),
          topbar = document.getElementById("topBar"),
          windowWidth = window.innerWidth;

      if (windowWidth < 980) {
        self.mobileNav = true;
        navbar.className += ' mobile-header';
        topbar.className += ' mobile-header';
      }

      window.addEventListener('scroll', function(e){

        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            navbar = document.getElementById("mainNavbar"),
            topbar = document.getElementById("topBar");

        if (self.mobileNav == false) {
          if (distanceY > shrinkOn) {
             if (self.isFixed == false) {
               navbar.className += ' shrink';
               topbar.className += ' shrink';
               self.isFixed = true;
             }
          } else if ((' ' + navbar.className + ' ').indexOf(' ' + 'shrink' + ' ') > -1) {
             navbar.classList.remove("shrink");
             topbar.classList.remove("shrink");
             self.isFixed = false;
          }
        } else {
          if (distanceY > shrinkOn) {
             if (self.isFixed == false) {
               self.isFixed = true;
             }
          } else if ((' ' + navbar.className + ' ').indexOf(' ' + 'shrink' + ' ') > -1) {
             self.isFixed = false;
          }
        }
       });

      window.addEventListener('resize', function(){
         if (window.innerWidth < 980) {
           if (self.mobileNav == false) {
             navbar.className += ' mobile-header';
             topbar.className += ' mobile-header';
             self.mobileNav = true;
           }
         } else if ((' ' + navbar.className + ' ').indexOf(' ' + 'mobile-header' + ' ') > -1) {
           navbar.classList.remove("mobile-header");
           topbar.classList.remove("mobile-header");
           self.mobileNav = false;
         }
      });

    },

    methods: {
      toggleMenu: function() {
        var self = this;

        if (this.isOpen == false) {
          self.isOpen = true;
        } else {
          self.isOpen = false;
        }
      },
      closeMenu: function() {
        this.isOpen = false;
        this.servicesDropdown = false;
      }
    }
  }
</script>

<template>
  <div v-if="!mobileNav" id="topBar" class="top-bar">
    <div class="top-bar-left">

      <div class="center-cta-arrow-wrapper">
        <div class="cta-arrow">
          <img src="/imgs/top-bar-arrow.png">
        </div>
      </div>

      <p>1-Hour Response Time</p>

    </div>
    <div class="top-bar-right">
      <ul class="menu">
        <li><span><i class="fa fa-phone"></i> 24/7 Support:</span> <a href="tel:2153553997">+1 (215) 355-3997</a></li>
        <li><i class="fa fa-twitter"></i></li>
        <li><i class="fa fa-facebook"></i> </li>
        <li><i class="fa fa-instagram"></i> </li>
      </ul>
    </div>
  </div>

  <div id="mainNavbar" class="main-navbar">
    <div v-if="!mobileNav ">
      <div v-if="!isFixed" class="row">
        <div class="medium-4 columns">
          <ul class="menu menu-left">
            <li><a v-link="'/about'">About Us</a></li>
            <li><i class="fa fa-angle-down"></i> Our Services
              <div class="drop-down-wrapper">
                <div class="drop-down">
                  <span v-for="service in services[0]"><a v-link="'/services/' + service.url"><p ><i class="fa fa-circle"></i> {{service.title}}</p></a></span>
                </div>
                <div class="clearfix"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="medium-4 columns">
          <div class="logo">
            <a v-link="'/'"><img src="/imgs/logo.svg" /></a>
          </div>
        </div>
        <div class="medium-4 columns">
          <ul class="menu menu-right">
            <li><a v-link="'/contact'">Contact Us</a></li>
            <li><a v-link="'/services/helpDesk'">Help Desk</a></li>
          </ul>
        </div>
      </div>

      <div v-if="isFixed" class="row">
        <div class="medium-12 columns">
          <div class="logo">
            <a v-link="'/'"><img src="/imgs/logo-dark.svg" /></a>
          </div>
          <ul class="menu menu-left">
            <li><a v-link="'/about'">About Us</a></li>
            <li><i class="fa fa-angle-down"></i> Our Services
              <div class="drop-down-wrapper">
                <div class="drop-down">
                  <span v-for="service in services[0]"><a v-link="'/services/' + service.url"><p ><i class="fa fa-circle"></i> {{service.title}}</p></a></span>
                </div>
                <div class="clearfix"></div>
              </div>
            </li>
            <li><a v-link="'/contact'">Contact Us</a></li>
            <li><a v-link="'/services/helpDesk'">Help Desk</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mobile-nav" v-if="mobileNav">
      <div class="logo">
        <img src="/imgs/logo-dark.svg" />
      </div>
      <div class="mobile-menu">
        <button @click="toggleMenu"><i class="fa fa-bars"></i></button>
        <div v-if="isOpen" class="menu-wrapper">
          <div  @click="toggleMenu" class="page-overlay">
          </div>
          <ul class="menu menu-left">
            <a v-on:click="isOpen = false" v-link="'/'"><li><i class="fa fa-home"></i> <p>Home</p></li></a>
            <a v-on:click="isOpen = false" v-link="'/about'"><li><i class="fa fa-users"></i> <p>About Us</p></li></a>
            <a v-on:click="servicesDropdown = true"><li><i class="fa fa-server"></i> <p>Our Services</p></li></a>
            <li class="services-dropdown" v-if="servicesDropdown">
              <span v-for="service in services[0]"><a v-on:click="closeMenu" v-link="'/services/' + service.url"><p ><i class="fa fa-chevron-right"></i> {{service.title}}</p></a></span>
            </li>
            <a v-on:click="isOpen = false" v-link="'/contact'"><li><i class="fa fa-phone"></i> <p>Contact Us</p></li></a>
            <a v-on:click="isOpen = false" v-link="'/services/helpDesk'"><li><i class="fa fa-info"></i> <p>Help Desk</p></li></a>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <a v-if="mobileNav" href="tel:2153553997" class="floating-call-btn">
    <i class="fa fa-phone"></i>
  </a>
</template>
