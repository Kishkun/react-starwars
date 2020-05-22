import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/Spinner";
import PlanetView from "./Planet-view";
import ErrorIndicator from "../error-indicator/Error-indicator";

class RandomPlanet extends React.Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            isLoading: false,
            error: false
        };
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            isLoading: true
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            isLoading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    componentDidMount() {
        this.updatePlanet();
        //this.interval = setInterval(this.updatePlanet, 3000);
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
    }

    render() {
        const {planet, isLoading, error} = this.state;

        // const hasData = !(isLoading || error);
        // const errorMessage = error ? <ErrorIndicator/> : null;
        // const spinner = isLoading ?  <Spinner/> : null;
        // const content = hasData ?  <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                <div className={!error ?
                    "planet-block" : "planet-error"}>
                    {
                        isLoading ?
                            <PlanetView planet={planet}/> :
                            <Spinner/>
                    }
                </div>
                {error && <ErrorIndicator/>}
            </div>

        );
    }
}

export default RandomPlanet;