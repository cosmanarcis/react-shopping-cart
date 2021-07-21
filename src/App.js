import Header from "./header";
import ItemSection from "./itemSection";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import CartContainer from "./cartContainer";
import { DataProvider } from './dataProvider';
import ProductInfo from "./productInfo";
import AboutApp from "./aboutApp";


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact default component={ItemSection}/>
          <Route path="/cart" component={CartContainer}/>
          <Route path="/aboutapp" component={AboutApp}/>
          <Route path="/productinfo/:id" component={ProductInfo}/>
        </Switch>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
