class Node {
  // constructor
  constructor(element)
  {
    this.element = element;
    this.next = null;
  }
}

// defining LinkedList class

class LinkedList{
  constructor(){
  this.head = null; // head stores the first node of  the list
  this.size = 0;    // initially the size of the list is 0
}


// add method it add the element to the list

add(element)
{
  // creating a new Node
  var node = new Node(element);

  // to store the current node
var current;
// if the list is empty add the first Node and make it head
 if(this.head === null)
    this.head = node;
else{
  current = this.head;

  // iterate to the end of the LinkedList
  while(current.next){
    current = current.next;
  }
  // add a node to the list basically at the end of LinkedList
  current.next = node;

}
this.size++;

}
// insert an element at the position index of the list
insertAt(element,index) 
{
    if(index > 0 && index > this.size)
        return false;
    else
    { 
    // create new node
    var node = new Node(element);
    var current, previous;
    current = this.head;
    
    // add the element to the first index
    if(index === 0)
     {
       node.next = this.head;
       this.head = node;
        
        }    
        
      else
      {
        current = this.head;
        var count = 0;
        //iterate over the list to find the position to insert
        while(count < index){
            count++;
            previous = current;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    
   }
}
// Method printList() to printall the content of the list
printList()
{
    var current = this.head;
    var str = "";
    while(current){
        str += current.element +" ";
        current = current.next;
    }
    console.log(str);
}

}
// making an object of  the LinkedList class
var ll = new LinkedList();
ll.add(100);
ll.add(200);
ll.add(300);
ll.add(1000);
ll.printList();
