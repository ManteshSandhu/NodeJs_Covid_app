import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { NodeService} from '../node.service';

@Component({
  selector: 'app-pag3',
  templateUrl: './pag3.page.html',
  styleUrls: ['./pag3.page.scss'],
})
export class Pag3Page implements OnInit {
  data1: any = [];
  constructor(private node: NodeService) { }

  ngOnInit() {
    this.node.f5().subscribe
    (data => { this.data1 = data; },
      (err: HttpErrorResponse) => { console.log(err.message); });
  }

}
