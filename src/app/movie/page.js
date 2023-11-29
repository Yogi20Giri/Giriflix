import React from "react";
import MovieCard from "@/app/components/MovieCard";
import common from "@/app/styles/common.module.css";

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "08d4558382mshe99bc0fc3efc3c2p1d42f6jsncb251ec7e936",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary);

  return (
    <>
      <section className={common.movieSection}>
        <div className={common.container}>
          <h1>Series & Movie</h1>
          <div className={common.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.jawSummary.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
