<script>
  import Navbar from './Navbar.vue'

  export default {
    name: "App",

    components: {
      Navbar
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
  <footer class="footer">
    <div class="row">
      <div class="medium-12 columns">
        <div class="medium-3 columns">
          <div class="footer-logo-wrapper">
            <img src="/imgs/logo.png" />
          </div>
        </div>
        <div class="medium-3 columns">
          <h5>Managed Services IT</h5>
          <p>
            500 S. Grand Ave. Suite 1150 </br>
            Los Angeles, CA 90071
          </p>
          <p>
            Phone: 323-331-9452</br>
            Support 323-617-5126</br>
            E-mail: contactus@samplemail.com
          </p>
        </div>
        <div class="medium-3 columns">
          <h5>Site Map</h5>
          <ul>
            <li>
              Home
            </li>
            <li>
              About Us
            </li>
            <li>
              Services
            </li>
            <li>
              Contact Us
            </li>
            <li>
              Help Dsk
            </li>
          </ul>
        </div>
        <div class="medium-3 columns">
          <h5>Get In Touch</h5>
          <p>Click on the social media icons below and stay connected with us across the web and throughout your day.</p>
          <div class="social-icons">
            <i class="fa fa-twitter fa-2x"></i>
            <i class="fa fa-facebook fa-2x"></i>
            <i class="fa fa-instagram fa-2x"></i>
          </div>
          <button class="round-btn lg orange">Get in Touch</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Designed by <a href="http://www.handmade-digital.com/">Handmade Digital</a> ©2014  All rights reserved.</p>
    </div>
  </footer>

</template>
