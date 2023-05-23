// let dataFromJson;

// fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
//   .then((data) => {
//     console.log(data)
//     data.json()
//   } ) 
//   .then((response) => {


//     //guardar response en la variable dataFromJson
//     dataFromJson = response;
 

    
// console.log(dataFromJson)
//     //nuevo array a partir del dataFromJson
//     let arrayEvents = Array.from(dataFromJson.events);

   
//     //nueva variable que filtra solo los objetos que tienen asistencia y a través del map me devuelve solo el nombre de los eventos y el porcentaje de asistencia
    // let nameAndAssistance = arrayEvents
    //   .filter((event) => event.assistance)
    //   .map((event) => ({
    //     name: event.name,
    //     assistance: (event.assistance / event.capacity) * 100
    //   }));



    // //reduce highest assitance event---se utiliza la variable anterior(nameAndAssistance) y dentro de otra variable guardo el evento con mayor asistencia a través del reduce y el operador ternario(condición ? valorSiVerdadero : valorSiFalso)
    
    // const higherAssitanceEvent = nameAndAssistance.reduce(
    //   (actualEvent, nextEvent) => {
    //     return actualEvent.assistance > nextEvent.assistance ? actualEvent : nextEvent;
    //   });
    // highestAttendanceEvent.textContent = `${higherAssitanceEvent.name} % ${higherAssitanceEvent.assistance}`;



    // //reduce lowest assitance event--lo mismo para el menor
    // const lowestAssitanceEvent = nameAndAssistance.reduce(
    //   (actualEvent, nextEvent) => {
    //     return actualEvent.assistance < nextEvent.assistance ? actualEvent : nextEvent;
    //   });
    // lowestAttendaceEvent.textContent = `${lowestAssitanceEvent.name} % ${lowestAssitanceEvent.assistance}`;


//     //reduced capacity -----------lo mismp para el evento de mayor capacidad
//      const higherCapacityEvent = arrayEvents.reduce((actualEvent, nextEvent) =>{
//         return actualEvent.capacity > nextEvent.capacity ? actualEvent : nextEvent
//       });
//       highestCapacityEvent.textContent = `${higherCapacityEvent.name} ${higherCapacityEvent.capacity}`



//       //Upcoming Table//

// //eventos futuros filtrados a partir del date
// const upcomingEvents = dataFromJson.events.filter (event => event.date >= dataFromJson.currentDate)

// //nuevo array a partir de upcoming events con map y arrayfrom
// const upcomingCategory = Array.from ( new Set ( upcomingEvents.map (( event) => event.category)))


// //Itera el array de eventos que llega por parametro y por cada elemento a la variable totalRevenue le suma el precio del evento x la asistencia o la asistencia estimada, segun sea evento pasado o futuro --
// function calcRevenues(events) {
//   let totalRevenue = 0;
//   events.forEach((event) => {
//     totalRevenue += event.price * (event.estimate || event.assistance);
//   });
//   return totalRevenue;
// }

// //Itera el array de eventos que llega por parametro y por cada elemento le suma a la variable totalAssistance la asistencia del evento dividido la capacidad, multiplicado por 100
// function calcAssistance(events) {
//   let totalAssistance = 0;
//   events.forEach((event) => {
//     totalAssistance += ((event.assistance || event.estimate) / event.capacity) * 100;
//   });
//   return totalAssistance;
// }


// //esta funcion toma los parametros categorias y events.
// //creo el array vacio result
// //las categorias que llegan por parametro son iteradas con el .map
// //se crean 3 variables, la primera usa el parametro events para guardar las categorias, la segunda los revenues con la funcion calcRevenues, la tercera la asistencia con su respectiva función
// //en result se pushean las categorias, los revenues y la asistencia de cada tipo de evento a traves de la división de la asistencia por el largo de categoryEvents

// function upcomingEventsData(categorias, events) {

//     let result = [];

//     categorias.map((category) => {
//       let categoryEvents = events.filter((event) => category == event.category);
//       let revenues = calcRevenues(categoryEvents);
//       let assistance  = calcAssistance(categoryEvents);

//       result.push({
//         category, revenues, assistance: assistance / categoryEvents.length,
//       });
//     });
//     return result;
    
