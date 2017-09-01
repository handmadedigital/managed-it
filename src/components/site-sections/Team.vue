<script>
  export default {
    name: "Team",

    props: ['link'],

    data: function() {
      return {
        routeName: ''
      }
    },

    ready: function() {
      this.routeName = this.$route.name;
    }
  }
</script>

<template>
  <div class="about-section-wrapper page-section light">
    <div class="row">
      <div class="small-10 small-offset-1   medium-10 medium-offset-1   columns">
        <div class="section-title">
          <div class="title-lines"></div>
          <div class="title-lines"></div>
          <h1>Support Team</h1>
          <div class="title-lines"></div>
          <div class="title-lines"></div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="small-12 medium-12 columns">
        <div class="team-photos-wrapper">
          <div class="team-member-box">
            <img src="/imgs/team-member-1.jpg">
            <h5>Jim Brennan</h5>
            <em>President</em>
            <div class="under-line"></div>
          </div>
          <div class="team-member-box">
            <img src="/imgs/team-member-1.jpg">
            <h5>Brian Jeschonek</h5>
            <em>Senior IT Technician</em>
            <div class="under-line"></div>
          </div>
          <div class="team-member-box">
            <img src="/imgs/team-member-1.jpg">
            <h5>Justin Hornung</h5>
            <em>IT Technician</em>
            <div class="under-line"></div>
          </div>
          <div class="team-member-box">
            <img src="/imgs/team-member-1.jpg">
            <h5>Mike Maguire</h5>
            <em>IT Technician</em>
            <div class="under-line"></div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="center">
          <button v-if="routeName !== 'about'" v-link="'/about'" class="round-btn lg orange">Get To Know Us!</button>
          <button v-if="routeName == 'about'" v-link="'/contact'" class="round-btn lg orange">Get To Know Us!</button>
        </div>
      </div>
    </div>
  </div>
</template>
