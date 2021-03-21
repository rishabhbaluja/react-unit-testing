import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const setup = (props = {}) => {
  const component = shallow(<Header {...props}></Header>);
  return component;
};

const findTestAttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Header component", () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it("Should render without errors", () => {
    console.log(component.debug());
    const wrapper = findTestAttribute(component,'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it("Should render the logo", () => {
    const wrapper = component.find(`[data-test='logoImg']`);
    expect(wrapper.length).toBe(1);
  });
});
