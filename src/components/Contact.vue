<script>
  import MainBanner from './site-sections/MainBanner.vue'
  import ContactSection from './site-sections/ContactSection.vue'

  export default {
    name: "Contact",

    components: {
      MainBanner,
      ContactSection
    }
  }
</script>

<template>
  <div>

    <main-banner title="Contact Us" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg"></main-banner>

    <div class="contact-intro-section-wrapper page-section">
      <div class="row">
        <div class="small-12 large-6 columns">
          <h2>Get Your Free</h2>
          <h4>consultation <span>NOW!</span></h4>
        </div>
        <div class="small-12 large-6 columns">
          <p>
            At Managed IT Services, we're invested in our clients' success. If you're ready to give your company the advantage
            of a dedicated IT service, contact us today! Our experts are standing by to discuss your specific business needs.
            Some of the services we offer include IT Support, Network Support, Help Desk Services, and management of any of your
            technological needs.
          </p>
        </div>
      </div>
    </div>

    <contact-section></contact-section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9210.771792875335!2d-75.04953337411611!3d40.16520459754879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6adc27d5d4d17%3A0x31bd910caa7ab888!2s304+2nd+St+Pike%2C+Southampton%2C+PA+18966!5e0!3m2!1sen!2sus!4v1497320508179" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>

  </div>
</template>
