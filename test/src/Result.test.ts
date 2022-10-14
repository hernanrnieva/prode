import 'mocha'
import { expect } from 'chai'
import Match from '../../src/model/Match'
import Result from '../../src/model/Result'

describe("Result", () => {
  const m = new Match('local', 'visit')

  describe("creation", () => {
    const r = new Result(m, 3, 1)

    it("should have the correct local goals", () => {
      expect(r.localGoals).to.equal(3)
    })

    it("should have the correct visit goals", () => {
      expect(r.visitGoals).to.equal(1)
    })

    it("should allow zero goals", () => {
      const tiedResult = function() { new Result(m, 0, 0) }
      const localZeroGoals = function() { new Result(m, 0, 3) }
      const visitZeroGoals = function() { new Result(m, 1, 0) }

      expect(tiedResult).to.not.throw(Error)
      expect(localZeroGoals).to.not.throw(Error)
      expect(visitZeroGoals).to.not.throw(Error)
    })

    it("should allow up to ten goals per team", () => {
      const localTenGoals = function() { new Result(m, 10, 2) }
      const visitTenGoals = function() { new Result(m, 4, 10) }

      expect(localTenGoals).to.not.throw(Error)
      expect(visitTenGoals).to.not.throw(Error)
    })

    it("shouldn't create results with negative goals", () => {
      const localNegativeGolas = function() { new Result(m, -3, 1) }
      const visitNegativeGolas = function() { new Result(m, 3, -1) }

      expect(localNegativeGolas).to.throw(Error)
      expect(visitNegativeGolas).to.throw(Error)
    })
    
    it("shouldn't create results with above 10 goals per team", () => {
      const localExcedingGoals = function() { new Result(m, 11, 1) }
      const visitExcedingGoals = function() { new Result(m, 3, 15) }

      expect(localExcedingGoals).to.throw(Error)
      expect(visitExcedingGoals).to.throw(Error)
    })
  })
})