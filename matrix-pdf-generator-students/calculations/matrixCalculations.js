function reduceNumber(num) {
  while (num > 22) {
    num = num
      .toString()
      .split("")
      .reduce(function (acc, digit) {
        return acc + parseInt(digit, 10);
      }, 0);
  }

  return num;
}

function calculateMatrix(date) {
  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;

  if (!datePattern.test(date)) {
    throw new Error("Nesprávný formát data. Použijte DD.MM.RRRR, například 23.03.1992");
  }

  const parts = date.split(".").map(Number);
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
    throw new Error("Neplatné hodnoty data. Zkontrolujte den, měsíc a rok.");
  }

  const A = reduceNumber(day);
  const B = month;
  const C = reduceNumber(
    year
      .toString()
      .split("")
      .reduce(function (acc, digit) {
        return acc + parseInt(digit, 10);
      }, 0)
  );

  const D = reduceNumber(A + B + C);
  const E = reduceNumber(A + B + C + D);

  const A1 = reduceNumber(A + E);
  const B1 = reduceNumber(B + E);
  const A2 = reduceNumber(A + A1);
  const B2 = reduceNumber(B + B1);

  const C1 = reduceNumber(C + E);
  const C2 = reduceNumber(C + C1);

  const D1 = reduceNumber(D + E);
  const D2 = reduceNumber(D1 + D);

  const L = reduceNumber(D1 + C1);
  const R = reduceNumber(D1 + L);
  const M = reduceNumber(L + C1);

  const F = reduceNumber(A + B);
  const P = reduceNumber(C + B);
  const Y = reduceNumber(C + D);
  const X = reduceNumber(A + D);

  const E1 = reduceNumber(F + P + X + Y);
  const E2 = reduceNumber(E + E1);

  const F1 = reduceNumber(F + E1);
  const F2 = reduceNumber(F + F1);

  const P1 = reduceNumber(P + E1);
  const P2 = reduceNumber(P + P1);

  const Y1 = reduceNumber(Y + E1);
  const Y2 = reduceNumber(Y + Y1);

  const X1 = reduceNumber(X + E1);
  const X2 = reduceNumber(X + X1);

  const E4 = reduceNumber(B1 + E);
  const E5 = reduceNumber(A1 + E);

  const sahasrara = [A, B, reduceNumber(A + B)];
  const ajna = [A2, B2, reduceNumber(B2 + A2)];
  const vishuddha = [A1, B1, reduceNumber(A1 + B1)];
  const anahata = [E5, E4, reduceNumber(E4 + E5)];
  const manipura = [E, E, reduceNumber(E + E)];
  const svadhisthana = [C1, D1, reduceNumber(C1 + D1)];
  const muladhara = [C, D, reduceNumber(D + C)];

  const totalPhysics = reduceNumber(
    sahasrara[0] +
      ajna[0] +
      vishuddha[0] +
      anahata[0] +
      manipura[0] +
      svadhisthana[0] +
      muladhara[0]
  );

  const totalEnergy = reduceNumber(
    sahasrara[1] +
      ajna[1] +
      vishuddha[1] +
      anahata[1] +
      manipura[1] +
      svadhisthana[1] +
      muladhara[1]
  );

  const totalEmotions = reduceNumber(
    sahasrara[2] +
      ajna[2] +
      vishuddha[2] +
      anahata[2] +
      manipura[2] +
      svadhisthana[2] +
      muladhara[2]
  );

  const nebo = reduceNumber(B + D);
  const zemlya = reduceNumber(A + C);

  const NB_sum = reduceNumber(nebo + zemlya);
  const M_line = reduceNumber(F + Y);
  const Zh_line = reduceNumber(P + X);
  const MZh_sum = reduceNumber(M_line + Zh_line);
  const total = reduceNumber(NB_sum + MZh_sum);

  return {
    A,
    B,
    C,
    D,
    E,
    A1,
    A2,
    B1,
    B2,
    C1,
    C2,
    D1,
    D2,
    L,
    R,
    M,
    F,
    P,
    Y,
    X,
    E1,
    E2,
    F1,
    F2,
    P1,
    P2,
    Y1,
    Y2,
    X1,
    X2,
    E4,
    E5,

    nebo,
    zemlya,
    M_line,
    Zh_line,
    total,

    chakras: {
      sahasrara,
      ajna,
      vishuddha,
      anahata,
      manipura,
      svadhisthana,
      muladhara
    },

    totalEnergies: [totalPhysics, totalEnergy, totalEmotions],

    rodovye: [sahasrara[2], vishuddha[2], svadhisthana[2]]
  };
}

module.exports = {
  reduceNumber,
  calculateMatrix
};