import * as reducers from "../redux/reducers";
import * as actions from "../redux/action";
import * as store from "../redux/store";

import Enzyme from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdaptor(),
  disableLifecycleMethods: true
});
