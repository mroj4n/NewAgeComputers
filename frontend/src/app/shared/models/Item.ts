export class Item{
  id!:string;
  name!:string;
  price!:number;
  specification?: string[];
  tags?: string[];
  imageUrl!:string;
  sku?:number;
  barcode?:number;
  quantity?:number;
  category?:string;
}
