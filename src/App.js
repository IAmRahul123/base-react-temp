import './App.css';
import Routes from "../src/components/common/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./storage/store";
import './scss/style.scss'

// base app
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
