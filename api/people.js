// import { peopleData } from '../fixtures/people.js'
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config()

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export const fetchPeople = async function (name) {
    const query = `?name=${name}`;
    const url = `${API_URL}people${name ? query : ''}`;
    const response = await fetch(url, {
        headers: {
            Authorization: `Token ${API_KEY}`
        },
    });
    if (response.status == 401) {
        return;
    }
    return response.json();
}

export const fetchPerson = async function (id) {
    const url = `${API_URL}people/${id}`;
    console.log(url);
    const response = await fetch(url, {
        headers: {
            Authorization: `Token ${API_KEY}`
        },
    });
    if (response.status == 401) {
        return;
    }
    return response.json();
//     let person;
//     peopleData.forEach((personData) => {
//         if (personData.id == id) {
//             person = personData;
//         }
//     });
//     return person;
};

export const createPerson =  async function(formData) {
    const response = await fetch(`${API_URL}people`, {
        method: 'POST',
        body: formData,
        headers: {
            Authorization: `Token ${API_KEY}`,
        }
    });
    return response.json();
}