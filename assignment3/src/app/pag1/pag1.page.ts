import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { NodeService} from '../node.service';
@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})

export class Pag1Page{

  data1: any = [];
  data2:any=[];
  data3:any=[];
  constructor(private node: NodeService) {}
  displayF1(){
    this.node.f1().subscribe
    (data => { this.data1 = data; },
      (err: HttpErrorResponse) => { console.log(err.message); });}

      displayF2(){
        this.node.f2().subscribe
        (data => { this.data2 = data; },
          (err: HttpErrorResponse) => { console.log(err.message); });}

          displayF3(){
            this.node.f3().subscribe
            (data => { this.data3 = data; },
              (err: HttpErrorResponse) => { console.log(err.message); });}
}
