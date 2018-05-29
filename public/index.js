


function page_load(){
  $("#hearts").append(
    `<img src="./assets/images/heart.png">`
  )
  for(let i = 1; i < 4; i++){
    setTimeout(function () {
      $("#hearts").append(
        `<img src="./assets/images/heart.png">`
      )
    }, (i * 500));
  }
}


$( document ).ready(function() {
  page_load();
});