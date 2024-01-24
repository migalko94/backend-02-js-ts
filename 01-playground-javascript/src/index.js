console.log("Ejercicio 1");

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

const fromCSV = (csv) => {
  const splitted = csv.split("\n");
  const [names, ...data] = splitted;
  let arrData = [...data].map((item) => item.split(",")),
    arrNames = [...names.split(",")];
  arrData = arrData.map((item) => ({ ...item }));
  return arrData.map((item) => {
    let obj = {};
    for (const key in item) {
      obj[arrNames[key]] = item[key];
    }
    return obj;
  });
};

const result1 = fromCSV(data);
console.log(result1);

console.log("Ejercicio 1 EXTRA");

const fromCSVExtra = (csv, nAttrs) => {
  const splitted = csv.split("\n");
  let [names, ...data] = splitted;

  let arrData = [...data].map((item) => item.split(",")),
    arrNames = [...names.split(",")].slice(0, nAttrs);
  arrData = arrData.map((item) => item.slice(0, nAttrs));
  arrData = arrData.map((item) => ({ ...item }));
  return arrData.map((item) => {
    let obj = {};
    for (const key in item) {
      obj[arrNames[key]] = item[key];
    }
    return obj;
  });
};
console.log(fromCSVExtra(data));
console.log(fromCSVExtra(data, 2));
console.log(fromCSVExtra(data, 3));
console.log(fromCSVExtra(data, 4));

console.log("Ejercicio 2");
const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
  let newArr = [...arr];
  const slicedPre = newArr.slice(0, index);
  const slicedPost = newArr.slice(index + 1, newArr.length);
  newArr = [...slicedPre, newElement, ...slicedPost];
  return newArr;
};

const resultEx2 = replaceAt(elements, index, newValue);
console.log(resultEx2 === elements);
console.log(resultEx2);

console.log("Ejercicio 3");

const dataEx3 = [
  {
    ranking: 6.3,
    year: 1998,
    name: "Monroe",
    gender: "Genderfluid",
    id: 1450,
    surname: "Jerde",
  },
  {
    ranking: 5.4,
    year: 1999,
    name: "Maxie",
    gender: "Bigender",
    id: 1652,
    surname: "Keebler",
  },
  {
    ranking: 8.7,
    year: 2000,
    name: "Emilee",
    gender: "Genderqueer",
    id: 4779,
    surname: "Ritchie",
  },
  {
    ranking: 6.5,
    year: 2001,
    name: "Rudy",
    gender: "Bigender",
    id: 7105,
    surname: "Gusikowski",
  },
  {
    ranking: 7.1,
    year: 1998,
    name: "Randy",
    gender: "Genderqueer",
    id: 5950,
    surname: "Lebsack",
  },
  {
    ranking: 4.9,
    year: 2000,
    name: "Esteban",
    gender: "Genderqueer",
    id: 7987,
    surname: "Fritsch",
  },
  {
    ranking: 5.3,
    year: 2001,
    name: "Leonard",
    gender: "Male",
    id: 6268,
    surname: "Frami",
  },
  {
    ranking: 8.8,
    year: 2002,
    name: "Lang",
    gender: "Polygender",
    id: 1033,
    surname: "Dietrich",
  },
  {
    ranking: 9.1,
    year: 2000,
    name: "Lettie",
    gender: "Agender",
    id: 6403,
    surname: "Gutmann",
  },
  {
    ranking: 6.0,
    year: 1998,
    name: "Shonda",
    gender: "Agender",
    id: 1324,
    surname: "Borer",
  },
  {
    ranking: 7.3,
    year: 2003,
    name: "Francene",
    gender: "Agender",
    id: 6836,
    surname: "Blanda",
  },
  {
    ranking: 6.8,
    year: 2003,
    name: "Everett",
    gender: "Polygender",
    id: 4937,
    surname: "O'Keefe",
  },
  {
    ranking: 5.3,
    year: 1998,
    name: "Bernardo",
    gender: "Agender",
    id: 8148,
    surname: "Baumbach",
  },
  {
    ranking: 9.3,
    year: 2003,
    name: "Brianna",
    gender: "Female",
    id: 7716,
    surname: "Schamberger",
  },
  {
    ranking: 9.7,
    year: 1998,
    name: "Douglass",
    gender: "Male",
    id: 4152,
    surname: "Hilpert",
  },
  {
    ranking: 4.8,
    year: 1998,
    name: "Angel",
    gender: "Female",
    id: 355,
    surname: "O'Hara",
  },
  {
    ranking: 5.7,
    year: 2000,
    name: "Hugh",
    gender: "Male",
    id: 9600,
    surname: "Hilll",
  },
  {
    ranking: 8.5,
    year: 1999,
    name: "Graciela",
    gender: "Agender",
    id: 871,
    surname: "Kerluke",
  },
  {
    ranking: 2.4,
    year: 2000,
    name: "Chassidy",
    gender: "Agender",
    id: 4313,
    surname: "Hegmann",
  },
  {
    ranking: 3.4,
    year: 1999,
    name: "Abdul",
    gender: "Agender",
    id: 367,
    surname: "Weimann",
  },
  {
    ranking: 7.1,
    year: 2002,
    name: "Coleen",
    gender: "Non-binary",
    id: 1428,
    surname: "Feil",
  },
  {
    ranking: 8.7,
    year: 2001,
    name: "Eleanora",
    gender: "Genderfluid",
    id: 984,
    surname: "Barton",
  },
  {
    ranking: 9.7,
    year: 2002,
    name: "Sean",
    gender: "Agender",
    id: 5689,
    surname: "Runolfsson",
  },
  {
    ranking: 4.5,
    year: 1999,
    name: "Ike",
    gender: "Female",
    id: 8445,
    surname: "Haag",
  },
  {
    ranking: 7.7,
    year: 2001,
    name: "Rachele",
    gender: "Genderqueer",
    id: 6978,
    surname: "Grady",
  },
  {
    ranking: 9.1,
    year: 2001,
    name: "Sam",
    gender: "Bigender",
    id: 1321,
    surname: "Fritsch",
  },
  {
    ranking: 9.0,
    year: 2000,
    name: "Eddy",
    gender: "Polygender",
    id: 8273,
    surname: "Kemmer",
  },
  {
    ranking: 4.6,
    year: 1999,
    name: "Jamar",
    gender: "Female",
    id: 6052,
    surname: "Grant",
  },
  {
    ranking: 9.3,
    year: 2001,
    name: "Dino",
    gender: "Genderfluid",
    id: 5671,
    surname: "Erdman",
  },
  {
    ranking: 7.6,
    year: 1999,
    name: "Ervin",
    gender: "Non-binary",
    id: 9945,
    surname: "Powlowski",
  },
];

