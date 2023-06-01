import { Item } from "./app/shared/models/Item";
import { Tag } from "./app/shared/models/Tag";

export const sample_Items : Item[]= [
{
  id: '0',
  name:'Aintel core 45',
  price:350,
  specification: ['Power:350W','Weight:1kg'],
  tags: ['processor', 'gaming'],
  imageUrl: 'assets/0.png'
},
{
  id: '1',
  name:'rayze',
  price:4350,
  specification: ['Power:350W','Weight:1kg'],
  tags: ['motherboard', 'gaming'],
  imageUrl: 'assets/0.png'
},
{
  id: '2',
  name:'ads c 45',
  price:350,
  specification: ['Power:350W','Weight:1kg'],
  tags: ['processor', 'gaming'],
  imageUrl: 'assets/0.png'
},
{
  id: '3',
  name:'sample',
  price:350,
  specification: ['Power:350W','Weight:1kg'],
  tags: ['processor', 'gaming'],
  imageUrl: 'assets/0.png'
},
{
  id: '4',
  name:'yesssss',
  price:40000,
  specification: ['Power:350W','Weight:1kg'],
  tags: ['processor', 'gaming'],
  imageUrl: 'assets/0.png'
}
]


export const sample_tags:Tag[]= [
  {name: 'All', count: 5},
  {name:'processor',count:4},
  {name:'motherboard',count:1}
]
