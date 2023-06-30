import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movie_detail}>
          <MovieDetail
            key={movie.id}
            id={movie.id}
            coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            summary={movie.description_full}
            genres={movie.genres}
            background_image={movie.background_image}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
