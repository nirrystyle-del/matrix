// =========================
// PERIOD FORECAST ENGINE
// Výpočet aktuálního životního období podle data narození
// =========================

function reduceNumber(num) {
  while (num > 22) {
    num = num.toString().split('').reduce(function(acc, digit) {
      return acc + parseInt(digit, 10);
    }, 0);
  }
  return num;
}

function norm(x) {
  while (x > 22) {
    x = x.toString().split('').map(Number).reduce(function(sum, d) {
      return sum + d;
    }, 0);
  }
  return x;
}

function buildNodes(dob) {
  const parts = dob.split('.').map(Number);
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const yearSum = year.toString().split('').map(Number).reduce(function(sum, d) {
    return sum + d;
  }, 0);

  const D = norm(day);
  const M = norm(month);
  const Y = norm(yearSum);
  const S = norm(D + M + Y);

  const NW = norm(D + M);
  const NE = norm(M + Y);
  const SE = norm(Y + S);
  const SW = norm(D + S);

  return {
    W: D,
    NW: NW,
    N: M,
    NE: NE,
    E: Y,
    SE: SE,
    S: S,
    SW: SW
  };
}

function edgeSubperiods(A, B) {
  let L = [A, B];

  for (let iter = 0; iter < 3; iter++) {
    const L2 = [];

    for (let k = 0; k < L.length - 1; k++) {
      L2.push(L[k]);
      L2.push(norm(L[k] + L[k + 1]));
    }

    L2.push(L[L.length - 1]);
    L = L2;
  }

  return L.slice(0, 8);
}

function getAgeInYears(dob, atDate) {
  const parts = dob.split('.').map(Number);
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const birthDate = new Date(year, month - 1, day);

  let ageYears = atDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = atDate.getMonth() - birthDate.getMonth();
  const dayDiff = atDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    ageYears--;
  }

  const lastBirthday = new Date(
    birthDate.getFullYear() + ageYears,
    birthDate.getMonth(),
    birthDate.getDate()
  );

  const daysSinceBirthday = Math.floor((atDate - lastBirthday) / (1000 * 60 * 60 * 24));
  const fractionalYear = daysSinceBirthday / 365.25;

  return ageYears + fractionalYear;
}

function energyAtAge(nodes, ageYears) {
  const age80 = ((ageYears % 80) + 80) % 80;
  const s = Math.floor(age80 / 10);
  const t = age80 - 10 * s;

  const sectorEdges = [
    ['W', 'NW'],
    ['NW', 'N'],
    ['N', 'NE'],
    ['NE', 'E'],
    ['E', 'SE'],
    ['SE', 'S'],
    ['S', 'SW'],
    ['SW', 'W']
  ];

  const leftNode = sectorEdges[s][0];
  const rightNode = sectorEdges[s][1];
  const sequence = edgeSubperiods(nodes[leftNode], nodes[rightNode]);

  const borders = [0, 1, 2.5, 3.5, 5, 6, 7.5, 8.5, 10];

  let i = 0;

  for (let k = 0; k < borders.length - 1; k++) {
    if (t >= borders[k] && t < borders[k + 1]) {
      i = k;
      break;
    }
  }

  return sequence[i];
}

function getAgeSubperiod(ageYears) {
  const age80 = ((ageYears % 80) + 80) % 80;

  let sector;

  if (age80 >= 0 && age80 < 10) sector = 6;
  else if (age80 >= 10 && age80 < 20) sector = 7;
  else if (age80 >= 20 && age80 < 30) sector = 0;
  else if (age80 >= 30 && age80 < 40) sector = 1;
  else if (age80 >= 40 && age80 < 50) sector = 2;
  else if (age80 >= 50 && age80 < 60) sector = 3;
  else if (age80 >= 60 && age80 < 70) sector = 4;
  else sector = 5;

  const ageLabels = [20, 30, 40, 50, 60, 70, 0, 10];
  const baseAge = ageLabels[sector];
  const t = age80 - baseAge;

const subperiodRanges = [
  { start: 0, end: 1 },
  { start: 1, end: 2.5 },
  { start: 2.5, end: 3.5 },
  { start: 3.5, end: 5 },
  { start: 5, end: 6 },
  { start: 6, end: 7.5 },
  { start: 7.5, end: 8.5 },
  { start: 8.5, end: 10 }
];

  let foundRange = null;

  for (let i = 0; i < subperiodRanges.length; i++) {
    const range = subperiodRanges[i];

    if (t >= range.start && (range.end === 10 ? t <= range.end : t < range.end)) {
      foundRange = range;
      break;
    }
  }

  if (!foundRange) {
    const sectorStart = baseAge >= 80 ? baseAge - 80 : baseAge;
    const sectorEnd = sectorStart + 9;
    return sectorStart + '-' + sectorEnd + ' let';
  }

  let ageRangeStart = baseAge + foundRange.start;
  let ageRangeEnd = baseAge + foundRange.end;

  ageRangeStart = ageRangeStart >= 80 ? ageRangeStart - 80 : ageRangeStart;
  ageRangeEnd = ageRangeEnd >= 80 ? ageRangeEnd - 80 : ageRangeEnd;

  function formatAge(age) {
    if (age % 1 === 0) {
      return String(age);
    }

    return age.toFixed(1).replace('.', ',');
  }

  return formatAge(ageRangeStart) + '-' + formatAge(ageRangeEnd) + ' let';
}

