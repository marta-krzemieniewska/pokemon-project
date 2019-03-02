import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  public pokemon: any;
  public id: number;
  public noPokemon: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    });

    this.route.data.subscribe(data => {
      if (data.pokemon === "noPokemon") {
        this.noPokemon = true;
      } else {
        this.pokemon = data.pokemon;
      }

    })
  }

}
