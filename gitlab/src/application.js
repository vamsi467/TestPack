import Vue from 'vue';
import App from './components/buddy_generator_app.vue';
import './stylesheets/application.scss';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: document.querySelector('#app'),
    components: {
      App,
    },
    render: (createElement) =>
      createElement('app', {
        props: {},
      }),
  });
});
