const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
      this.rootData = null;
  }

  root() {

      if (this.rootData == null) return null;
      else return this.rootData;



  }

  add(data) {

      let newNode = new Node(data);

      if (this.rootData == null) {
          this.rootData = newNode;
          return;
      }

      else recur(this.rootData)
      function recur(curNode) {

          if (curNode.data < data) {

              if (curNode.right == null) curNode.right = newNode;
              else {
                  recur(curNode.right)
              }
          }

          else {
              if (curNode.left == null) curNode.left = newNode;
              else {
                  recur(curNode.left)
              }
          }
      }
  }

  pahtFinder(curNode, data) {
      switch (true) {
          case curNode == null:
              return null;
          case curNode.data == data:
              return curNode;
          case curNode.data < data:
              return this.pahtFinder(curNode.right, data);
          case curNode.data > data:
              return this.pahtFinder(curNode.left, data);
      }

  }

  has(data) {
      let res = this.pahtFinder(this.rootData, data)
      return res == null ? false : true;

  }

  find(data) {
      let res = this.pahtFinder(this.rootData, data)
      return res;
  }

  remove(data) {

  }

  minmaxCollector(curNode) {
      let arr = [];
      fill(curNode);
      function fill(curNode) {
          if (curNode == null) return;
          arr.push(curNode.data)
         fill(curNode.left);
          fill(curNode.right);
      }

      return arr
  }

  min() {
      let arr = [...this.minmaxCollector(this.rootData)];
      return Math.min(...arr)
  }

  max() {
      let arr = [...this.minmaxCollector(this.rootData)];
      return Math.max(...arr)
  }
}

module.exports = {
  BinarySearchTree
};