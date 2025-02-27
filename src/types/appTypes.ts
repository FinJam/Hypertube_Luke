import { rootReducer } from '../store/store';
export type User = {
	id: number;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	image: string;
};
export type Movie = {
	background_image: string;
	background_image_original: string;
	date_uploaded: string;
	date_uploaded_unix: number;
	description_full: string;
	genres: [];
	id: number;
	imdb_code: string;
	language: string;
	large_cover_image: string;
	medium_cover_image: string;
	mpa_rating: string;
	rating: number;
	runtime: number;
	slug: string;
	small_cover_image: string;
	state: string;
	summary: string;
	synopsis: string;
	title: string;
	title_english: string;
	title_long: string;
	torrents: [];
	url: string;
	year: number;
	yt_trailer_code: string;
};

export type MovieData = {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Ratings: [];
	Metascore: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	DVD: string;
	BoxOffice: string;
	Production: string;
	Website: string;
	Response: string;
};

export type MovieId = string | string[] | undefined;

export type Movies = Movie[] | [];

export type RootReducer = ReturnType<typeof rootReducer>;

export type Comment = {
	id: string;
	userId: string;
	userName: string;
	date: string;
	comment: string;
};

export type Inputs = {
	userName: string;
	userEmail: string;
	userPassword: string;
	firstName: string;
	lastName: string;
};

export type PageLayout = {
	children: React.ReactNode;
};
