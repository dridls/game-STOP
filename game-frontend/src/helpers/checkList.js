export const checkList = (word, wordList, selectedLetter) => {
  const isWordValid = wordList.some((listItem) =>
    listItem.toLowerCase().includes(word.toLowerCase())
  );

  if (
    word.length > 0 &&
    selectedLetter.toLowerCase() === word[0].toLowerCase() &&
    isWordValid
  ) {
    return 10;
  }
  return 0;
};