function threeEnergiesAtDate(dob, atDate) {
  const targetDate = atDate || new Date();
  const nodes = buildNodes(dob);
  const ageYears = getAgeInYears(dob, targetDate);
  const age80 = ((ageYears % 80) + 80) % 80;

const currentEnergy = energyAtAge(nodes, age80);
const oppositeAge = (age80 + 40) % 80;
const oppositeEnergy = energyAtAge(nodes, oppositeAge);
const sumEnergy = norm(currentEnergy + oppositeEnergy);

const E1 = oppositeEnergy;
const E2 = sumEnergy;
const E3 = currentEnergy;

  return {
    E1: E1,
    E2: E2,
    E3: E3,
    age: Math.floor(ageYears),
    agePeriod: getAgeSubperiod(ageYears),
    nodes: nodes,
    age80: age80
  };
}

function dateForAge(dob, ageYears) {
  const parts = dob.split('.').map(Number);
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const birthDate = new Date(year, month - 1, day);
  const resultDate = new Date(birthDate.getTime() + ageYears * 365.25 * 24 * 60 * 60 * 1000);

  return resultDate;
}

function formatForecastAge(age) {
  if (age % 1 === 0) {
    return String(age);
  }

  return age.toFixed(1).replace('.', ',');
}

function formatForecastPeriodLabel(startAge, endAge) {
  return formatForecastAge(startAge) + '-' + formatForecastAge(endAge) + ' let';
}

function getForecastPeriodBoundariesAroundAge(ageYears) {
  const age80 = ((ageYears % 80) + 80) % 80;
  const decadeStart = Math.floor(age80 / 10) * 10;

  const offsets = [0, 1, 2.5, 3.5, 5, 6, 7.5, 8.5, 10];
  const periods = [];

  for (let decadeShift = -10; decadeShift <= 30; decadeShift += 10) {
    const base = decadeStart + decadeShift;

    for (let i = 0; i < offsets.length - 1; i++) {
      periods.push({
        startAge: base + offsets[i],
        endAge: base + offsets[i + 1]
      });
    }
  }

  return periods;
}

function getThreePeriodForecasts(dob, targetDate) {
  const realTargetDate = targetDate || new Date();
  const currentAge = getAgeInYears(dob, realTargetDate);
  const age80 = ((currentAge % 80) + 80) % 80;

  const periods = getForecastPeriodBoundariesAroundAge(currentAge);

  let currentIndex = periods.findIndex(function(period) {
    const start80 = ((period.startAge % 80) + 80) % 80;
    const end80 = ((period.endAge % 80) + 80) % 80;

    if (start80 < end80) {
      return age80 >= start80 && age80 < end80;
    }

    return age80 >= start80 || age80 < end80;
  });

  if (currentIndex < 0) {
    currentIndex = 0;
  }

  const selected = periods.slice(currentIndex, currentIndex + 3);

  return selected.map(function(period, index) {
    const calculationDate = index === 0
      ? realTargetDate
      : dateForAge(dob, period.startAge + 0.01);

    const data = threeEnergiesAtDate(dob, calculationDate);

    return {
      index: index,
      label: index === 0 ? 'Aktuální období' : 'Následující období ' + index,
      agePeriod: index === 0 ? data.agePeriod : formatForecastPeriodLabel(period.startAge, period.endAge),
      E1: data.E1,
      E2: data.E2,
      E3: data.E3,
      age: data.age,
      startAge: period.startAge,
      endAge: period.endAge
    };
  });
}

module.exports = {
  threeEnergiesAtDate,
  getThreePeriodForecasts
};