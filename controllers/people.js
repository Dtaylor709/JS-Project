import { fetchPerson, fetchPeople } from '../api/people.js';

export const fetchPeopleController = async function (req,res) {
    const name = req.query.name;
    const peopleData = await fetchPeople(name);
    if (peopleData) {
        res.render('index', { people: peopleData })
    } else {
        res.send("Not authorized.")
    }
};

export const fetchPersonController = async function (req,res) {
    let personId = req.params.id;
    const personData = await fetchPerson(personId);
    console.log(personData)
    if (personData) {
        res.render('profile', { person: personData });
    } else {
        res.send("Not authorized.")
    }
};