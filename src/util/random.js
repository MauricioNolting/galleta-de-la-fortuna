const getRandomElement = (element) => {
    let randomIndex = Math.floor(Math.random() * element.length)
    return element[randomIndex]
  } 

  export default getRandomElement