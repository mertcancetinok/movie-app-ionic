import { Movie } from "./movie-model";

export interface MovieDetail{
    dult: boolean;
    backdrop_path: string;
    genre_ids:Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: Number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: Number;
    vote_count: Number;
    genres: Array<any>;
    homepage: string;
    production_companies: Array<any>;
    production_countries:Array<any>;
    runtime: number;
    spoken_languages:Array<any>;
    

}