import React from "react";
import checkPropTypes from "check-prop-types";
import Button from "./index";
import { shallow } from "enzyme";

const findTestAttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Button component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example",
        emitEvent: () => {},
      };

      const propsError = checkPropTypes(Button.propTypes, expectedProps, "props", Button.name);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let component;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example",
        emitEvent: mockFunc,
      };
      component = shallow(<Button {...props} />);
    });
    it("Should render a Button", () => {
      const button = findTestAttribute(component, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findTestAttribute(component, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
