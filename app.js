const App = {
  data() {
    return {
      counter: 5,
    };
  },
};

const app = Vue.createApp(App);

app.mount('#app');
