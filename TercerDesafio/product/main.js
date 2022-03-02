const frase = "Paelodromo";

const mostrarLetras = (parametro, time = 1000, cb) => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < parametro.length) {
      console.log(parametro.at(i));
      i++;
    } else {
      clearInterval(timer);
      cb();
    }
  }, time);
};

const end = () => console.log("Funcion Finalizada");
setTimeout(() => {
  mostrarLetras(frase, end);
}, 0);
