class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
};

class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;

    return console.log(`push ${newNode.val} at the tail`, this.printAll());
  }

  pop() {
    if(!this.head) return undefined;

    let currentNode = this.head;
    let newTail = null;

    while(currentNode.next){
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail=newTail;
    newTail.next=null;
    this.length--;

    if(this.length==0) this.head = this.tail = null;

    return console.log(`pop ${nextNode.val} at the tail`, this.printAll());
  }

  shift() {
    if(!this.head) return undefined;

    let originHead = this.head;
    this.head = originHead.next;
    this.length--;

    if(this.length==0) this.tail=null;

    return console.log(`delete headnode '${originHead.val}'`, this.printAll());
  }

  unshift(val) {
    let newHead = new Node(val);

    if(!this.head) {
      this.head = this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return console.log(`insert new headnode ${newHead.val}`, this.printAll())
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;

    let counter = 0;
    let node = this.head;
    while(counter < index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  
  set(index, val) {
    let node = this.get(index);
    if(node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return null;
    if(this.length === 0) return this.unshift(val);
    if(this.length === index) return this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index-1);
    let nextNode = this.get(index);
    
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return console.log(`insert new node at ${index}, ${newNode.val}`, this.printAll());
  }

  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === this.length-1) return this.pop();
    if(idnex === 0) return this.shift();

    let currentNode = this.get(index);
    let prevNode = this.get(index-1);
    let nextNode = currentNode.next;

    prevNode.next=nextNode;
    this.length--;

    return console.log(`remove node at ${index}, ${currentNode}`, this.printAll());
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode = null;
    let nextNode;

    for(let i = 0; i < this.length; ++i) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    return console.log(`Reverse all Singly Linked Lists`, this.printAll());
  }

  printAll() {
    let arr = []

    let anyNode = this.head;
    while(anyNode) {
      arr.push(anyNode.val);
      anyNode = anyNode.next;
    }
    return arr;
  }
}

let singlyList = new SinglyLinkedLists();