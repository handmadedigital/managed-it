<script>
  import MainBanner from './site-sections/MainBanner.vue'

  export default {
    name: "Contact",

    components: {
      MainBanner
    }
  }
</script>

<template>
  <main-banner title="Contact Us" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg"></main-banner>

  <div class="contact-intro-section-wrapper page-section">
    <div class="row">
      <div class="medium-6 columns">
        <h2>Get Your Free</h2>
        <h4>consultation <span>NOW!</span></h4>
      </div>
      <div class="medium-6 columns">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
    </div>
  </div>

  <div class="contact-section-wrapper light page-section">
    <div class="row">
      <div class="medium-12 columns">
        <h3>Contact Us</h3>
      </div>
      <div class="medium-6 columns">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        <div class="contact-info">


        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-envelope fa-stack-1x"></i>
        </span>

        <span>conatc@managedservicesit.com</span>
        <br/>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-phone fa-stack-1x"></i>
        </span>
        <span>(214) 000-000</span>

        </div>
      </div>
      <div class="medium-6 columns">
        <form>
          <div class="medium-6 columns">
            <input type="text" placeholder="name">
          </div>
          <div class="medium-6 columns">
            <input type="email" placeholder="email">
          </div>
          <div class="medium-12 columns">
            <input type="text" placeholder="subject">
          </div>
          <div class="medium-12 columns">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button class="round-btn lg orange">Contact Us</button>
        </form>
      </div>
    </div>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.738865839061!2d-75.0471402846116!3d40.17036747939446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6adc4151b4e9f%3A0xf57d65d447907ae2!2s524+2nd+St+Pike%2C+Southampton%2C+PA+18966!5e0!3m2!1sen!2sus!4v1461166665620" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>

</template>
