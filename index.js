// const names = ["Guadalupe", "Ollie", "Aki"];
// const event = ["surprise"]
function writeCards(namesArray, event) {
    let thankYouMessages = []
  for (let i = 0; i < namesArray.length; i++) {
    thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }

  return thankYouMessages;
}

let number = 10
function countDown(number) {
    let i = 0
    while (i <= number) {
        console.log(number--)
        
    }
    return number
}
countDown(number)