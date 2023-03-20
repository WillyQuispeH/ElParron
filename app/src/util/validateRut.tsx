const validateRut = (rut: string) => {
  if (!/^[0-9]{8}[0-9kK]{1}$/.test(rut)) return false;

  var checker = rut[8];
  var rut = "";

  for (var i = 0; i < 8; i++) {
    rut = rut + rut[i] + "";
  }

  if (checker == "K") checker = "k";

  return dv(rut) == checker;
};

const dv = (T: any) => {
  var M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;

  return S ? S - 1 : "k";
};

const formatRut = (rut: string) => {
  var actual = rut.replace(/^0+/, "");
  var rutPuntos = "";

  if (actual != "" && actual.length > 1) {
    var sinPuntos = actual.replace(/\./g, "");
    var actualLimpio = sinPuntos.replace(/-/g, "");
    var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
    var rutPuntos = "";
    var i = 0;
    var j = 1;

    for (i = inicio.length - 1; i >= 0; i--) {
      var letra = inicio.charAt(i);
      rutPuntos = letra + rutPuntos;
      if (j % 3 == 0 && j <= inicio.length - 1) {
        rutPuntos = "." + rutPuntos;
      }
      j++;
    }

    var dv = actualLimpio.substring(actualLimpio.length - 1);

    rutPuntos = rutPuntos + "-" + dv;
  }
  return rutPuntos;
};

const notFormatRut = (rut: string) => {
  var actual = rut.replace(/\./g, "");
  var newRut = actual.replace(/-/g, "");
  return newRut;
};

export { validateRut, formatRut, notFormatRut };