const winnerByYear = (arr, year) => {
  const yearArr = arr.filter((el) => el.year === year),
    sortedYearArr = yearArr.sort((a, b) => b.ranking - a.ranking),
    firstThree = sortedYearArr.slice(0, 3),
    firstThreeNames = firstThree.map((el) => el.name);
  return firstThreeNames;
};

console.log(winnerByYear(dataEx3, 1998));
console.log(winnerByYear(dataEx3, 1999));
console.log(winnerByYear(dataEx3, 2000));
console.log(winnerByYear(dataEx3, 2001));
console.log(winnerByYear(dataEx3, 2002));
console.log(winnerByYear(dataEx3, 2003));
console.log(winnerByYear(dataEx3, 2004));

console.log("Ejercicio 4");
const collection = [
  {
    id: "f0b6930c-331a-43e1-80db-e6c46ed552aa",
    nationality: "Barbadians",
    language: "English",
    capital: "Belgrade",
    national_sport: "taekwondo",
    flag: "🇮🇩",
  },
  {
    id: "3e690823-fc74-4376-999a-501e5f9ae4be",
    nationality: "Congolese",
    language: "German",
    capital: "Kinshasa",
    national_sport: "wrestling",
    flag: "🇺🇾",
  },
  {
    id: "9edd87d6-2f4f-4701-8ec4-272a361dbfe9",
    nationality: "Libyans",
    language: "Tagalog",
    capital: "Jakarta",
    national_sport: "buzkashi",
    flag: "🇬🇼",
  },
  {
    id: "9873a1ed-6dc5-4034-8214-1f428c8951bd",
    nationality: "Guineans",
    language: "Hakka",
    capital: "Ankara",
    national_sport: "gymnastics",
    flag: "🇹🇷",
  },
  {
    id: "4679c4a4-4e2e-4470-a900-2445dc1f4a1e",
    nationality: "Ugandans",
    language: "German",
    capital: "Beijing",
    national_sport: "dandi biyo",
    flag: "🇮🇳",
  },
  {
    id: "4274ad62-5089-4b8e-a002-b2c1c3c74926",
    nationality: "Finns",
    language: "Swedish",
    capital: "Djibouti",
    national_sport: "bull fighting",
    flag: "🇭🇲",
  },
  {
    id: "2bb25c20-7962-47b7-82d9-d62a9493308f",
    nationality: "Poles",
    language: "Swedish",
    capital: "Beirut",
    national_sport: "cricket",
    flag: "🇰🇭",
  },
  {
    id: "9b3e09da-7484-49f3-aed0-13ccc7e77fff",
    nationality: "Guineans",
    language: "Portuguese",
    capital: "Guatemala City",
    national_sport: "cricket",
    flag: "🇩🇪",
  },
  {
    id: "903fb062-647c-46f8-857f-c1eba0cbbc9b",
    nationality: "Ivoirians",
    language: "Nepali",
    capital: "Juba",
    national_sport: "cricket",
    flag: "🇫🇮",
  },
  {
    id: "21bcd231-1d8f-49f5-826a-1dc986c52f0d",
    nationality: "Hungarians",
    language: "Russian",
    capital: "Tarawa Atoll",
    national_sport: "gymnastics",
    flag: "🇲🇴",
  },
];
const normalize = (arr) => {
  return arr.reduce((acc, el) => {
    let { id, ...rest } = el;

    acc[id] = { ...rest };
    return acc;
  }, {});
};

const result = normalize(collection);
console.log(result);

console.log("Ejercicio 5");

const falsyElements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
  return Array.isArray(arg)
    ? [...arg.filter((el) => Boolean(el))]
    : typeof arg === "object" && arg !== null
    ? (() => {
        let newObj = {};
        for (const key in arg) {
          if (arg[key]) {
            newObj[key] = arg[key];
          }
        }
        return newObj;
      })()
    : arg;
};

console.log(compact(123));
console.log(compact(null));
console.log(compact([0, 1, false, 2, "", 3]));
console.log(compact({}));
console.log(
  compact({
    price: 0,
    name: "cloud",
    altitude: NaN,
    taste: undefined,
    isAlive: false,
  })
);
