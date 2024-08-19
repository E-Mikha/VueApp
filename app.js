const App = {
  data() {
    return {
      counter: 5,
    };
  },
};

const app = Vue.createApp(App);

console.log('App');
app.mount('#app');
