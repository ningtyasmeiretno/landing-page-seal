import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private api ="https:/mailthis.to/alias"
  
  constructor(private http: HttpClientModule) { }

  // PostMessage(input: any){
  //   return this.http.post(this.api.input, { 'text'}).pipe(
  //     map(
  //       (response) => {
  //         if(response){
  //           return response;
  //         }
  //       },
  //       (error: any) => {
  //         return error;
  //       }
  //     )
  //   )
  // }
}
