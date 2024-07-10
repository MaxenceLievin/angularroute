import { AlbumService } from './../../services/album.service';
import { FilmService } from './../../services/film.service';
import { Component, OnInit } from '@angular/core';
import Film from '../../models/film.model';
import Album from '../../models/album.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  detail!: Film | Album;

  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  private subscribeFilm(id: number): void {
    this.filmService.getFilm(id).subscribe((response) => {
      this.detail = response;
    });
  }

  private subscribeAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe((response) => {
      this.detail = response;
    });
  }

  private setSubscribe(type: string | null, id: string | null) {
    if (id && type === 'albums') {
      this.subscribeAlbum(+id);
    } else if (id && type === 'films') {
      this.subscribeFilm(+id);
    } else if (!id || !type) {
      this.router.navigate(['/not-found']);
    }
  }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');

    const id = this.route.snapshot.paramMap.get('id');

    this.setSubscribe(type, id);
  }
}
