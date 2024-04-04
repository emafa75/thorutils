let stderr = document.getElementsByClassName("stderr") 

// for (let index = 0; index < stderr.length; index++) {
//   stderr[index].style.border = "5px solid red";
//   stderr[index].style.color = "black";
//   newHTML = stderr[index].textContent;
//
//   newHTML = newHTML.replace(/\u001b\[0m/g,'</span>');
//   newHTML = newHTML.replace(/\u001b\[32m/g,'<span style="color: green;">');  
//   newHTML = newHTML.replace(/\u001b\[31m/g,'<span style="color: red;">');
//
//   stderr[index].innerHTML = newHTML;
// }

function addColor(element){
  // Add Color to an html element
  element.style.border = "5px solid red";
  element.style.color = "black";

  newHTML = element.textContent;

  newHTML = newHTML.replace(/\u001b\[0m/g, '</span>' );
  newHTML = newHTML.replace(/\u001b\[32m/g,'<span style="color: green;">');  
  newHTML = newHTML.replace(/\u001b\[31m/g,'<span style="color: red;">');

  element.innerHTML = newHTML;
  return element;
}

for (let index = 0; index < stderr.length; index++) {
  addColor(stderr[index]);
}

