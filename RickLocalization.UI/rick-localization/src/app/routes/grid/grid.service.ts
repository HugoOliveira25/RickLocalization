import { HistoricViewModel } from './view-models/historic-viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyCardViewModel } from './view-models/rick-and-morty-card';

@Injectable()
export class GridService {

  readonly apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://localhost:5001/v1/historic';
  }

  addTravel(viewModel: HistoricViewModel): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/addtravel`, viewModel);
  }

  getHistoric(id: number): Observable<HistoricViewModel[]> {
    return this.http.get<HistoricViewModel[]>(`${this.apiURL}/getHistoric/${id}`);
  }

  private _ricksAndMorts: RickAndMortyCardViewModel[] = [
    {
      id: 1,
      rick: 'Rick Sanchez',
      morty: 'Morty Smith',
      dimension: 'Earth (C-137)',
      rickImage: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      mortyImage: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
    },
    {
      id: 2,
      rick: 'Rick K-22',
      morty: 'Morty K-22',
      dimension: 'Earth (K-22)',
      rickImage: 'https://rickandmortyapi.com/api/character/avatar/292.jpeg',
      mortyImage: 'https://rickandmortyapi.com/api/character/avatar/233.jpeg',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
    },
    {
      id: 3,
      rick: 'Fascist Shrimp Rick',
      morty: 'Fascist Shrimp Morty',
      dimension: 'Earth (Fascist Shrimp Dimension)',
      rickImage: 'https://rickandmortyapi.com/api/character/avatar/503.jpeg',
      mortyImage: 'https://rickandmortyapi.com/api/character/avatar/505.jpeg',
      status: 'Alive',
      species: 'Animal',
      type: 'Shrimp',
      gender: 'Male',

    },
    {
      id: 4,
      rick: 'Wasp Rick',
      morty: 'Wasp Morty',
      dimension: 'Earth (Wasp Dimension)',
      rickImage: 'https://rickandmortyapi.com/api/character/avatar/516.jpeg',
      mortyImage: 'https://rickandmortyapi.com/api/character/avatar/518.jpeg',
      status: 'Alive',
      species: 'Animal',
      type: 'Wasp',
      gender: 'Male',
    },
    {
      id: 5,
      rick: 'Rick Sanchez',
      morty: 'Morty Smith',
      dimension: 'Story Train',
      rickImage: 'https://rickandmortyapi.com/api/character/avatar/631.jpeg',
      mortyImage: 'https://rickandmortyapi.com/api/character/avatar/630.jpeg',
      status: 'Alive',
      species: 'Human',
      type: 'Soulless Puppet',
      gender: 'Male',

    },
    {
      id: 6,
      rick: 'Cowboy Rick',
      morty: 'Cowboy Morty',
      dimension: 'Unknown',
      rickImage: 'https://rickandmortyapi.com/api/character/avatar/78.jpeg',
      mortyImage: 'https://rickandmortyapi.com/api/character/avatar/77.jpeg',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',

    }
  ];


  getRicksAndMortys() {
    return this._ricksAndMorts;
  }

  getRickAndMortyById(id: number) {

    for (let i = 0; i <= this._ricksAndMorts.length; i++) {
      if (this._ricksAndMorts[i].id == id)
        return this._ricksAndMorts[i];
    }
    return null;
  }

  getLocations() {
    return this._ricksAndMorts.map(l => l.dimension);
  }

}
