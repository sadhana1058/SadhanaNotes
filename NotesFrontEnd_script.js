// import axios from 'axios';
 const getBtn =document.getElementById('readbutton');
const note_Title=document.querySelector(".TitleNotes");
const note_Descp=document.querySelector(".TitleDescp");
const note_card=document.querySelector(".card");
const note_Button=document.querySelector("#readbutton")

function myFunction() {
    var x = document.getElementById("createBlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunct() {
    var x = document.getElementById("updateBlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  // function myFun() {
  //   var x = document.getElementById("viewBlock");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }
//
// getBtn.addEventListener('click',getallNotes);
note_Button.addEventListener("click",viewNotesOneByOne);
//Functions
function viewNotesOneByOne(event){
  //Prevent form from submitting
  event.preventDefault();
  //Card CardDisplay DIV
  const view_Div = document.createElement("div");
  view_Div.classList.add("cardDisplay");
  const card_Div = document.createElement("div");
  card_Div.classList.add("card");
  view_Div.appendChild(card_Div);
  const cardb_Div = document.createElement("div");
  cardb_Div.classList.add("card-body");
  view_Div.appendChild(cardb_Div);
  //h5
  const view_h5 = document.createElement("h5");
  view_h5.classList.add("card-title");
  view_Div.appendChild(view_h5);
  //p
  const view_p = document.createElement("p");
  view_p.classList.add("card-text");
  view_Div.appendChild(view_p);
  //a and a
  const view_a = document.createElement("a");
  view_a.classList.add("card-link1");
  view_Div.appendChild(view_a);
  const view_aa = document.createElement("a");
  view_aa.classList.add("card-link2");
  view_Div.appendChild(view_aa);

      //APPEND TO div
      viewNotes.appendChild(view_Div);

      //Clear Todo-Input value
      note_Title.value = "";
      note_Descp.value = "";
}
