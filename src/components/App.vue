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
        <div class="medium-12 large-3 columns">
          <div class="footer-logo-wrapper">
            <img src="/imgs/logo.svg" />
          </div>
        </div>
        <div class="medium-12 large-3 columns">
          <h5>Managed Services IT</h5>
          <p>
          304 E Pennsylvania Blvd  <br/> Second Floor  <br/>
          Feasterville PA 19053
          </p>
          <p>
            Phone: <a href="tel:2153553997">+1 (215) 355-3997</a></br>

            E-mail: <a href="mailto:support@managedservicesit.com">support@managedservicesit.com</a>
          </p>
        </div>
        <div class="medium-12 large-3 columns">
          <h5>Site Map</h5>
          <ul>
            <a v-link="'/'"><li>
              Home
            </li></a>
            <a v-link="'/about'"><li>
              About Us
            </li></a>
            <a v-link="'/services/managedItServices'"><li>
              Services
            </li></a>
            <a v-link="'/contact'"><li>
              Contact Us
            </li></a>
            <a v-link="'/helpDesk'"><li>
              Help Dsk
            </li></a>
          </ul>
        </div>
        <div class="medium-12 large-3 columns">
          <h5>Get In Touch</h5>
          <p>Click on the social media icons below and stay connected with us across the web and throughout your day.</p>
          <div class="social-icons">
            <i class="fa fa-twitter fa-2x"></i>
            <i class="fa fa-facebook fa-2x"></i>
            <i class="fa fa-instagram fa-2x"></i>
          </div>
          <button v-link="'/contact'" class="round-btn lg orange">Get in Touch</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Designed by <a href="http://www.handmade-digital.com/">Handmade Digital</a> ©2014  All rights reserved.</p>
    </div>
  </footer>

</template>
