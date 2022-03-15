import express from "express";
import Archivo from "./main";

const app = express();

app.get("/itmes", (req, res) => {
  const content = Archivo("productos.txt");
  let data = content.leerArchivo();
  res.json({ items: data, cantidad: data.length() });
});

app.get("/item-random", (req, res) => {
  const content = Archivo("productos.txt");
  let data = content.leerArchivo();
  const random = Math.round(
    Math.floor(Math.random() * (data.lenght() - 0)) + 0
  );
  res.json({ item: data[random] });
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP escudando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
