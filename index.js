const RandomIGNGenerator = () => {
  const arr1 = ["red", "green", "blue", "yellow"];
  const arr2 = ["test", "random", "sample"];

  const ign1 = arr1[Math.floor(Math.random() * arr1.length)];
  const ign2 = arr2[Math.floor(Math.random() * arr2.length)];

  return ign1 + ign2;
};

export default RandomIGNGenerator;
