<p align="center">
  <a href="https://featuredx.vercel.app/">
    <img src="https://user-images.githubusercontent.com/73696688/218806920-c4e560ae-8a8a-4b40-95e8-24a1c59c915d.png" />
  </a>
</p>

# <img src="https://user-images.githubusercontent.com/73696688/218806920-c4e560ae-8a8a-4b40-95e8-24a1c59c915d.png" width="50px"/> featured

[featured](https://featuredx.vercel.app/) is a web app where user can watching and publishing short films. 
- New ecosystem for creators and viewers to unleash their creativity.
- User can also submit ideas and stories to collaborate in making those films.
- Different views for different types of users and purposes

## ✨ Demo
<p align="center">
<img src="https://user-images.githubusercontent.com/73696688/197396782-99097ae2-53fb-4caa-a28f-704df194f88e.png"/>
</p>

## 🎯 Goal of the project
It is a place where creators can submit and display their short films, and enthusiasts can find something interesting to watch all the time.
- For enthusiasts
   - Amazing thought provoking films - Watch short films and documentaries freely even without logging in.
- For creators
  - Feature - Login to feature your film on this platform.
  - Collaborate - Have an interesting story idea? Come together and make your idea a reality. 


## 📋 Description
Frontend
- Short Film Table
  - Arrange on basis of different attributes
  - Search with name, genres
  - Like item
  - Normal watcher view, Admin view (with delete item compatible)
- Short Film Show
  - video player, metadata, summary
- Submit film
  - Movie form with dropbox and other capabilities
  - Only for logged-in user (protected route)
- Login & Register Form
  - User Authentication - using jsonwebtoken
  - User Authorisation - joi for schema description & data validation
    

Backend
- Express
  - writing apis (REST) & routes
- Mongoose
  - defining schema
  - connection to MongoDB
- jsonwebtoken
  - decode, verify and generate JWT
- winston
  - logging support
- joi
  - data validation
- cors
  - allowing backend to send data to frontend
- config
  - storing configuration files, environment variables
- bcrypt
  - storing passwords

Database
- MongoDB Collections
  - genres
    - id
    - name
  - movies
    - title
    - genreId
    - duration
    - language
    - source
    - description
  - users
    - id
    - name
    - email
    - password (encrypted)
    - isAdmin

## 💻 Tech Used

### Programming Languages
<img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png">  &nbsp;&nbsp;

### Frontend Development
<img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"> &nbsp;
<img height="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"> &nbsp;&nbsp; 
<img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"> &nbsp;&nbsp; 
<img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"> &nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/73696688/218963583-393e8590-5e17-4895-8bbb-a918285575bf.png"> &nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"> &nbsp;&nbsp;


### Backend Development
<img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/73696688/218965612-f97d1664-84d8-4d9e-a171-3b2b4517d54a.png">&nbsp;&nbsp;

### Database
<img height="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/73696688/218967070-80af87b7-8278-4748-9ab3-4de937fe9963.png">&nbsp;&nbsp;

### Deployment
<img height="50" src="https://user-images.githubusercontent.com/73696688/210962754-867d8d6f-4ee2-4029-a09b-d899c435823b.png">&nbsp;&nbsp;
<img height="50" src="https://user-images.githubusercontent.com/73696688/218966338-ae02f90e-6fde-4755-b6bc-54b83bae428a.png">&nbsp;&nbsp;

 
