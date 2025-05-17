i have created simple user authentication in express.js and mongoDB

First i created the model like  { username, email, password }

then i created routes 

- POST /register → in this i register the user for the first time in database. The password is stored in hash using bcrypt

- POST /login → in login the username and password are matched with the database and if its true then it returns the jwt token

- GET /profile → when the token is provided in the header it compares it to the database with jwt.verify() method and returns the user id
