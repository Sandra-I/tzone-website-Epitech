import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filter } from 'src/app/model/filter';
import { Place, PlaceType } from 'src/app/model/place';
import { environment } from 'src/environments/environment';
const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class PlaceServiceMock {
  static FakePlaces = [{
    id: '0',
    name: "Lieu 1",
    address: '1 Lieu 3100 Test',
    rating: null
  }, {
    name: "Lieu 2",
    address: '2 Lieu 3100 Test'
  }, {
    name: "Lieu 3",
    address: '3 Lieu 3100 Test'
  }, {
    name: "Lieu 4",
    address: '4 Lieu 3100 Test'
  }, {
    name: "Lieu 5",
    address: '5 Lieu 3100 Test'
  }]


  constructor() { }

  get(type: PlaceType, filter: Filter): Observable<{ places?: Place[], hotels?: Place[] }> {
    if (type == 'enjoy/places') {
      return of({
        places: PlaceServiceMock.FakePlaces
      })
    }
    else {
      return of({
        hotels: [{
          name: "Lieu 1",
          address: '1 Lieu 3100 Test'
        }, {
          name: "Lieu 2",
          address: '2 Lieu 3100 Test'
        }, {
          name: "Lieu 3",
          address: '3 Lieu 3100 Test'
        }
        ]
      })
    }
  }
}
