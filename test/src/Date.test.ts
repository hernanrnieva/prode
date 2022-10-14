import 'mocha'
import { expect } from 'chai'
import Date from '../../src/model/Date'
import Match from '../../src/model/Match'

describe("Date", () => {
  const d = new Date('test')

  describe("creation", () => {
    const dC = new Date('TeSt')

    it("should have the correct id", () => {
      expect(d.id).to.equal('test')
    })

    it("should have the correct id with case insensitiveness", () => {
      expect(dC.id).to.equal('test')
    })

    it("should have no matches", () => {
      expect(d.matches.length).to.equal(0)
    })
  })

  describe("matches addition", () => {
    const m1 = new Match('local1', 'visit1')
    const m2 = new Match('local2', 'visit2')

    it("should add one match correctly", () => {
      d.addMatch(m1)

      expect(d.matches.length).to.equal(1)
      expect(d.matches[0]).to.equal(m1)
    })

    it("should add a second match correctly", () => {
      d.addMatch(m2)

      expect(d.matches.length).to.equal(2)
      expect(d.matches[1]).to.equal(m2)
    })
  })
})
