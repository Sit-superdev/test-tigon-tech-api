exports.spinRandom = async () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return {
    randomNumber
  };
};
