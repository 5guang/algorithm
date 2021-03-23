mod list_node;
use list_node::{ListNode, Next};

#[derive(Debug, Eq, Clone, PartialEq)]
struct SingleLinkedList {
  head: ListNode,
  length: i32,
}

impl SingleLinkedList {
  pub fn new(val: i32) -> Self {
    Self {
      head: ListNode::new(val),
      length: 1
    }
  }
}

impl SingleLinkedList {

  pub fn find_by_position(&mut self, position: u32) -> &mut ListNode {
    if position == 1 {
      return &mut self.head;
    }
    let mut count = 1;
    let mut curr = &mut self.head;

    while curr.next != None && count != position {
      if let Some(ref mut item) = curr.next {
        curr = item;
        count += 1;
      }
    }
    curr

  }

  pub fn find_last(&mut self) -> &mut ListNode {
    let mut curr = &mut self.head;
    while curr.next != None {
      if let Some(ref mut item) = curr.next {
        curr = item;
      }
    }
    curr
  }

  pub fn append(&mut self, val: i32) {
    let node = ListNode::new(val);
    let curr = self.find_last();
    curr.next = Some(Box::new(node));
    self.increase_length();
  }

  fn increase_length(&mut self) {
    self.length += 1;
  }

  fn decrease_length(&mut self) {
    if self.length > 0 {
      self.length -= 1;
    }
  }
}

fn main() {
  let mut linked_list = SingleLinkedList::new(1i32);
  linked_list.append(2);
  linked_list.append(7);
  linked_list.append(4);
 {
  let mut ele = linked_list.find_by_position(3u32);
  ele.val = 3;
  println!("{:#?}", ele);
 }
  println!("{:#?}", linked_list.head);

}