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

    

    fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(res => res.json())
    .then(data =>{
      
      //nuevo array desde data.events
      this.arrayEvents = data.events
      
      
      const categories =  Array.from ( new Set ( this.arrayEvents.map (( event) => event.category)))
      this.arrayCategories = categories

      console.log(this.arrayCategories)
    })
    .catch(err => console.log(err))


  },

  computed:{
    doubleFilter(){
      let aux = this.arrayEvents.filter(event => event.name.toLowerCase().includes(this.eventoIngresadoPorUsuario.toLowerCase()))
      this.filteredEvents = aux.filter(checks=> this.eventoCheckeadoPorUsuario.includes(checks.category) || this.eventoCheckeadoPorUsuario.length == 0)

    },

  }



}).mount("#app");