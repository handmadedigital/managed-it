import scss from './app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'

// Install plugins
Vue.use(Router);
Vue.use(Resource);

// Set up a new router
var router = new Router({
});

Vue.filter('firstWord', function (value) {

  var res = value.substring(0, value.indexOf(' '));

  return res;

});

Vue.filter('serviceUrl', function (value) {

  var lastWords = value.substring(value.indexOf(' ') + 1);

  lastWords = lastWords.substring().replace(/ /g, '');

  var firstWord = value.substring(0, value.indexOf(' '));

  firstWord = firstWord.toLowerCase();

  var res = firstWord + lastWords;

  return res;

});

Vue.filter('lastWords', function (value) {

  var res = value.substring(value.indexOf(' ') + 1);

  return res;

});

// Route config
router.map({
  '/':{
    name: 'home',
    component: Home
  },
  '/about':{
    name: 'about',
    component: About
  },
  '/services/:service':{
    name: 'services',
    component: Services
  },
  '/contact':{
    name: 'contact',
    component: Contact
  }


})

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/home'
})

// Start up our app
router.start(App, '#app')
