Movie Explorer App
Overview
A React-based web application that allows users to search for movies, view details, and discover trending films using the TMDb API. Features include a login interface, light/dark mode, infinite scrolling, and local storage for favorites and last searches.
Setup

Prerequisites: Node.js installed.
Clone the Repository:git clone <your-gitlab-repo-url>
cd movie-explorer


Install Dependencies:npm install


Add TMDb API Key:
Replace YOUR_API_KEY in Home.js and MovieDetails.js with your TMDb API key.


Run Locally:npm start



API Usage

TMDb API: Fetches trending movies, search results, and movie details.
Endpoints:
Trending: https://api.themoviedb.org/3/trending/movie/week
Search: https://api.themoviedb.org/3/search/movie
Details: https://api.themoviedb.org/3/movie/{id}





Features

Login Interface: Mock login with username/password stored in local storage.
Search Bar: Search movies with results displayed in a grid.
Movie Grid: Shows posters, titles, years, and ratings.
Movie Details: Displays overview, genres, cast, and trailer.
Trending Movies: Default view on the home page.
Light/Dark Mode: Toggle via navbar switch.
Infinite Scrolling: Loads more movies as you scroll.
Favorites: Save/remove movies locally.
Persistence: Last search query saved in local storage.

Deployment

Deployed on [Vercel/Netlify]: <your-live-demo-link>

Technologies

React, React Router, Context API
Material-UI, Axios, Infinite Scroll Component

