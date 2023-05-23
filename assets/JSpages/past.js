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

// function cardPrinter(list, where) {
//   let template = ``;
//   if (dataFromJson.length == 0){
//       template = `<div class="card">
// <img src=data:image/jpeg;base64,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 class="card-img-top" alt="foodFair">
// <div class="card-body d-flex flex-column align-center">
// <h5 class="card-title">The searched event does not exist, try again!</h5>
// </div>
// </div>`
//   }
//   for(let element of list){
//       if(element.date < dataFromJson.currentDate){
//           template += cardCreator(element)
//       }
//   }
//   where.innerHTML = template
// }

// //-----------------------------------------------------------------------------------------

// // codigo task3

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


