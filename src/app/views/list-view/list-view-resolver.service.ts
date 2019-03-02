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
export class ListViewResolverService implements Resolve<any> {

  constructor(private ac: ApiClientService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {


    return this.ac.getPokemons(10, 0)
      .pipe(
        mergeMap(list => {
          console.log(list);
          if (list) {
            return of(list.results);
          } else {
            return EMPTY;
          }
        }),
        catchError(error => error.status == 404 ? of('noPokemons') : EMPTY)
      );
  }
}
