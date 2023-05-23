// let article = document.getElementById("cardsArticle");
// const searchBar = document.getElementById("searchBar");
// const checkboxes = document.getElementById("form");





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






//   //-----categories new array --------------
// const categories = dataFromJson.events
// .map((event) => event.category)
// .filter((category, index, array) => array.indexOf(category) == index);

//     ///-----checkbox printer----

// const reducedCheckboxes = categories.reduce(reduceFunction, ``);

// checkboxes.innerHTML = reducedCheckboxes;

// //cardprinter
//   cardPrinter(dataFromJson.events, article)

// //-------checkboxlistener and categorie array------
// checkboxes.addEventListener(`change`, () => {
//   doubleFilter();

// });

// function cardCreator(card) {
//   return `<div class="card">
// <img src=${card.image} class="card-img-top" alt="foodFair">
// <div class="card-body d-flex flex-column align-center">
//   <h5 class="card-title">${card.name}</h5>
//   <p class="card-text">${card.description}</p>
//   <p>Price: $${card.price}</p>
//   <p>Place: ${card.place}</p>
//   <a href="./assets/pages/details.html?id=${card._id}" class="btn btn-primary bg-dark">See more</a>
// </div>
// </div>`;
// }

// function cardPrinter(data, where) {
//   let template = "";
//   if (data.length == 0) {
//     template = `<div class="card">
    // <img src=class="card-img-top" alt="foodFair">
//     <div class="card-body d-flex flex-column align-center">
//       <h5 class="card-title">The searched event does not exist, try again!</h5>
//     </div>
//     </div>`;
//   }
//   for (let element of data) {
//     template += cardCreator(element);
//   }

//   where.innerHTML = template;
// }

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