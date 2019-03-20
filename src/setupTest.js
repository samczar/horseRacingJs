import Enzyme from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-16";

export default Enzyme.configure({
  adapter: new EnzymeAdaptor(),
  disableLifecycleMethods: true
});
