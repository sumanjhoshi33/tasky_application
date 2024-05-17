// console.log("hello world ");
// static way for collecting the cards information 
// const state = {
//   tasklist: [
//     {
//       title: "",
//       url: "",
//       task: "",
//       description: "",
//     },
//     {
//       title: "",
//       url: "",
//       task: "",
//       description: "",
//     },
//     {
//       title: "",
//       url: "",
//       task: "",
//       description: "",
//     }
//   ]
// };
const state = {
  taskslist : [ ]
};
const taskcontent = document.querySelector(".task_content");
const modalshow = document.querySelector(".task_modal_body");

const htmlcontent = ({id,title,task,description}) =>{
  return `
   <div class="col-md-6 col-lg-4 mt-3" key=${id} id=${id}>
    <div class="card task_card shadow-sm">
      <div class="card-header d-flex justify-content-end task_card_header gap-2 ">
        <button type="button" class="btn btn-outline-primary mr-2 " name=${id}><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-danger mr-2" name=${id}><i class="fa-solid fa-trash"></i></button>
    </div>
    
    <div class="card-body">
      ${
        url &&
        `<img scr="${url}" alt="images" class="card-img-top md-3 rounded">`
      }
      <h4 class="card-title " >${title}</h4>
    <p class = " card-text description">${description} </p>
        <div class="text-white tags d-flex flex-wrap">
          <span class="badge text-bg-primary m-1"> </span>
    </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-outline-primary float-right" data-bs-toggal="modal" data-bs-target="#showtask">opentask

      </button>
    </div>
    </div>
    </div>
  `;
}

var htmlmodalcontent = ({id,url,description,title}) => {
  var date = new date(parseInt(id));

  return `
  <div id=${id}>
  ${url && `<img scr="${url}" alt="images" class="card-img-top md-3 rounded">`}
  <strong class="text-sm text-muted">create on:${date.todatestring()}</strong>
  <h2 class="my-3">${title}</h2>
  <p class="lead">${description}</p>
  </div>`
  ;
}

var upadtaelocalstrorage = () =>{
  localStorage.setItem("task",JSON.stringify({
    tasks : state.takslist
  }))
};
 var loadinitialldata = () => {
  var localStoragecopy = JSON.parse(localStorage.tasks);
   if(localStoragecopy) state.taskslist = localStorage.tasks;
   state.taskslist.map((carddate) => {
    taskcontent.insertAdjacentHTML("beforeend",htmlcontent(carddate))
   });
};
 var handlesumbit = (event) => {
  const id = `${date.now()}`;
  const input = {
    url: document.getElementById("imageurl").value,
    title: document.getElementById("tasktitle").value,
    type: document.getElementById("tasktype").value,
    description: document.getElementById("description").value
  };
 }