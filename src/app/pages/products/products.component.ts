import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import Film from '../../models/film.model';
import Album from '../../models/album.model';
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  films: Film[] = [];

  albums: Album[] = [];

  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ){}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((response) => {this.films = response})
    this.albumService.getAlbums().subscribe((response) => {this.albums = response})
  }
}
