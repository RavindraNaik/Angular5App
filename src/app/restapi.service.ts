import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EnvService } from './env.service';

@Injectable()
/*this service file will be used by the application to call restful CRUD api's only*/
export class RestapiService {

	private baseApiUrl;/*api url*/

	constructor(private http: HttpClient, private env: EnvService) {
		this.baseApiUrl = this.env.apiUrl;
	}

	/*get method*/
	public getMethod(apiName:string) {		
		return this.http
			.get(`${this.baseApiUrl}${apiName}`)
			.map(res => res)
			.catch(this.handleError);	    
	}

	/*get by id method*/
	public getByIdMethod(apiName:string, data) {
		return this.http
		    .get(`${this.baseApiUrl}${apiName}/${data}`)
		    .map(res => res)
		    .catch(this.handleError);
	}

	/*post method*/
	public postMethod(apiName:string, data) {
		return this.http
		    .post(`${this.baseApiUrl}${apiName}`, data)
		    .map(res => res)
		    .catch(this.handleError);	 
	}

	/*delete method*/
	public deleteMethod(apiName:string, data){
		return this.http
		    .post(`${this.baseApiUrl}${apiName}`, data)
		    .map(res => res)
		    .catch(this.handleError);
	}

	/*delete by id method*/
	public deleteByIdMethod(apiName:string, data) {
		return this.http
		    .delete(`${this.baseApiUrl}${apiName}/${data}`)
		    .map(res => res)
		    .catch(this.handleError);
	}

	/*update method*/
	public updateMethod(apiName:string, data) {
		return this.http
		    .put(`${this.baseApiUrl}${apiName}`, data)
		    .map(res => res)
		    .catch(this.handleError);
	}

	/*handle API error*/
	private handleError (error: Response | any) {
	  console.error('ApiService::handleError', error);
	  return Observable.throw(error);
	}

}
