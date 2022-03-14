import fs from "fs";

class Archivo {
  constructor(path) {
    this.path = path;
  }

  readFile = async () => {
    try {
      let content = await fs.promises.readFile(this.path, "utf-8");
      console.log(content);
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