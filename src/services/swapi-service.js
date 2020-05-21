import axios from "axios";

class SwapiService {

    _apiBase = "https://swapi.dev/api";

    getResource = async (url) => {
        const res = await axios(`${this._apiBase}${url}`);

        if (res.status !== 200) {
            throw new Error(`Could not axios ${url}` +
                `, received ${res.status}`)
        }

        return await res.data;
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results
            .map(this._transformPerson)
            .slice(0, 6);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results
            .map(this._transformPlanet)
            .slice(0, 6);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };
}

export default SwapiService;