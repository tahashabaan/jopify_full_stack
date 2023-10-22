import request from 'supertest';


let __token;
import User from "../models/User.js";
import {connectToDatabase, closeConnect} from '../config/database.js';
const app = 'http://localhost:3000'

beforeAll(async () => {
    const DB_URL='mongodb+srv://tahashabaan48:yNYtaACblVljY7o0@jobify.6kjbjqd.mongodb.net/?retryWrites=true&w=majority'
        connectToDatabase(DB_URL)
  });
afterAll(async () => {
    // Delete or clear data before each test
     await User.deleteMany({})
    // Disconnect from the test database after all tests
    closeConnect()
  });
const userIn = {
        email:'tahashabaan190@gmail.com',
        password:'12345678'
    }

    const user ={
        ...userIn,
        fName:'taha',
        lName:"shabaan",
       
    }

beforeAll(async () => {
    
      await request(app).post('/auth/signUp').send(user)

     const res = await request(app).post('/auth/signIn').send(userIn);
     __token=res.body.token;
})

describe('handle create user', 
() => {
    it('check user created or not', async() => {
        await request(app).post('/user').set('Authorization', `Barear ${__token}`).send(user)
    })
})

