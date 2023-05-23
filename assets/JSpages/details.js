const {createApp} = Vue;

const app = createApp({

  data(){
    return{
      arrayEvents:[],
      id:null,
      event:{}
    }
  },

  created(){

    fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(res => res.json())
    .then(data =>{
      this.arrayEvents = data.events

      const params = new URLSearchParams(location.search)

      this.id = params.get(`id`)

      this.event = this.arrayEvents.find(event=>event._id == this.id)

      console.log(this.event)


    }).catch(error => console.log(error))

  }

}).mount(`#app`)




