class Node {
    constructor(data) {
		//let tree = new Tree("0");
		//tree.addNode('1', "0", tree.traverseDepthFirst);
		//tree.addNode('1', "0", tree.traverseDepthFirst);		
		
        this.data = data;
        this.prev = null;
        this.next = [];
    }
}

class Queue
{
    constructor()
    {
        this.dataObject = [];
    }

    enqueue(element)
    {
        this.dataObject.push(element);
    }

    dequeue()
    {
        return this.dataObject.shift();
    }
	
	addToEnd(data)
	{
		return this.dataObject.shift(data);
	}
	
	isEmpty()
	{
		return this.dataObject.length == 0;
	}

    front()
    {
        return this.dataObject[0];
    }

    back()
    {
        return this.dataObject[this.dataObject.length - 1];
    }
}

class Tree {
    constructor(data) {
        let node = new Node(data);
        this._root = node;
    }

	// Traverse the tree Breadth First //
    traverseBreadthFirst(callback)
    {
		
		var queue = new Queue();
	 
		queue.enqueue(this._root);
	 
		let currentNode = queue.dequeue();
		while(currentNode){
			for (var i = 0, length = currentNode.next.length; i < length; i++) {
				queue.enqueue(currentNode.next[i]);
			}
	 
			callback(currentNode);
			currentNode = queue.dequeue();
		}
    }

    // Traverse and Search the Tree //
    traverseDepthFirst(callback) {
        (function recursive(currentNode) {
            for (let i = 0, length = currentNode.next.length; i < length; i++) {
                recursive(currentNode.next[i]);
            }
            callback(currentNode);
        })(this._root);
    }

    // Add Node To Tree //
    addNode(data, AddToData, traversal)
    {
        let child = new Node(data),
        parentObj = null,
        callback = function(node) {
            if (node.data === AddToData)
            {
                parentObj = node;
            }
        };
    
        this.contains(callback, traversal);
    
        if (parentObj)
        {
            parentObj.next.push(child);
            child.prev = parentObj;
        } else {
			throw new Error("Can't add node to a non-existent parent.");
		}
    }

    // Remove Node from this Tree //
    removeNode(data, fromData, traversal)
    {
        let parent = null,
        childToRemove = null,
        index;

        let callback = function(node)
        {
            if (node.data === fromData)
            {
                prev = node;
            }
        }

        this.contains(callback, traversal);

        if (prev)
        {
            index = findIndex(prev.next, data);

            if (index === undefined)
            {
                throw new Error("The node to remove does not exist");
            } else {
                childToRemove = prev.next.splice(index, 1);
            }
        }

        return childToRemove;
    }

    contains(callback, traversal)
    {
        traversal.call(this, callback);
    }
	
	reverse(t) {
		if (t == null) {
			return;
		}
		var tmp = t.prev;
		t.prev = this.reverse(t.next);
		t.next = this.reverse(tmp);
		return t;
	}	
	
	isSymmetricTree(root)
	{
		return this.isSymmetricHelp(root.prev, root.next);
	}
	
	isSymmetricHelp(node1, node2)
	{
		if (node1 == null && node2 == null)
		{
			return true;
		}
		
		if (node1 == null || node2 == null)
		{
			return false;
		}
		
		return this.isSymmetricHelp(node1.prev, node2.next) 
		&& this.isSymmetricHelp(node1.next, node2.prev);
	}

    findIndex(arr, data)
    {
        let index;

        for(let i = 0; i < arr.length; i++)
        {
            if (arr[i].data === data)
            {
                index = i;
            }
        }

        return index;
    }

}