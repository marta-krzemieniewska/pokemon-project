import { Component, OnInit } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  public list: any;
  public id: number;
  public page = 1;
  private pageSize = 10;
  constructor(private route: ActivatedRoute, private ac: ApiClientService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.list = data.pokemons;
    })
  }

  loadData(limit: number, offset: number) {
    this.ac.getPokemons(limit, offset).subscribe(result => {
      this.list = result.results;
    });
  }

  onPageChange(e: number) {
    this.loadData(this.pageSize, (e - 1) * this.pageSize);
  }

}
