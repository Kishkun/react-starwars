import axios from "axios";

class SwapiService {

    _apiBase = "https://swapi.dev/api";

    async getResource(url) {
        const res = await axios(`${this._apiBase}${url}`);

        if (res.status !== 200) {
            throw new Error(`Could not axios ${url}` +
                `, received ${res.status}`)
        }

        return await res.data;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    _extractId(item) {
        const idRegEx = /\/([0-9]*)\/$/;
        return item.url.match(idRegEx)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model
        }
    }
}

export default SwapiService;