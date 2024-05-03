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

const taskcontent = document.querySelector(".task_content");
const modalshow = document.querySelector(".task_modal_body");

const htmlcontent = ({id,title,task,description}) =>{
  return `
  <div class="col-md-6 col-lg-6 mt-3" key=${id} id=${id}>
  <div class="card task_card shadow-sm" >
  <div class="card-header d-flex justify-content-end task_card_header gap-2">
  <button type="button" class="btn btn-outline-primary mr-2 " name=${id}><i class="fa-solid fa-pencil"></i></button>
  <button type="button" class="btn btn-outline-danger mr-2" name=${id}><i class="fa-solid fa-trash"></i></button></div>
  </div>
  </div>
  `;
}
