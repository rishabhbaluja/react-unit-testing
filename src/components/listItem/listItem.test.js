import React from "react";
import { shallow } from "enzyme";
import ListItem from "./index";
import checkPropTypes from "check-prop-types";

const findTestAttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("ListItem Component", () => {
  describe("Checking proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "abc",
        desc: "abc",
      };
      const propsError = checkPropTypes(ListItem.propTypes, expectedProps, "props", ListItem.name);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "Example",
        desc: "Some text",
      };
      component = shallow(<ListItem {...props} />);
    });

    it("Should render without error", () => {
      const wrapper = findTestAttribute(component, "listItemComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findTestAttribute(component, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findTestAttribute(component, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component doesnot render", ()=>{
        const component =  findTestAttribute(wrapper, "componentTitle");
        expect(component.length).toBe(0);
    });
  });
});
