<script>
  import Team from './site-sections/Team.vue'
  import MainBanner from './site-sections/MainBanner.vue'
  import Cta from './site-sections/Cta.vue'

  export default {
    name: "About",

    components: {
      MainBanner,
      Team,
      Cta
    }
  }
</script>

<template>
  <main-banner title="About Us" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg"></main-banner>

  <div class="about-intro-section-wrapper page-section">
    <div class="row">
      <div class="medium-4 columns">
        <div class="full-body-img-wrapper">
          <img src="/imgs/placeholder-body.png">
        </div>
      </div>
      <div class="medium-8 columns">
        <p>
          <b>Managed IT Services</b> was established in 2008 by Jim Brennan, the company’s founder and CEO. Prior to starting the company, Mr. Brennan
          spent many years working as the Manager of the IT Department for a major company. As he continued working on computers and resolving
          software issues, many of his friends and colleagues were beginning to ask, “Have you ever thought of starting your own company? You’re
          so good at what you do.”
        </p>

        <p>
          That’s all it took for the seed of business ownership to be planted. With this surge of self-confidence, Mr. Brennan decided to strike
          out on his own. At first, Managed IT Services was only a part-time business endeavor. With the support of his employer, Jim continued
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
        <p>months, <span>Managed IT Services</sapn></p>
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
    <h2>Managed IT Services values customer loyalty.</h2>

    <p>
      Our team is dedicated to keeping business technologies safe and secure. We want to keep your system up and running while protecting
      sensitive information and enhancing the levels of customer satisfaction for your business. By providing the full range of IT services
      at affordable prices, Managed IT Services helps businesses retain their own loyal and valued customers as a result.
    </p>

    <button class="round-btn lg "> Contact Us Today!</button>
  </div>

  <team></team>

  <cta></cta>
  

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

</template>
