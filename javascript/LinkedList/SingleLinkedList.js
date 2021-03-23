class ListNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class SingleLinkedList {
  constructor(val) {
    this.head = this.#newNode(val);
    this.length = 1;
  }
  #newNode(val) {
    return new ListNode(val);
  }
  #increaseLength() {
    this.length += 1;
  }
  #decreaseLength() {
    if (this.length > 0) {
      this.length -= 1;
    }
  }

  #insert(curr, newVal) {
    if (curr.next === null) {
      this.append(newVal);
      return;
    }
    const node = new ListNode(newVal);
    const nextNode = curr.next;
    node.next = nextNode;
    curr.next = node;
    this.#increaseLength();
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
  findByPosition(position) {
    if (position < 1) return null;
    if (position === 1) {
      return this.head;
    }
    let count = 2;
    let head = this.head;
    while (head && count !== position) {
      if (head.next) {
        head = head.next;
        count += 1;
      } else {
        return null;
      }
    }
    return head;
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
    const node = this.#newNode(val);
    const lastNode = this.findLast();
    lastNode.next = node;
    this.#increaseLength();
  }

  insertByPosition(position, newVal) {
    const curr = this.findByPosition(position);
    this.#insert(curr, newVal);
  }

  insertByValue(val, newVal) {
    const curr = this.find(val);
    this.#insert(curr, newVal);
  }

  del(val) {
    const prev = this.findPre(val);
    const curr = this.find(val);
    if (curr === null) return false;
    if (curr === this.head) {
      const head = curr.next;
      this.head = head;
    } else {
      const next = curr.next;
      prev.next = next;
    }

    this.#decreaseLength()
    return true;

  }
}

const linkedList = new SingleLinkedList(1);
linkedList.append(2);
linkedList.append(4);
linkedList.append(6);
linkedList.insertByValue(2, 3);
linkedList.insertByPosition(4, 5);
// linkedList.del(4);
// const ele = linkedList.findByPosition(10);
console.log(linkedList.head);
// console.log(ele);