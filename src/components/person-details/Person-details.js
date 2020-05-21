import React from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import PersonView from "./Person-view";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/Error-indicator";

class PersonDetails extends React.Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            person: null,
            error: false,
            isLoading: false
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            isLoading: !this.state.isLoading
        })
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    updatePerson = () => {
        const id = this.props.personId;
        if (!id) {
            return;
        }
        this.swapiService
            .getPerson(id)
            .then(this.onPersonLoaded)
            .catch(this.onError)
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
            this.timeout = setTimeout(this.updatePerson, 1500);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const {person, error, isLoading} = this.state;

        if (error) {
            return <ErrorIndicator/>
        }

        if (!person) {
            return <span>Select a person from a list</span>
        }
        return (
            <div className="person-details card">
                {
                    isLoading ?
                        <Spinner/> :
                        <PersonView person={person}/>
                }
            </div>
        )
    }
}

export default PersonDetails;