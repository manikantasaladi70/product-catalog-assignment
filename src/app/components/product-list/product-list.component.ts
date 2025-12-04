import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';
  selectedProduct: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/products.json')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = data;
      });
  }

  filterProducts() {
    const q = this.searchText.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }

  openModal(p: any) { this.selectedProduct = p; }
  closeModal() { this.selectedProduct = null; }
}
