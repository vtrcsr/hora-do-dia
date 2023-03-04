function carregar() {
  var msg = document.getElementById("msg");
  var imagem = document.getElementById("img");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `Agora são <span style="color: #1f62c9">${hora} horas</span> e <span style="color: #3a7ce3">${minuto} minutos</span>`;
  if (hora >= 0 && hora < 12) {
    imagem.src = "imgs/fotomanha.png";
    document.body.style.background =
      "linear-gradient(90deg, rgba(255,135,0,1) 10%, rgba(160,72,48,1) 62%)";
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "imgs/fototarde.png";
    document.body.style.background =
      "linear-gradient(90deg, rgba(28,134,38,1) 10%, rgba(26,97,57,1) 62%)";
  } else {
    imagem.src = "imgs/fotonoite.png";
    document.body.style.background =
      "linear-gradient(90deg, rgba(43,16,110,1) 10%, rgba(21,86,187,1) 62%)";
  }
}
