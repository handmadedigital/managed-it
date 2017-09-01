<script>
  export default {
    name: "Services"
  }
</script>

<template>
  <div class="main-services-section-wrapper page-section">
    <div class="row">
      <div class="medium-6 medium-offset-3 columns">
        <div class="section-title">
          <h1>Managed IT Services</h1>
          <p>By hiring a Managed IT Services Provider, you gain the freedom to focus on what you do best –
          running your business. The IT Department is your most valuable asset, but it also requires enormous
          amounts of time, money, and manpower to manage effectively.</p>
        </div>
      </div>
      <div class="services-wrapper">
        <div class="row">
          <div class="small-12 medium-6 large-3 column">
            <div class="service-wrapper">
              <div class="icon-wrapper">
                <div class="icon-box">
                  <i class="fa fa-group"></i>
                  <img src="/imgs/it-support.jpg">
                </div>
              </div>
              <h3>
                IT Consulting
              </h3>
              <p>By hiring professional IT consulting services you get an entire team of individual specialists with a broader range of expertise and skills sets.</p>
              <button v-link="'/services/itConsulting'"class="round-btn lg color-blue">Learn More</button>
            </div>
          </div>
          <div class="small-12 medium-6 large-3 column">
            <div class="service-wrapper">
              <div class="icon-wrapper">
                <div class="icon-box">
                  <i class="fa fa-server"></i>
                  <img src="/imgs/managed-servers-img.jpg">
                </div>
              </div>
              <h3>
                Managed Servers
              </h3>
              <p>We save you money while also keeping your information infinitely safe, secure, and easily accessible around the clock. </p>
              <button v-link="'/services/managedServer'"class="round-btn lg color-blue">Learn More</button>
            </div>
          </div>
          <div class="small-12 medium-6 large-3 column">
            <div class="service-wrapper">
              <div class="icon-wrapper">
                <div class="icon-box">
                  <i class="fa fa-globe"></i>
                  <img src="/imgs/service-icon-img-1.jpg">
                </div>
              </div>
              <h3>
                Network Support
              </h3>
              <p>By outsourcing their network support services to a reliable expert, companies gain an entire team of IT consultants, each with multiple areas of expertise. </p>
              <button v-link="'/services/networkSupport'" class="round-btn lg color-blue">Learn More</button>
            </div>
          </div>
          <div class="small-12 medium-6 large-3 column">
            <div class="service-wrapper">
              <div class="icon-wrapper">
                <div class="icon-box">
                  <i class="fa fa-wrench"></i>
                  <img src="/imgs/it-consulting.jpg">
                </div>
              </div>
              <h3>
                IT Support
              </h3>
              <p> Our IT Support Specialists, give you access to an expert team of technicians 24-hours a day and 7-days a week. </p>
              <button v-link="'/services/itSupport'"class="round-btn lg color-blue">Learn More</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
