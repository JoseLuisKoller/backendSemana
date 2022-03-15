import fs from "fs";

export default class Archivo {
  constructor(path) {
    this.path = path;
  }

  leerArchivo = async () => {
    try {
      let content = await fs.promises.readFile(this.path, "utf-8");
      return content;
    } catch (error) {
      console.log([]);
    }
  };

  deleteFile = () => {
    fs.promises
      .unlink(this.path)
      .then(() => console.log("Borrado exitoso"))
      .catch((er) => console.log(er));
  };

  writeFile = async (data) => {
    try {
      let newId = this.readFile().then((data) => {
        return data.length() + 1;
      });
      await fs.promises.writeFile(this.path, JSON.stringify(`${newId}` + data));
    } catch (error) {
      console.log("Error =>", error);
    }
  };
}
