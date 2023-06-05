import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../shared/models/Item';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(item: Item): void {
    let itemExists = this.cart.items.find((i) => i.item.id === item.id);

    if (itemExists) return;

    this.cart.items.push(new CartItem(item));
    this.setCartToLocalStorage();
  }

  removeFromCart(itemId: string): void {
    this.cart.items = this.cart.items.filter((i) => i.item.id !== itemId);
    this.setCartToLocalStorage();
  }

  changeQuantity(itemId: string, quantity: number): void {
    let item = this.cart.items.find((i) => i.item.id === itemId);
    if (!item) return;
    item.quantity = quantity;
    item.price = item.item.price * item.quantity;
    this.setCartToLocalStorage();
  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  updateCart(): void {
    this.cart.totalPrice = 0;
    this.cart.totalQuantity = 0;
    this.cart.items.forEach((i) => {
      this.cart.totalPrice += i.price;
      this.cart.totalQuantity += i.quantity;
    });
    this.cartSubject.next(this.cart);
    this.setCartToLocalStorage();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((acc, i) => acc + i.price, 0);
    this.cart.totalQuantity = this.cart.items.reduce(
      (acc, i) => acc + i.quantity,
      0
    );


    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    let cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : new Cart();
  }

}
