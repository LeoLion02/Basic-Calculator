var numero;

const addNumber = (numero) => {
      document.getElementById("in").value += numero;
};

const removeNumbers = () => {
      document.getElementById("in").value = null;
};

const result = () => {
      var resultado = document.getElementById("in").value = eval(document.getElementById(
            "in").value);

      if (resultado) {
            document.getElementById("in").value = eval(resultado)
      };
}