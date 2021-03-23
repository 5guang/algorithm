pub type Next = Option<Box<ListNode>>;

#[derive(Debug, Eq, Clone, PartialEq)]
pub struct ListNode {
  pub val: i32,
  pub next: Next,
}

impl ListNode {
  pub fn new(val: i32) -> Self {
    ListNode {
      val,
      next: None
    }
  }
}