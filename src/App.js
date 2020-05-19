import React from 'react';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            people: {},
            isLoading: false
        }
    }

    async componentDidMount() {
        try {
            await axios.get(`https://swapi.dev/api/people/1`)
                .then(response => {
                    const people = response.data;
                    this.setState({
                        people,
                        isLoading: true
                    });
                })
        } catch (err) {
            console.log(`😱 Axios request failed: ${err}`);
        }
    }

    renderPeople = (people) => {
        return(
            <li>{people.name}</li>
        )
    };

    render() {
        let {isLoading, people} = this.state;
        return (
            <ul>
                {isLoading && this.renderPeople(people)}
            </ul>
        );
    }
}

export default App;
