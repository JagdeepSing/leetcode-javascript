/**
 *  Stack that supports push, pop, top, and
 *  retrieving the min element in constant time.
 *
 * @author Jagdeep Singh
 * @date 2019-09-02
 * @export
 * @class MinStack
 */
export default class MinStack {
  constructor() {
    this.min = [];
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
    const curMin = this.getMin();

    if (curMin !== undefined) {
      this.min.push(Math.min(x, curMin));
    } else {
      this.min.push(x);
    }
  }

  pop() {
    this.stack.pop();
    this.min.pop();
  }

  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
  }

  getMin() {
    if (this.min.length > 0) {
      return this.min[this.min.length - 1];
    }
  }
}
