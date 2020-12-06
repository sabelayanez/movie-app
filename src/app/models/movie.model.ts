import {Genre} from './genre.model'
import {Collection} from './collection.model'

export class Movie {
    adult: boolean
    backdrop_path: string
    belongs_to_collection:Collection
    budget:number
    genres:Genre[]
    genre_ids: number[]
    homepage:string
    id: number
    imdb_id:string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: Date
    status:string
    tagline:string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}