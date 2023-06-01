import { Injectable } from '@angular/core';
import { Item } from '../shared/models/Item';
import { sample_Items, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAll():Item[]{
    return sample_Items
  }

  getAllItemsBySearch(searchTerm:string){
    return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllItemsByTags(tag:string):Item[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(item => item.tags?.includes(tag));
  }

  getItemById(itemId:string):Item{
    return this.getAll().find(item => item.id == itemId) ?? new Item();
  }
}
