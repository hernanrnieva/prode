import 'mocha'
import { expect } from 'chai'
import Match from '../../../src/model/Match'

describe("Match", () => {
  describe("creation", () => {
    const m = new Match('local', 'visit')
    const mC = new Match('LoCaL', 'Visit')

    it("should have the correct local team", () => {
      expect(m.local).to.equal('local')
    })

    it("should have the correct local team with case insensitiveness", () => {
      expect(mC.local).to.equal('local')
    })

    it("should have the correct visit team", () => {
      expect(m.visit).to.equal('visit')
    })

    it("should have the correct visit team with case insensitiveness", () => {
      expect(mC.local).to.equal('local')
    })
  })
})
