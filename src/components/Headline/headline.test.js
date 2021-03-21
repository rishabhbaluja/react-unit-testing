import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props}></Headline>);
  return component;
};

const findTestAttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Headline component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      component = setup(props);
    });

    it("Should render without errors", () => {
      const wrapper = findTestAttribute(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = findTestAttribute(component, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findTestAttribute(component, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    it("Should not render", () => {
      const wrapper = findTestAttribute(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
