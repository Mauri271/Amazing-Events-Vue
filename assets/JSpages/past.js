const { createApp } = Vue;

const app = createApp({

  data(){
    return{
      arrayEvents:[],
      arrayCategories:[],

      eventoIngresadoPorUsuario: ``,
      eventosFiltradosPorNombre:[],
      
      eventoCheckeadoPorUsuario:[],
    }
  },

  created() {

    const url = `https://mindhub-xj03.onrender.com/api/amazing`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
      
      //nuevo array desde data.events
      const currentDate = data.currentDate
      const pastEvents = data.events.filter(event => event.date < currentDate)
      this.arrayEvents = pastEvents
      
      
      
      const categories =  Array.from ( new Set ( data.events.map (( event) => event.category)))
      this.arrayCategories = categories
    })
    .catch(err => console.log(err))

    


  },

  
  computed:{
    doubleFilter(){
      let aux = this.arrayEvents.filter(event => event.name.toLowerCase().includes(this.eventoIngresadoPorUsuario.toLowerCase()))
      this.filteredEvents = aux.filter(checks=> this.eventoCheckeadoPorUsuario.includes(checks.category) || this.eventoCheckeadoPorUsuario.length == 0)
    }
  }


}).mount("#app");