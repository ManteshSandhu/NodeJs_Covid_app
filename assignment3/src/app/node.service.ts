import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }
  insert(params) {return this.http.post('http://127.0.0.1:8887/insert/',{params});
}
retrieve(params) {
    return this.http.get('http://127.0.0.1:8887/retrieve/',{params});}

    f1() {return this.http.get('http://127.0.0.1:8888/gFile1/', {});}
    f2() {return this.http.get('http://127.0.0.1:8888/gFile2/', {});}
    f3() {return this.http.get('http://127.0.0.1:8888/gFile3/', {});}
    f4() {return this.http.get('http://127.0.0.1:8888/gFile4/', {});}
    f5() {return this.http.get('http://127.0.0.1:8888/gFile5/', {});}
}

