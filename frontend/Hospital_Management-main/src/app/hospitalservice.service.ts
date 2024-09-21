import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  constructor(public call:HttpClient) { }
  postData(data:any)
  {
    return this.call.post('http://172.17.15.231:8081/login',data)
  }
  getdata()
  {
    return this.call.get('http://172.17.15.221:8080/getA')
  }
  
  postDocData(data:any){
    return this.call.post('http://172.17.15.231:8081/insert',data)
  }
  getappdata(){
    return this.call.get('http://172.17.15.231:8081/getAllApp')
  }

  postregistration(data:any){
    return this.call.post('http://172.17.15.221:8080/rData',data)
  }

  dataBySlno(){
    return this.call.get('http://172.17.15.221:8080/getAll?slNo=1')
  }
  postforgotpassword(data:any){
    return this.call.put('http://172.17.15.231:8081/upass',data)
  }

}
