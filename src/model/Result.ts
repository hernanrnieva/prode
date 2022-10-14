import Match from "./match"

const MAX_GOALS = 10
const MIN_GOALS = 0

export default class Result {
  localGoals: number
  visitGoals: number
  match: Match

  constructor(m: Match, lg: number, vg: number) {
    if(lg < MIN_GOALS || lg > MAX_GOALS || vg < MIN_GOALS || vg > MAX_GOALS || !m)
      // TODO: error handling
      throw new Error()

    this.match = m
    this.localGoals = lg
    this.visitGoals = vg
  }
}