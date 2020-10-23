const namaHero = [
  ["Iron Man", "Mekanik"],
  ["Black Window", "Berantem"],
  ["Hawk Eye", "Panah"],
];

let e = [];

namaHero.forEach((heroNya) => {
  if (heroNya[0].includes("a")) e.push(heroNya);
});

console.table(e);
