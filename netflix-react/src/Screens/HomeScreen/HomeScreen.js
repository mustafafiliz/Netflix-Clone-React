import React from "react";
import "./HomeScreen.css";
import Nav from "../../Components/Nav/Nav";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";
import requests from "../../Helpers/Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Actions Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
