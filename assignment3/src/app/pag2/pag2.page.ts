import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { NodeService} from '../node.service';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {
  data1: any = [];
  constructor(private node: NodeService) { }

  ngOnInit() {
    this.node.f4().subscribe
    (data => { this.data1 = data; },
      (err: HttpErrorResponse) => { console.log(err.message); });
  }

}
