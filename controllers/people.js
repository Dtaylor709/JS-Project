import fs from 'fs';
import FormData from 'form-data';
import { fetchPerson, fetchPeople, createPerson } from '../api/people.js';

export const fetchPeopleController = async function (req,res) {
    const name = req.query.name;
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    const peopleData = await fetchPeople(name);
    if (peopleData) {
        res.render('index', { 
            people: peopleData,
            user: user, 
        });
    } else {
        res.send("Not authorized.");
    }
};

export const fetchPersonController = async function (req,res) {
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    let personId = req.params.id;
    const personData = await fetchPerson(personId);
    console.log(personData)
    if (personData) {
        res.render('profile', { person: personData, user:user });
    } else {
        res.send("Not authorized.")
    }
};

export const createPersonFromController = function (req,res) {
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    res.render('newProfile', { user:user })
}

export const createPersonController = async function (req, res) {
    let personData = req.body;
    const form = new FormData();
    form.append('name', personData.name);
    form.append('tagline', personData.tagline);
    form.append('bio', personData.bio);
    const fileStream = fs.createReadStream(req.file.path);
    form.append('photo', fileStream, req.file.originalname);
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    let newPerson;
    try {
          newPerson = await createPerson(form);
    } catch (err) {
          console.log(err);
    }
    if (newPerson) {
          res.render('profile', { person: newPerson, user:user  });
    } else {
          res.send('Error.');
    }
};

