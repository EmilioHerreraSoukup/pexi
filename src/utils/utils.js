export const shuffle = (array) => {
  const newArray = array;
  let currentIndex = newArray.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return array;
};

export const getRandomColor = () => {
  const colors = ['40F99B', 'ff88dc', 'bdadea', '42e6ff', 'faff7f'];

  const randomIndex = Math.floor(Math.random() * 5);

  return `#${colors[randomIndex]}`;
};
