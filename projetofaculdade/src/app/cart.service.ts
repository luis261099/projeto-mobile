import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Assitencia Myfone',
      expanded: true,
      products: [
        { id: 0, name: 'Pelicula 9D', price: '8' },
        { id: 1, name: 'Capa Magnetica', price: '50' },
        { id: 2, name: 'Fone De Ouvido', price: '25' },
        { id: 3, name: 'Carregador', price: '10' }
      ]
    },
    {
      category: 'Assitencia Yellow',
      products: [
        { id: 4, name: 'Pelicula 9D', price: '9' },
        { id: 5, name: 'Capa Magnetica', price: '45' },
        { id: 6, name: 'Fone De Ouvido', price: '30' },
        { id: 7, name: 'Carregador', price: '9' }
      ]
    },
    {
      category: 'Assistencia Alves',
      products: [
        { id: 8, name: 'Pelicula 9D', price: '9' },
        { id: 9, name: 'Capa Magnetica', price: '43' },
        { id: 10, name: 'Fone De Ouvido', price: '39' },
        { id: 11, name: 'Carregador', price: '7' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}