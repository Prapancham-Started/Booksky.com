var nav=document.getElementById("navbard")
    function change1()
    {
        nav.style.backgroundColor="red"
        nav.setAttribute("class","widthmax")
    }
    function change2()
    {
        box.style.backgroundColor="violet"
        box.setAttribute("class","widthmax")
    }
    function change3()
    {
        box.style.backgroundColor="blue"
        box.setAttribute("class","widthmax")
    }
    function change4()
    {
        box.style.backgroundColor="rgb(33, 226, 27)"
        box.setAttribute("class","widthmax")
    }
    function change5()
    {
        box.style.backgroundColor="yellow"
        box.setAttribute("class","widthmax")
    }
    function change6()
    {
        box.style.backgroundColor="aqua"
        box.setAttribute("class","widthmax")
    }

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector("#add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescinput=document.getElementById("book-desc-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
