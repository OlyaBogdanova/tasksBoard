export function generateId() {
  // Generate a random number and convert it to a string
  var randomNumber = Math.floor(Math.random() * 1000000).toString()

  // Get the current timestamp in milliseconds and convert it to a string
  var timestamp = Date.now().toString()

  // Concatenate the random number and timestamp
  var id = randomNumber + timestamp

  return id
}

export function getRandomPastelColor() {
  var hue = Math.floor(Math.random() * 360)
  var saturation = Math.floor(Math.random() * 30) + 70
  var lightness = Math.floor(Math.random() * 20) + 70

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
