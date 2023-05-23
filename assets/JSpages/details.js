// const detailsContainer = document.getElementById(`articleDetails`)

// const params = new URLSearchParams(location.search);

// const idParams = params.get(`id`)

// fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
// .then(data => data.json())
// .then (response => {

//   dataFromJson = response
// console.log(dataFromJson)
//   const events = dataFromJson.events.find((event => event._id == idParams))

//   document.title = `Details / ${events.name }`

//   if (events.assistance === undefined){
//     events.assistance = `Este es un evento futuro`
//   }

//   if (events.estimate === undefined){
//     events.estimate = `Este es un evento pasado`
//   }


{/* <div class="cardDetails mb-3 d-flex" style="max-width:1080px;">
<div class="row g-0  d-flex align-items-center">
  <div class="col-md-4">
    <img src="${events.image}" class="img-fluid rounded-start p-3" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body p-3">
      <h5 class="card-title">${events.name}</h5>
      <p class="card-textD">${events.description}</p>
      <p class="card-textD">Price: $${events.price}</p>
      <p class="card-textD">Date: ${events.date}</p>
      <p class="card-textD">Category:${events.category}</p>
      <p class="card-textD">Place: ${events.place}</p>
      <p class="card-textD">Capacity:${events.capacity}</p>
      <p class="card-textD">Assistance: ${events.assistance}</p>      
      <p class="card-textD">Estimate: ${(events.estimate)}</p>
      <a href="/index.html" class="btn btn-primary bg-dark">Go back Home</a>
    </div>
  </div>
</div>
</div> */}


// })
// .catch(err => console.log(err))

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




