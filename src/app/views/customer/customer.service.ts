import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  httpOptions = { headers: new HttpHeaders({ 'content-type': 'application/json' }), withCredentials: false }
  baseUrl: string
  devEndpoint: string = 'http://localhost:8080/api/v1'
  tstEndpoint: string = ''
  prodEndpoint: string = ''
  
  constructor(private httpClient: HttpClient) {
    this.baseUrl = this.devEndpoint
  }
  getCustomersByCompanyId(request): Observable<any> {
    const endpoint = this.baseUrl + '/getCustomersByCompanyId'
    return this.httpClient.get(endpoint, { params: request }).pipe(
      map((res: any) => {
        return res
      }), catchError(error => {
        return throwError('Error at /getCustomersByCompanyId', error)
      })
    )
  }
  
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map, catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';

// @Injectable()
// export class CustomerService {
    
//     httpOptions = { headers: new HttpHeaders({ 'content-type': 'application/json' }), withCredentials: false }
//     baseUrl: string
//     devEndpoint: string = 'http://localhost:8080/api/v1'
//     tstEndpoint: string = ''
//     prodEndpoint: string = ''
    
//     constructor(private httpClient: HttpClient) {
//         this.baseUrl = this.devEndpoint
//     }

//     getCustomersByCompanyId(request): Observable<any> {
//         const endpoint = this.baseUrl + '/getCustomersByCompanyId'
//         return this.httpClient.get(endpoint, { params: request }).pipe(
//             map((res: any) => {
//                 return res
//             }), catchError(error => {
//                 return throwError('Error at /getCustomersByCompanyId');
//             })
//         )
//     }


// }
