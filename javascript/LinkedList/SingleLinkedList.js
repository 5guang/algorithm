class ListNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class SingleLinkedList {
  constructor(val) {
    this.head = new ListNode(val);
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

  findPre(val) {
    const curr = this.find(val);
    let prev = this.head;
    while (prev && prev.next !== curr) {
      prev = prev.next;
    }
    return prev;
  }

  append(val) {
    const node = new ListNode(val);
    const lastNode = this.findLast();
    lastNode.next = node;
  }

  insert(val, newVal) {
    const curr = this.find(val);
    if (curr.next === null) {
      this.append(val);
      return;
    }
    const node = new ListNode(newVal);
    const nextNode = curr.next;
    node.next = nextNode;
    curr.next = node;
  }

  del(val) {
    const prev = this.findPre(val);
    const curr = this.find(val);
    if (curr === null) return false;
    if (curr === this.head) {
      const head = curr.next;
      this.head = head;
      return true;
    }
    const next = curr.next;
    prev.next = next;
    return true;
    
  }
}

const linkedList = new SingleLinkedList(1);
linkedList.append(2);
linkedList.append(4);
linkedList.insert(2, 3);
linkedList.del(4);
console.log(linkedList.head);