import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "../src/pages/MainPage";
import CoffeePage from "../src/pages/CoffeePage";
import GoodsPage from "../src/pages/GoodsPage";
import CoffeeItem from "../src/pages/CoffeeItem";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    filterArray: require("./db.json").coffee,
    searchvalue: "",
    array: require("./db.json").coffee,
    filter: "All",
  };

  getFilter = (name) => {
    this.setState(() => {
      if (this.state.filter === name) {
        return { filter: "All" };
      } else
        return {
          filter: name,
        };
    });
  };

  searchFunc = (event) => {
    if (event.target.value.trim() === "")
      this.setState({
        filterArray: this.state.array,
      });
    else
      this.setState({
        filterArray: this.state.array.filter((coffee) => {
          return coffee.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        }),
      });
  };

  visibleCoffee = () => {
    if (this.state.filter === "All") {
      return this.state.filterArray;
    } else {
      return this.state.filterArray.filter(
        (coffee) => coffee.country === this.state.filter
      );
    }
  };

  render() {
    const data = require("./db.json");
    const { bestsellers, goods } = data;

    return (
      <Router>
        <Header />
        <Route
          path="/"
          render={() => <MainPage bestsellers={bestsellers} />}
          exact
        />
        <Route
          path="/coffee"
          render={() => (
            <CoffeePage
              coffeeItem={this.coffeeItem}
              getFilter={this.getFilter}
              visibleCoffee={this.visibleCoffee()}
              searchFunc={this.searchFunc}
            />
          )}
          exact
        />
        <Route path="/goods" render={() => <GoodsPage goods={goods} />} />
        <Route
          path="/coffee/:name"
          render={({ match }) => {
            const { name } = match.params;
            const newName = name.replace(":", "");
            return <CoffeeItem id={newName} />;
          }}
          exact
        />
        <Footer />
      </Router>
    );
  }
}

export default App;
