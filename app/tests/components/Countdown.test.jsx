var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Countdown = require("Countdown");

describe("Countdown", () => {
  it("Should exist", () => {
    expect(Countdown).toExist();
  });

  describe("handleSectCountdown", () => {
    it("Should set state to started and countdown", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSectCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe("started");

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it("Should never set count to 0", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSectCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });

  });
});
