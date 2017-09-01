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
      <div class="small-12 large-6 columns">

        <form method="post" action="/managed/public/send-contact-form.php">
          <div v-if="formSent" class="success-message">
            Thank you, your submission was sent succesfully.
            <span v-on:click="closeBox" class="close-box">X</span>
          </div>
          <div class="medium-6 columns">
            <input id="name-input" type="text" name="first_name" v-model="userInfo.name" placeholder="name">
          </div>
          <div class="medium-6 columns">
            <input id="email-input" type="email" name="email" v-model="userInfo.email" placeholder="email">
          </div>
          <div class="medium-12 columns">
            <input type="tel" name="telephone" v-model="userInfo.phone" placeholder="phone">
          </div>
          <div class="medium-12 columns">
            <textarea name="comments" v-model="userInfo.message" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" class="round-btn lg orange">Contact Us</button>

        </form>
      </div>
    </div>
  </div>
</template>
