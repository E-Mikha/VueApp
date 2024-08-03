const App = {
  data() {
    return {
      counter: 5,
    };
  },
};
console.log(app);

const app = Vue.createApp(App);

app.mount('#app');
