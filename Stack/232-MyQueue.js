// 232. Implement Queue using Stacks
/*
  Implement the following operations of a queue using stacks.

  push(x) -- Push element x to the back of queue.
  pop() -- Removes the element from in front of queue.
  peek() -- Get the front element.
  empty() -- Return whether the queue is empty.
*/

/*
  MyQueue queue = new MyQueue();

  queue.push(1);
  queue.push(2);  
  queue.peek();  // returns 1
  queue.pop();   // returns 1
  queue.empty(); // returns false
*/

var MyQueue = function() {
  this.stack = new MyStack();
};

MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function() {
  let tmpStack = new MyStack();
  
  while(!this.stack.isEmpty()) {
    let next = this.stack.pop();
    tmpStack.push(next);
  }
  let ans = tmpStack.pop();
  
  while(!tmpStack.isEmpty()) {
    let next = tmpStack.pop();
    this.stack.push(next);
  }
  
  return ans;
};

MyQueue.prototype.peek = function() {
  let tmpStack = new MyStack();
  
  while(!this.stack.isEmpty()) {
    let next = this.stack.pop();
    tmpStack.push(next);
  }
  let ans = tmpStack.pop();
  tmpStack.push(ans);
  
  while(!tmpStack.isEmpty()) {
    let next = tmpStack.pop();
    this.stack.push(next);
  }
  
  return ans;
};

MyQueue.prototype.empty = function() {
  return this.stack.isEmpty();
};




var MyStack = function() {
  this.list = [];
};

MyStack.prototype.push = function(x) {
  this.list.push(x);
};

// Removes the element on top of the stack and returns that element.
MyStack.prototype.pop = function() {
  return this.list.pop();
};

// Get the top element.
MyStack.prototype.top = function() {
  let length = this.list.length;
  return this.list[length - 1];
};

MyStack.prototype.isEmpty = function() {
  return this.list.length === 0;
};
