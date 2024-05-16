const kirim = document.querySelector(".container .kirim");
const input = document.querySelector(".container .user-input");
const komp = document.querySelector(".container .computer");
const result = document.querySelector(".container .result");
const resulty = document.querySelector(".container .resulty");

let counter = 2;
let comp = Math.round(Math.random() * 9) + 1;
console.log(comp);

function hasil(player, computer) {
  //win
  if (player == computer) {
    result.style.color = "green";
    result.innerHTML = "KLASS CAPT!! Menyala Abangkuhhh";
    resulty.innerHTML =
      "<img src='https://pontianaktoday.id/wp-content/uploads/2024/01/IMG-20240131-WA0000.jpg.webp'style='width:200px'/>";
    komp.innerHTML = computer;
    input.setAttribute("disabled", true);
    return;
  }
  //Ls

  if (counter > 0) {
    counter--;
    kirim.innerHTML = "Submit (" + (counter + 1) + ")";

    if (computer > player) {
      result.style.color = "yellow";
      result.innerHTML = "Angka komputer lebih besar abangkuhh..";
      resulty.innerHTML =
        "<img src='2wCEAAkGBxITEhUTEhMVFRUXGBgYFxgXGBgfFxgYGRcXFhYYFxYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLfsss'/>";
      return;
    } else {
      result.style.color = "yellow";
      result.innerHTML = "Angka komputer lebih kecil abangkuhh..";
      ("<img src='2wCEAAkGBxITEhUTEhMVFRUXGBgYFxgXGBgfFxgYGRcXFhYYFxYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLfsss'/>");
      return;
    }
  } else {
    kirim.innerHTML = "Submit";
    result.style.color = "red";
    result.innerHTML = "BOTT DIAM AJA DECK!!";
    komp.innerHTML = computer;
    input.setAttribute("disabled", true);
    return;
  }
}

kirim.addEventListener("click", function () {
  hasil(input.value, comp);
});
