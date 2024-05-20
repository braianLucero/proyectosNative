import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
  };

  return {};
};
