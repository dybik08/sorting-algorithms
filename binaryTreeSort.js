function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.push = function(val){
    let root = this.root;

    if(!root){
        this.root = new Node(val);
        return;
    }

    let currentNode = root;
    let newNode = new Node(val);

    while(currentNode){
        if(val < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
                break;
            }
            else{
                currentNode = currentNode.left;
            }
        }
        else{
            if(!currentNode.right){
                currentNode.right = newNode;
                break;
            }
            else{
                currentNode = currentNode.right;
            }
        }
    }
};

let bst = new BinarySearchTree();
let dataToBeSorted = [10,9,8,7,6,5];
console.log('dataToBeSorted - before: ', dataToBeSorted);

const treeSort = (dataToBeSorted) => {
    for(let i =0; i<dataToBeSorted.length; i++){
        bst.push(dataToBeSorted[i])
    }
};

treeSort(dataToBeSorted);

let dataSortedByBinaryTree = [];
function inOrder(node){
    if(node){
        inOrder(node.left);
        dataSortedByBinaryTree.push(node.value);
        inOrder(node.right);
    }
    return dataToBeSorted = dataSortedByBinaryTree;
}

inOrder(bst.root);
console.log('dataToBeSorted - after: ', dataToBeSorted);