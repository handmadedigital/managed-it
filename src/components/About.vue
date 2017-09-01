<script>
  import Team from './site-sections/Team.vue'
  import MainBanner from './site-sections/MainBanner.vue'
  import Cta from './site-sections/Cta.vue'
  import ContactSection from './site-sections/ContactSection.vue'

  export default {
    name: "About",

    components: {
      MainBanner,
      Team,
      Cta,
      ContactSection
    }
  }
</script>

<template>
  <div>
    <main-banner title="About Us" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg"></main-banner>

    <div class="about-intro-section-wrapper page-section">
      <div class="row">
        <div class="small-12 large-4 columns">
          <div class="full-body-img-wrapper">
            <img src="/imgs/placeholder-body.png">
          </div>
        </div>
        <div class="small-12 large-8 columns">
          <p>
            <b>Managed Services IT</b> was established in 2008 by Jim Brennan, the company’s founder and CEO. Prior to starting the company, Mr. Brennan
            spent many years working as the Manager of the IT Department for a major company. As he continued working on computers and resolving
            software issues, many of his friends and colleagues were beginning to ask, “Have you ever thought of starting your own company? You’re
            so good at what you do.”
          </p>

          <p>
            That’s all it took for the seed of business ownership to be planted. With this surge of self-confidence, Mr. Brennan decided to strike
            out on his own. At first, Managed Services IT was only a part-time business endeavor. With the support of his employer, Jim continued
            working in his current position during the day, but he also hired his first employee to manage the ground operations the new company.
          </p>
        </div>
      </div>
    </div>

    <div class="split-section-wrapper ">
      <div class="content-img-box">
        <div class="medium-6 columns">
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="content-text-box">
        <div class="indent-title">
          <h1>Within a few </h1>
          <p>months, <span>Managed Services IT</sapn></p>
        </div>
        <p>
          had acquired enough clients to secure its own office space, and Jim was finally able to devote 100% of his time to the newly
          launched enterprise. His previous employer was so impressed that the company became one of the first clients of the new offices
          and remains a valued customer some eight years later. With the company's success, Jim was able to employ his long time friend
          who originally suggested that Jim start his own business.
        </p>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="solid-cta-banner">
      <h2>Managed Services IT values customer loyalty.</h2>

      <p>
        Our team is dedicated to keeping business technologies safe and secure. We want to keep your system up and running while protecting
        sensitive information and enhancing the levels of customer satisfaction for your business. By providing the full range of IT services
        at affordable prices, Managed Services IT helps businesses retain their own loyal and valued customers as a result.
      </p>

      <button v-link="'/contact'" class="round-btn lg "> Contact Us Today!</button>
    </div>

    <team link="'/contact'"></team>

    <cta></cta>


    <contact-section></contact-section>
  </div>

</template>
