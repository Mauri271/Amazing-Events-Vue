const {createApp} = Vue

const app = createApp({

data(){
  return{
    arrayEvents:[],
    arrayCategories:[],
    upcomingEvents:[],
    pastEvents:[],

    highestAttendanceEvent:[],
    lowestAttendaceEvent:[],
    largestCapacityEvent:[],

    upData:{},

    pastData:{}

  }
},

created(){
  fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
  .then(res => res.json())
  .then(data=>{

    this.arrayEvents = data.events


    const categories =  Array.from ( new Set ( this.arrayEvents.map (( event) => event.category)))
    this.arrayCategories = categories

    
    //variable con el nombre, la asistencia y la capacidad de los eventos
    this.nameAndAssistance = this.arrayEvents
    .filter((event) => event.assistance)
    .map((event) => ({
      name: event.name,
      assistance: ((event.assistance / event.capacity) * 100).toFixed(2),
      capacity: event.capacity
    }));

    //evento de mayor asitencia
    this.highestAttendanceEvent = this.nameAndAssistance.reduce(
      (actualEvent, nextEvent) => {
        return actualEvent.assistance > nextEvent.assistance ? actualEvent : nextEvent;
      });

      //evento de menor asistencia
      this.lowestAttendaceEvent = this.nameAndAssistance.reduce(
        (actualEvent, nextEvent) => {
          return actualEvent.assistance < nextEvent.assistance ? actualEvent : nextEvent;
        });

        //evento de mayor capacidad
        this.largestCapacityEvent = this.nameAndAssistance.reduce((actualEvent, nextEvent) =>{
          return actualEvent.capacity > nextEvent.capacity ? actualEvent : nextEvent
        });

        
        const currentDate = data.currentDate
        
        this.upcomingEvents = this.arrayEvents.filter(event => event.date >= currentDate)
      
        this.pastEvents = this.arrayEvents.filter(event=> event.date < currentDate)

        this.arrayCategories = Array.from(new Set(this.upcomingEvents.map(event=> event.category)))

        this.arrayCategoriesPast = Array.from(new Set(this.pastEvents.map(event=> event.category)))
    
        
        this.generateEventInfoUp()
        this.generateEventInfoPast()

  }).catch(err=> console.log(err))

  

},

methods:{
  generateEventInfoUp() {
    const eventInfo = [];
    this.arrayCategories.forEach((category) => {
      const eventsUp = this.upcomingEvents.filter((event) => event.category === category);
      let totalRevenue = 0;
      let totalAssistance = 0;

      eventsUp.forEach((event) => {
        totalRevenue += (event.estimate * event.price);
        totalAssistance += ((event.estimate / event.capacity) * 100);
      });

      const averageAssistance = totalAssistance / eventsUp.length;

      eventInfo.push({
        category: category,
        totalRevenue: totalRevenue.toLocaleString(),
        averageAssistance: averageAssistance.toFixed(1),
      });
    });

    this.upData=eventInfo

  },

  generateEventInfoPast() {
    const eventInfo = [];
    this.arrayCategoriesPast.forEach((category) => {
      const eventsUp = this.pastEvents.filter((event) => event.category === category);
      let totalRevenue = 0;
      let totalAssistance = 0;

      eventsUp.forEach((event) => {
        totalRevenue += (event.assistance * event.price);
        totalAssistance += ((event.assistance / event.capacity) * 100);
      });

      const averageAssistance = totalAssistance / eventsUp.length;

      eventInfo.push({
        category: category,
        totalRevenue: totalRevenue.toLocaleString(),
        averageAssistance: averageAssistance.toFixed(1),
      });
    });

    this.pastData=eventInfo

  }
},



}).mount(`#app`)

 


