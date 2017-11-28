<script>
  import ServicesBanner from './site-sections/ServicesBanner.vue'
  import Cta from './site-sections/Cta.vue'
  import ServicesService from '../services/services'

  export default {
    name: "Services",

    components: {
      ServicesBanner,
      Cta
    },

    data: function(){
      return {
        service: {},
        userInfo: {
          name: "",
          email: "",
          phone: "",
          message: ""
        },
        formSent: false,
        routeName: ''
      }
    },

    route: {

      data: function (transition) {
        this.routeName = '';
        this.service = {};
        this.routeName = this.$route.params.service;

        if (this.routeName) {
          var service  = ServicesService.getService(this.routeName).service;
          this.$set('service', service);
        }
      }

    },

    ready: function() {
      this.routeName = this.$route.params.service;

      if (this.routeName) {
        var service  = ServicesService.getService(this.routeName).service;
  		  this.$set('service', service);
      }

    },

    methods: {
      closeBox: function() {
        this.formSent = false;
      },
      submitForm: function() {
        var self = this;

        console.log('its working so far');

        if (self.userInfo.name !== "" && self.userInfo.email !== "") {
          console.log('validation complete baby');
          $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
            data: {
              'key': 'radcr14sxCvYo77l1dMS5A',
              "template_name": "managed-it-web-contact-form",
               "template_content": [
                   {
                       "name": "name",
                       "content": self.userInfo.name
                   },
                   {
                       "name": "email",
                       "content": self.userInfo.email
                   },
                   {
                       "name": "phone",
                       "content": self.userInfo.phone
                   },
                   {
                       "name": "message",
                       "content": self.userInfo.message
                   }
               ],
              'message': {
                'from_email': self.userInfo.email,
                'to': [
                  {
                    'email': 'support@managedservicesit.com ', // get email from form
                    'name': 'Jim Brennan', // get name from form
                    'type': 'to'
                  },
                  {
                    'email': 'bob@handmade-digital.com', // get email from form
                    'name': 'Bob', // get name from form
                    'type': 'bcc'
                  },
                  {
                    'email': 'carlos@handmade-digital.com', // get email from form
                    'name': 'carlos', // get name from form
                    'type': 'bcc'
                  }
                ],
                "global_merge_vars": [
                  {
                    "name": "var1",
                    "content": "Global Value 1"
                  }
                ],
                "merge_vars": [
                    {
                      "vars": [
                        {
                          "name": "name",
                          "content": self.userInfo.name
                        },
                         {
                          "name": "email",
                          "content": self.userInfo.email
                        },
                         {
                          "name": "phone",
                          "content": self.userInfo.phone
                        },
                         {
                          "name": "message",
                          "content": self.userInfo.message
                        }
                      ]
                    }
                  ],
                  "preserve_recipients": false,
                  //"bcc_address": "carlos@handmade-digital.com",
                  "autotext": "true"
              }
            }
          }).done(function(response) {
            console.log('sent');
            self.formSent = true;
            self.userInfo.name = "";
            self.userInfo.email = "";
            self.userInfo.phone = "";
            self.userInfo.message = "";
            var image = new Image(1, 1);
            var google_conversion_id = 882200258;
            var google_conversion_language = "en";
            var google_conversion_format = "3";
            var google_conversion_color = "ffffff";
            var google_conversion_label = "KPkzCJuWtmYQwp3VpAM";
            var google_remarketing_only = false;
            image.src = "https://www.googleadservices.com/pagead/conversion/" + google_conversion_id + "/?label=" + google_conversion_label + "&script=0";
              });

        } else {
          console.log(self);
          var nameInput = document.getElementById('name-input');
          var emailInput = document.getElementById('email-input');

          if (self.userInfo.name === "") {
            console.log(nameInput);
            nameInput.style.border = "solid 2px red";
          }

          if (self.userInfo.email === "") {
            emailInput.style.border = "solid 2px red";
          }
        }


      }
    }
  }
</script>

<template v-for="service" class="animated" transition="slide">
<div >
  <services-banner title="Services" mainBg="/imgs/main-banner-img.jpg" mobileBg="/imgs/main-banner-img-mobile.jpg"></services-banner>
  <div v-if="service.title" class="service-intro-section-wrapper">
    <div class="service-intro-section">
      <div class="service-info-box">

        <h1>{{service.title | firstWord}} <span>{{service.title | lastWords}}</span></h1>
        <p>
          {{{service.mainDescription}}}
        </p>
        <div class="clearfix"></div>
      </div>

      <div class="company-info-box">
        <h3><b>Get  your FREE</b> consultation <span>Today!</span>
        </h3>
        <form  action="https://managedservicesit.us16.list-manage.com/subscribe/post?u=a43632a9019cf808329db35c7&amp;id=d8032fde44" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div v-if="formSent" class="success-message">
            Thank you, your submission was sent succesfully.
            <span v-on:click="closeBox" class="close-box">X</span>
          </div>
          <div class="medium-6 columns">
            <input placeholder="First Name" type="text" name="FNAME" id="mce-FNAME" >
          </div>
          <div class="medium-6 columns">
            <input placeholder="Last Name" type="text" name="LNAME" id="mce-LNAME" >
          </div>
          <div class="medium-12 columns">
            <input placeholder="Email" type="email" name="EMAIL" class="required email" id="mce-EMAIL">
          </div>
          <div class="phonefield phonefield-us">
            <div class="medium-4 columns">
                  <span class="phonearea"><input class="phonepart required" pattern="[0-9]*" id="mce-MMERGE3-area" name="MMERGE3[area]" maxlength="3" size="3" value="" type="text" placeholder="(XXX)"></span>
            </div>
            <div class="medium-4 columns">
                  <span class="phonedetail1"><input class="phonepart required" pattern="[0-9]*" id="mce-MMERGE3-detail1" name="MMERGE3[detail1]" maxlength="3" size="3" value="" type="text" placeholder="(XXX)"></span>
            </div>
            <div class="medium-4 columns">
                  <span class="phonedetail2"><input class="phonepart required" pattern="[0-9]*" id="mce-MMERGE3-detail2" name="MMERGE3[detail2]" maxlength="4" size="4" value="" type="text" placeholder="(XXXX)"></span>
            </div>
          </div>
          <div class="medium-12 columns">
            <textarea name="MMERGE4" id="mce-MMERGE4" placeholder="Reason for Contacting MSIT"></textarea>
          </div>
          <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
          </div>

          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a43632a9019cf808329db35c7_d8032fde44" tabindex="-1" value=""></div>
          <button type="submit" class="round-btn lg orange" id="mc-embedded-subscribe">Contact Us</button>

        </form>

        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[4]='MMERGE4';ftypes[4]='text';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='MMERGE3';ftypes[3]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
  <div class="traditional-tasks-wrapper page-section light">
    {{{service.imgSection}}}
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
  <div class="parallax-section-banner">
    {{{service.parallaxSection}}}
    <div class="clearfix"></div>
  </div>
  <cta></cta>
</div>
</template>
