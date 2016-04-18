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

  <div class="contact-section-wrapper page-section">
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

</template>
