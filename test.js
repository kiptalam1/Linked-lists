import { LinkedList } from './linkedLists.js';

const newList = new LinkedList();
newList.append("dog");
newList.append("cat");
newList.append("parrot");
newList.append("hamster");
newList.append("snake");
newList.append("turtle");

console.log(newList.toString());


let list = new LinkedList();
list.prepend(9)
list.append(5)
list.prepend(6)
list.append(12)
list.prepend(1)
list.insertAt(11, 3)
//list.removeAt(5)
//list.pop();



console.log("Size: ", list.size())
//console.log("Head: ", list.getHead())
//console.log("Tail: ", list.tail())
//console.log("At: ", list.at(0))
// console.log(list.contains(6))
// console.log(list.find(39))
// console.log(list.find(79))
console.log(list)
console.log(list.toString())
// console.log(list.insertAt(3, 11))