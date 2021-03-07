export const objectsToArray = (objects) => {
  return Object.keys(objects).reduce((object, deck) => {
    return [...object, objects[deck]];
  }, []);
}

export const generateUId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}