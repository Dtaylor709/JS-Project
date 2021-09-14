import express from 'express';
import peopleRouter from './routes/people.js'
import userRouter from './routes/users.js'

const app = express();
app.use(express.static('static'))
app.set('view engine', 'ejs');
app.set('views', './views/pages/');

app.listen(3000, () => {
    console.log('Server started!')
});

app.use('/', peopleRouter)
app.use('/', userRouter)

// 127.0.0.1:3000