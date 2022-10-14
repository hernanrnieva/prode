import Match from "./match"

export default class Date {
  id: string
  matches: Match[]

  constructor(id: string) {
    this.id = id.toLowerCase()
    this.matches = []
  }

  addMatch(m: Match) {
    this.matches.push(m)
  }

  // Probably testing purposes
  // toString() {
  //   let string: string = `${this.id}`
  //   for(let i = 0; i < this.matches.length; i++) {
  //     string += '\n\n'
  //     const matchString: string = this.matches[i].toString()

  //     string += `Match ${i + 1}:\n${matchString}`
  //   }

  //   return string
  // }
}