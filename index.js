/*
let collection = {
    words: {name: "Alexandra", next: "time"} ,
    time: {name: "Kristen", next: "touch"} ,
    touch: {name: "Juliet", next: "service"} ,
    service: {name: "Timmy", next: "gifts"} ,
    gifts: {name: "Jacob", next: null} 
}
*/
function getName(node){
    return node.name
}

function headNode(linkedList, collection){
//  return  linkedList[Object.keys(linkedList)[0]];
return collection[linkedList]
};

function next(node, collection){
    return collection[node.next];
}

function nodeAt(index, linkedList, collection){
    let node = headNode(linkedList, collection);
    for(let x = 0; x < index; x++){
        node = next(node, collection);
    }
    return node;
}

function addressAt(index, linkedList, collection){
    if(index > 0){
        return nodeAt(index - 1, linkedList, collection).next;
    }
    
    return linkedList;
}

function indexAt(node, collection, linkedList){
    let index = 0;
   let testNode = nodeAt(index, linkedList, collection)
    while(testNode != node){
        index += 1;
        testNode = nodeAt(index, linkedList, collection)
    }
    return index;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    
    let newNode = collection[newNodeAddress];
    let newNextAddress = addressAt(index, linkedList, collection);
    newNode.next = newNextAddress;

    if(index != 0){
        let prevNode = nodeAt(index - 1, linkedList, collection);
        prevNode.next = newNodeAddress;
    }
   // prevNode.next = newNodeAddress;

}

function deleteNodeAt(index, linkedList, collection){
    let newNextAddress = addressAt(index + 1, linkedList, collection)

    if(index != 0){
        let prevNode = nodeAt(index - 1, linkedList, collection);
        prevNode.next = newNextAddress;
    }

}
