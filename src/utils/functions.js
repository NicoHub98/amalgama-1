export const truncate = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export const findById = (array, id) => {
  const item = array.find((element) => element.id === id);
  return item.name;
};
