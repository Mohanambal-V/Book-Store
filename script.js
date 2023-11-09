var poppupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".form")
var addbutton=document.getElementById("addbtn")
 addbutton.addEventListener("click",function(){
    poppupoverlay.style.display="block"
    popupbox.style.display="block"
  
 })
 var cancelpopup=document.getElementById("cancel")
 cancelpopup.addEventListener("click",function(){
    poppupoverlay.style.display="none"
    popupbox.style.display="none"
    
 })
 var container=document.querySelector(".container")
 var addbooks=document.getElementById("addbook")
 var title=document.getElementById("book-title")
 var author=document.getElementById("book-author")
 var description=document.getElementById("book-description")
 
 addbooks.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h4>${author.value}</h4>
    <p>${description.value}</p>
    <button onclick="deletes(event)">Delete</button>`
    container.append(div)
    poppupoverlay.style.display="none"
    popupbox.style.display="none"

 })
function deletes(event){
    event.target.parentElement.remove()

}
