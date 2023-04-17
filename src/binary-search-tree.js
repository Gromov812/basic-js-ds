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

      let parentNode = null;

      let deleteFromParentNode = (curNode, parentNodeData, side) => {
          console.log(`deleteFromParentNode >> `, curNode, parentNodeData, ` << parNodeData, side >> `, side);
          switch (true) {
              case curNode == null:
                  return null;
              case curNode.data == parentNodeData:
                  console.log(`PAR NODE FOUND >>`, curNode);
                  if (side == 'left') curNode.left = null;
                  if (side == 'right') curNode.right = null;
                  return curNode;
              case curNode.data < data:
                  return deleteFromParentNode(curNode.right, parentNodeData, side);
              case curNode.data > data:
                  return deleteFromParentNode(curNode.left, parentNodeData, side);
          }
      }

      let oneChildNodeRemover = (curNode, parent) => {
          let newNode;


          if (curNode.right) {
              newNode = curNode.right
          }

          if (curNode.left) {
              newNode = curNode.left
          }

          if (parent == null) {
              this.rootData = newNode;
          }
          else {
              if (parent.left == curNode) {
                  parent.left = newNode
              }
              else parent.right = newNode;
          }
          return curNode.data;
      }

      let getSmallestNode = (node) => {
          console.log(`smallest`, node);
          while (node.left) {
              node = node.left;
          }
          return node
      }

      let twoChildNodeRemover = (curNode, parent) => {
          let lastRight = null;
          
          console.log(getSmallestNode(curNode));
      }

      let nodeRemover = (curNode) => {

          switch (true) {

              case curNode == null:
                  return null;

              case curNode.data == data:
                  console.log(`node to remove >> `, curNode);
                  /* IF LAST NODE */
                  if (!curNode.left && !curNode.right) {
                      console.log(`last node!`);
                      if (parentNode == null) this.rootData = null;
                      if (parentNode.left != null && parentNode.left == curNode) {
                          console.log(`left side node`);
                          deleteFromParentNode(this.rootData, parentNode.data, 'left');
                          return curNode = null;
                      }
                      if (parentNode.right != null && parentNode.right == curNode) {
                          console.log(`right side node`);
                          deleteFromParentNode(this.rootData, parentNode.data, 'right');
                          return curNode = null;
                      }

                  }
                  /* IF LAST NODE */



                  if (!curNode.left && curNode.right || curNode.left && !curNode.right) {



                      console.log(`!!!`);
                      console.log(oneChildNodeRemover(curNode, parentNode));

                  }

                  if (curNode.left && curNode.right) {
                   
                  }


                  return;

              case curNode.data < data:
                  parentNode = curNode;
                  return nodeRemover(curNode.right);

              case curNode.data > data:
                  parentNode = curNode;
                  return nodeRemover(curNode.left);

          }
      }
      console.log(nodeRemover(this.rootData));

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