class Node{
  constructor(value){
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

export default class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert value at back
  push(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      this.tail = node;
    } else{
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Remove value at back
  pop(){
    if(!this.head) return null;

    const previousNode = this.tail.previous;
    const oldTailValue = this.tail.value;

    if(previousNode){
      previousNode.next = null;
      this.tail = previousNode;
    } else{
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return oldTailValue;
  }

  // Remove value at front
  shift(){
    if(!this.head) return null;

    const nextNode = this.head.next;
    const oldHeadValue = this.head.value;

    if(nextNode){
      nextNode.previous = null;
      this.head = nextNode;
    } else{
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return oldHeadValue;
  }

  // Insert value at front
  unshift(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      this.tail = node;
    } else{
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /*
   * Given a specific value,
   * finds this value and removes it.
   * If can't find it, list remains the same
   */
  delete(value){
    if(this.head.value == value){
      this.shift();
    } else if(this.tail.value == value){
      this.pop();
    } else {
      let currentNode = this.head.next;
      while(true){
        if(currentNode == null) break;
        if(currentNode.value == value){
          currentNode.next.previous = currentNode.previous;
          currentNode.previous.next = currentNode.next;
          currentNode.previous = null;
          currentNode.next = null;
          this.length--;
          break;
        } else{
          currentNode = currentNode.next;
        }
      }
    }
  }

  // Number of values in doubly linked list
  count(){
    return this.length;
  }
}