//   }

//   //guardo en una costante los valores que me arroja la función anterior pasandole como argumentos las constantes creadas al principio(linea 60)
//   const infoTableUpcomingEventsConst = upcomingEventsData (upcomingCategory, upcomingEvents); 
// console.log(infoTableUpcomingEventsConst)

//   //creo los elementos table y tablebody y los almaceno en una variable a cada uno
//   //le inserto la clase(atributo) a la tabla a través de classname
//   //le inserto el head a la tabla dinamicamente a través del innerHTMl
//   let tableTwo = document.createElement('table');
//   let tBody= document.createElement('tbody');
//   tableTwo.className = "table";
//   tableTwo.innerHTML = `<thead>
//     <tr>
//       <th colspan ="2" >Categories</th>
//       <th colspan ="2" >Revenues</th>
//       <th colspan ="2" >Percentage of attendance</th>
//     </tr>
//   </thead>`;

//   //creo un bucle foreach que recorra los datos de infoTableUpcominEventConst
//   //creo una variable(crearTr) donde voy a guardar los elementos tr que cree con createElement
//   //interpolo las variables dentro del codigo html
  
  
//   infoTableUpcomingEventsConst.forEach((events) => {
//     let crearTr = document.createElement('tr');
//     crearTr.innerHTML = `<td colspan ="2" >${events.category}</td>
//     <td colspan ="2" > $ ${events.revenues.toLocaleString()}</td>
//     <td colspan ="2" >${events.assistance.toFixed(2)} %</td>`;

//     //creo el hijo TR dentro de la variable tbody
//     tBody.appendChild(crearTr);
//   });
  

//   //Imprimir tablas
//   //agreo el tbody completo a la tabla
//   tableTwo.appendChild(tBody);


// //ya teneiendo la tabla completa(tableTwo), se la agrego al div que está en el html(tableUpcoming)
//   tableUpcoming.append (tableTwo)

// //==TABLA DE PAST==
// const pastEvents = dataFromJson.events.filter (event => event.date <= dataFromJson.currentDate)
// const pastCategory = Array.from ( new Set ( pastEvents.map (( event) => event.category)))

// function infoTablePastEvents(categorias, events) {

//     let result = [];

//     categorias.map((category) => {
//       let categoriaEvents = events.filter((event) => category == event.category);
//       let revenues = calculateRevenues(categoriaEvents);
//       let assistance = calculateAssistance(categoriaEvents);
//       result.push({
//         category,revenues,assistance: assistance / categoriaEvents.length,
//       });
//     });
  
//     return result;
//   }
  
//   function calculateRevenues(events) {
//     let totalRevenue = 0;
//     events.forEach((event) => {
//       totalRevenue += event.price * (event.estimate || event.assistance);
//     });
//     return totalRevenue;
//   }

//   function calculateAssistance(events) {
//     let totalAssistance = 0;
//     events.forEach((event) => {
//       totalAssistance += ((event.assistance || event.estimate) / event.capacity) * 100;
//     });
//     return totalAssistance;
//   }
  
  
//   const infoTablePastEventsConst = infoTablePastEvents (pastCategory, pastEvents); 

  
//   let tableThree = document.createElement('table');
//   let tBodyThree = document.createElement('tbody');
//   tableThree.className = "table";
//   tableThree.innerHTML = `
//     <tr>
//       <th colspan ="2" >Categories</th>
//       <th colspan ="2" >Revenues</th>
//       <th colspan ="2" >Percentage of attendance</th>
//     </tr>
//   </thead>`;
//   infoTablePastEventsConst.forEach((eventos) => {
//     let crearTr = document.createElement('tr');
//     crearTr.innerHTML = `<td colspan ="2" >${eventos.category}</td>
//     <td colspan ="2" > $ ${eventos.revenues.toLocaleString()}</td>
//     <td colspan ="2" >${eventos.assistance.toFixed(2)} %</td>`;
//     tBodyThree.appendChild(crearTr);
//   });
  
//   tableThree.appendChild(tBodyThree);
  

//    //Imprimir tablas
//    tablePast.append (tableThree)



//   })
//   .catch((err) => console.log(err));

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

 


