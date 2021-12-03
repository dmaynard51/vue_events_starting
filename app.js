const app = Vue.createApp({
  data () {
    return {
      counter: 0,
      name: "",
      confirmedUserName: ""
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    confirmedInput(){
      this.confirmedUserName = this.name;
    },

    submitForm(){
      alert("submitted");
    }
  }

});

app.mount('#events')