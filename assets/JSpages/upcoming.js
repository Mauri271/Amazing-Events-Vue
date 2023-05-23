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
      const upcomingEvents = data.events.filter(event => event.date > currentDate)
      this.arrayEvents = upcomingEvents
      console.log(this.arrayEvents)
      
      
      
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












// let article = document.getElementById("cardsArticle");
// const searchBar = document.getElementById("searchBar");
// const checkboxes = document.getElementById("form");


// //Task4

// let dataFromJson;

// fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
// .then(data => data.json())
// .then (response => {
//   dataFromJson = response
//   console.log(dataFromJson)

//   //-----categories new array --------------
// const categories = dataFromJson.events
// .map((event) => event.category)
// .filter((category, index, array) => array.indexOf(category) == index);


//     ///-----checkbox printer----
// const reduceFunction = (acumulador, actualElement) => {
//   return (acumulador += `        <label>
//   <input type="checkbox" id="" value="${actualElement}"> ${actualElement}
// </label>`);
// };

// const reducedCheckboxes = categories.reduce(reduceFunction, ``);

// checkboxes.innerHTML = reducedCheckboxes;

// //cardprinter
//   cardPrinter(dataFromJson.events, article)
  


// //-------checkboxlistener and categorie array------
// checkboxes.addEventListener(`change`, () => {
//   doubleFilter();
  
// });
// })
// .catch(err => console.log(err))



// function cardCreator(card) {
//   return `<div class="card">
// <img src=${card.image} class="card-img-top" alt="foodFair">
// <div class="card-body d-flex flex-column align-center">
//   <h5 class="card-title">${card.name}</h5>
//   <p class="card-text">${card.description}</p>
//   <p>Price: $${card.price}</p>
//   <p>Place: ${card.place}</p>
//   <a href="../pages/details.html?id=${card._id}" class="btn btn-primary bg-dark">See more</a>
// </div>
// </div>`;
// }


//   function cardPrinter(list, where) {
//       let template = ""
      
//       for(let element of list){
//           if(element.date > dataFromJson.currentDate){
//               template += cardCreator(element)
//           }
          
//       }
//       where.innerHTML = template
//   }
// //-----------------------------------------------------------------------------------------

// // codigo task3

// //------manejo de DOM-----

// //-------search bar listener-------
// searchBar.addEventListener(`input`, () => {
//   doubleFilter();
// });

// //------ function search bar filter-------
// function filteredByTitle(events) {
//   return events.filter(
//     (event) =>
//       event.name.toLowerCase().includes(searchBar.value.toLowerCase()) ||
//       event.category.toLowerCase().includes(searchBar.value.toLowerCase())
//   );
// }





// ///----function to filter cards by category

// function filterCardsByCategory(events, categories) {
//   if (categories.length == 0) {
//     return events;
//   }
//   return events.filter((event) => categories.includes(event.category));
// }

// //----------crossed filter-------------

// function doubleFilter() {
//   const checkedCheckbox = Array.from(
//     document.querySelectorAll(`input[type="checkbox"]:checked`)
//   ).map((element) => element.value);
//   let inputFunction = filteredByTitle(dataFromJson.events, searchBar.value);
//   let checkFunction = filterCardsByCategory(inputFunction, checkedCheckbox);
//   cardPrinter(checkFunction, article);
// }


