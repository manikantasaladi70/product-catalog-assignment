import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  @Input() product: any;
  @Output() close = new EventEmitter();

  closeModal() { this.close.emit(); }
}
