const listContent = document.getElementById('listContent');
const list = ['Chupon','Biberon','Sonajas','Coche','Bodys','cuna','Ropon','Toalla','Colonia','Ropa 6M','Ropon','Toalla','Colonia','Ropa 6M']

function open(){
    document.getElementById('datos').style.display="block";
    document.getElementById("message").style.display="none";
}
function funtionclose(){
    document.getElementById('datos').style.display="none";
    document.getElementById("message").style.display="block";
}


list.forEach(function(element) {
    const itemList =  document.createElement('div')
    itemList.setAttribute( "class", "card w-25 text-center box" ); //box
    itemList.setAttribute( "id", element );
    itemList.onclick = function () {
        open()
        // this.parentElement.removeChild(this);
        //document.getElementById('datos').style.display = "block";
        document.getElementById('titleElement').innerHTML  = element;
        console.log('eredado onclick')
    };

    const img = document.createElement("img");
    img.setAttribute( "src", "img/esferas.png" );
    img.setAttribute( "class", "w-50" );
    
    /*<img src="img/gokubebe.png" class="w-75 mx-auto d-block" alt="...">*/

    const itemContent = document.createElement("a");
    //itemContent.setAttribute( "href", "javascript:open()" );
    itemContent.innerHTML = element

    itemList.appendChild(img)
    itemList.appendChild(itemContent)
    console.log(itemList)
    document.getElementById("listContent").appendChild(itemList);
    console.log(listContent)
  });

 
  function GFG_Fun() {
      
    // Create a form synamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/submit.php")
    // Create an input element for emailID
    var InputName = document.createElement("input");
    InputName.setAttribute("id", "fname");
    InputName.setAttribute("class","form-control")
    InputName.setAttribute("type", "text");
    InputName.setAttribute("name", "fname");
    InputName.setAttribute("placeholder", "Ingrese su nombre")
    // Create a submit button
    var buttonSave = document.createElement("input");
    buttonSave.setAttribute("type", "submit");
    buttonSave.setAttribute("value", "Save")
    buttonSave.setAttribute("class","btn btn-danger")


    var buttonDelete = document.createElement("a");
    buttonDelete.setAttribute( "href", "#" );
    buttonDelete.innerHTML = "eliminar"
    //buttonDelete.setAttribute("type", "submit");
    //buttonDelete.setAttribute("value", "Delete")
    // Append the email_ID input to the form
    form.append(InputName); 
    // Append the button to the form
    //form.append(buttonSave);
    form.append(buttonDelete);
    document.getElementById('displayforms')
   .appendChild(form);
}

function FuntionSave() {
   const names = document.querySelector('[name="inputName"]').value;
   console.log('nombres :',names)
}