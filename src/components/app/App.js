import React from "react";
import "./app.css";
import Header from "./../header/Header";
import RandomPlanet from "../random-planet/Random-planet";
import ToggleRandomPlanet from "../buttons/Toggle-random-planet";
import ErrorButton from "../buttons/Error-button";
import ErrorIndicator from "../error-indicator/Error-indicator";
import PeoplePage from "../pages/people-page/People-page";
import PlanetPage from "../pages/planet-page/Planet-page";
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
                <PeoplePage getData={this.swapiService.getAllPeople}
                            renderItem={({name, gender}) => `${name} (${gender})`}
                />
                <PlanetPage getData={this.swapiService.getAllPlanets}
                            renderItem={({planetName, diameter}) => `${planetName} (${diameter})`}
                />
            </div>
        );
    }
};

export default App;