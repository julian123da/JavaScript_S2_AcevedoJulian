const BASE_URL = "https://www.superheroapi.com/api.php/7f07b2080b6fcedb6525374cc69a13a2/";

function getHeroId(){
  const id = document.getElementByI("heroId").value;
  if (!id || id < 1 || id > 731) {
    alert("Introduzca con ID valido entre 1 y 731.");
    return null;
  }
  return id; 
}