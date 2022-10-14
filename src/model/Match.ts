export default class Match {
  local: string
  visit: string

  constructor(l: string, v: string) {
    this.local = l.toLowerCase()
    this.visit = v.toLowerCase()
  }

  // Probably testing purposes
  // toString() {
  //   return `${this.local} vs. ${this.visit}`
  // }
}