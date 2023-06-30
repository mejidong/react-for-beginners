import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function MovieDetail({ id, coverImg, title, year, rating, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} />
      <div className={styles.movie_detail}>
        <h2 className={styles.movie_detail__title}>{title}</h2>
        <h3 className={styles.movie_detail__year}>{year}</h3>
        <h3 className={styles.movie_detail__rating}>⭐{rating}</h3>
        <p>{summary}</p>
        <ul className={styles.movie_detail__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className={styles.link}>
          <Link to="/">{`< `}Home</Link>
        </p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
