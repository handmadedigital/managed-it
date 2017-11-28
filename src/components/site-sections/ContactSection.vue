<script>
    export default {
        name: "ContactSection",

        data: function() {
            return {
                userInfo: {
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                },
                formSent: false
            }
        },

        ready: function() {

            var nameInput = document.getElementById('name-input');
            var emailInput = document.getElementById('email-input');
            nameInput.onfocus = function() {
                nameInput.style.border = "1px solid #cacaca";
            };

            emailInput.onfocus = function() {
                nameInput.style.border = "1px solid #cacaca";
            };
        },

        methods: {
            closeBox: function() {
                this.formSent = false;
            },
            submitForm: function() {
                var self = this;

                if (self.userInfo.name !== "" && self.userInfo.email !== "") {
                    console.log('validation complete baby');
                    $.ajax({
                        type: 'POST',
                        url: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
                        data: {
                            'key': 'radcr14sxCvYo77l1dMS5A',
                            "template_name": "managed-it-web-contact-form",
                            "template_content": [{
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
                                'to': [{
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
                                "global_merge_vars": [{
                                    "name": "var1",
                                    "content": "Global Value 1"
                                }],
                                "merge_vars": [{
                                    "vars": [{
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
                                }],
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

<template>
  <div class="contact-section-wrapper light page-section">
    <div class="row">
      <div class="medium-12 columns">
        <h3>Contact Us</h3>
      </div>
      <div class="small-12 large-6 columns">
        <p>Our service allows your business the advantage of the same expertise available to companies with full scale,
          dedicated IT Departments. You don't miss a step and your own staff can concentrate on what they do best - running
          your company.</p>
        <p><em>We offer 24/7 Support and a guaranteed 1-hour response time. Contact us today for your free consultation!</em></p>
        <div class="contact-info">
          <p>
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-envelope fa-stack-1x"></i>
            </span>

            <span><a href="mailto:support@managedservicesit.com">support@managedservicesit.com</span>
          </p>
          <p>
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-phone fa-stack-1x"></i>
            </span>
            <span><a href="tel:2153553997">+1 (215) 355-3997</a></span>
          </p>
        </div>
      </div>
      <div  id="mc_embed_signup" class="small-12 large-6 columns">

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

<!--End mc_embed_signup-->
      </div>
    </div>
  </div>
</template>
