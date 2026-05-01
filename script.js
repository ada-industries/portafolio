const nombres = ["Emilio (super gay pero pocas veces)", "Gabriel (gei)", "Felipe (no gei pero si a veces)"];
const lista = document.getElementById("nombres");

nombres.forEach((nombre) => {
  const item = document.createElement("li");
  item.textContent = nombre;
  lista.appendChild(item);
});
