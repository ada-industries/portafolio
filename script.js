const nombres = ["Emilio", "Gabriel", "Felipe"];
const lista = document.getElementById("nombres");

nombres.forEach((nombre) => {
  const item = document.createElement("li");
  item.textContent = nombre;
  lista.appendChild(item);
});
