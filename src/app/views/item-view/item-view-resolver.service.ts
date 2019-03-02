import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ApiClientService } from '../../services/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class ItemViewResolverService implements Resolve<any> {

  constructor(private ac: ApiClientService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = route.paramMap.get('id');

    return this.ac.getPokemon(id)
      .pipe(
        mergeMap(pokemon => {
          console.log(pokemon);
          if (pokemon) {
            return of(pokemon);
          } else {
            return EMPTY;
          }
        }),
        catchError(error => error.status == 404 ? of('noPokemon') : EMPTY)
      );
  }

}
