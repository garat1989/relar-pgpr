import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-mesas-redondas',
  templateUrl: './mesas-redondas.component.html',
  styleUrls: ['./mesas-redondas.component.css']
})
export class MesasRedondasComponent implements OnInit {

  mesa: any;
  id: string;

  constructor( 
    public data: DataService,
    public lang: LangService,
    private route: ActivatedRoute,
  ){
    /* GET ID */
    this.route.params.subscribe(
      (resp) =>{
        this.id = resp.id;
        this.mesa = this.data.getMesa(resp.id);
      },
      (error) => console.log(error)
    )
  }

  ngOnInit(): void {
  }


}
