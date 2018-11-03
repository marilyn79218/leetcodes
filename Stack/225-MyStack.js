// 225. Implement Stack using Queues
/*
  Implement the following operations of a stack using queues.

  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  empty() -- Return whether the stack is empty.
*/

/*
  MyStack stack = new MyStack();

  stack.push(1);
  stack.push(2);  
  stack.top();   // returns 2
  stack.pop();   // returns 2
  stack.empty(); // returns false
*/

var MyStack = function() {
  this.queue = new Queue();
};

MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

MyStack.prototype.pop = function() {
  let prev = this.queue.pop();
  let tmp = [];
  while(prev) {
    if (this.queue.isEmpty()) {
      for (let i=0; i<tmp.length; i++) {
        this.queue.push(tmp[i]);
      }
      
      return prev;
    }
    tmp.push(prev);
    prev = this.queue.pop();
  }
};

MyStack.prototype.top = function() {
  let prev = this.queue.pop();
  let tmp = [];
  while(prev) {
    if (this.queue.isEmpty()) {
      tmp.push(prev);
      for (let i=0; i<tmp.length; i++) {
        this.queue.push(tmp[i]);
      }
      
      return prev;
    }
    tmp.push(prev);
    prev = this.queue.pop();
  }
};

MyStack.prototype.empty = function() {
  return this.queue.isEmpty();
};





var Queue = function(){
  this.list = [];
}

Queue.prototype.push = function(x) {
  this.list.push(x);
}

Queue.prototype.peek = function(x) {
  return this.list[0];
}

Queue.prototype.pop = function(x) {
  return this.list.shift();
}

Queue.prototype.isEmpty = function(x) {
  return this.list.length === 0;
}

