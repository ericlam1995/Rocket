import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import "rxjs/Rx";

@Injectable()
export class GetMainSponsorService {

  constructor(private http:Http) { 

  }
  getAllSponsorPics(){
    return this.http
    .get('https://webservices-test.aut.ac.nz/ecms/api/sponsors')
    .map((response: Response) => {
      return <AwardModel[]>response.json();
    })
    .catch(this.handleError);
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}