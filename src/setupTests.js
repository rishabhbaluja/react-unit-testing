import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  configure: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
