const operacion = async (num1: number, num2: number, op: string) => {
  let operaciones = await import("./operacion.js");
  let result = 0;
  if (op == "suma") {
    result = operaciones.sumar(num1, num2);
  } else {
    result = operaciones.resta(num1, num2);
  }

  return result;
};

const ejecucion = async (num1: number, num2: number, op: string) => {
  let resultado = await operacion(num1, num2, op);
  console.log(resultado);
};

ejecucion(2, 4, "suma");

ejecucion(10, 5, "resta");
