class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class SingleLinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  find(val) {
    let curr = this.head;
    while (curr !== null && curr.val !== val) {
      if (curr.next)
        curr = curr.next;
      else
        curr = null;
    }
    return curr;
  }

  findLast() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  append(val) {
    const node = new Node(val);
    const lastNode = this.findLast()
    lastNode.next = node;
  }



  insert(v, val) {
    const _node = new ListNode(val);
  }
}

const linkedList = new SingleLinkedList(1);
linkedList.append(2);
linkedList.append(3);
const node = linkedList.find(2);
