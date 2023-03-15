import { useEffect, useState } from 'react';
import { getTrendsMovie } from '../../services/coursesApi';
import { СoursesList } from '../../СoursesList/СoursesList';
import { SectionTitle } from './Home.styled';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    getTrendsMovie()
      .then(setTrendingFilms)
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <SectionTitle>Trending today</SectionTitle>
      <СoursesList films={trendingFilms} />
    </>
  );
};

export default Home;
