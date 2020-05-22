import React from "react";
import "./app.css";
import Header from "./../header/Header";
import RandomPlanet from "../random-planet/Random-planet";
import ToggleRandomPlanet from "../buttons/Toggle-random-planet";
import ErrorButton from "../buttons/Error-button";
import ErrorIndicator from "../error-indicator/Error-indicator";
import ItemPage from "../pages/item-page/Item-page";
import SwapiService from "../../services/swapi-service";

class App extends React.Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            hasError: false
        }
    }

    toggleRandomPlanet = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        const {isShow, hasError} = this.state;
        const {
            getAllPeople,
            getPerson,
            getPersonImage,
            getAllPlanets,
            getPlanet,
            getPlanetImage
        } = this.swapiService;

        if (hasError) {
            return (
                <div className="error-wrapper">
                    <ErrorIndicator/>
                </div>
            )
        }

        return (
            <div className="container">
                <Header/>
                {isShow && <RandomPlanet/>}
                <ToggleRandomPlanet
                    toggleRandomPlanet={this.toggleRandomPlanet}
                />
                <div className="error-button-block">
                    <ErrorButton/>
                </div>
                <ItemPage getData={getAllPeople}
                          getItem={getPerson}
                          getImageUrl={getPersonImage}
                          renderItem={({name, gender}) => `${name} (${gender})`}
                />

                <ItemPage getData={getAllPlanets}
                          getItem={getPlanet}
                          getImageUrl={getPlanetImage}
                          renderItem={({planetName, diameter}) => `${planetName} (${diameter})`}
                />
            </div>
        );
    }
};

export default App;