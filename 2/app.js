const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        counter2: 0,
      };
      
    },
    methods: {
      addFirst() {
        if (this.counter < 0) {
          this.counter = 0;
        } else {
          this.counter++;
        }

      },
      reduceFirst() {
        if (this.counter > 0) {
          this.counter--;
        } else {
          this.counter = 0;
        }
      },
      addSecond() {
        if (this.counter2 < 0) {
          this.counter2 = 0;
        } else {
          this.counter2++;
        }

      },
      reduceSecond() {
        if (this.counter2 > 0) {
          this.counter2--;
        } else {
          this.counter2 = 0;
        }
      },
    }
  });
  
  app.mount('#numberSection');