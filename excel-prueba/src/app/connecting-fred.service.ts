import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class ConnectingFredService {


  url = 'https://api.stlouisfed.org/fred/category?category_id=125&api_key=0ffd78e52828c4683c4365f4ea5f766a&file_type=json';
  
  constructor(public http:Http) { }

  traerTodasLasCaterias()
  {
   console.log('hola');
    return this.http.get(this.url).toPromise().then(this.extraerDatos).catch(this.error);
  }

private extraerDatos(res: Response)
  {
    return res.json() || "no hay datos";
    //return res.json || {};
  }
  private error(error:Response)
  {
    return error;
  }

}
