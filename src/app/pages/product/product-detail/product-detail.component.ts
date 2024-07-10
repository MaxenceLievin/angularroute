import { Component, Input } from '@angular/core';
import Film from '../../../models/film.model';
import Album from '../../../models/album.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() product!: any;
}
