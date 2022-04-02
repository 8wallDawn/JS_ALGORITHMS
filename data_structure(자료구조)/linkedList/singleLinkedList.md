# 단일 연결 리스트(Single Linked List)

## 단일 연결 리스트

---

단일 연결 리스트는 배열과 객체와 같이 원하는 종류의 데이터 타입(`String`, `Number`, `etc...` ) 을 저장하는 자료구조와 유사하다.

배열과 유사하지만 배열은 각 요소별로 매핑이 되는 `index` 를 지닌다.

단일 연결 리스트는 `Node` 를 통해 연결되며, 요소의 시작을 헤드(`head`) , 끝을 테일(`tail`) 이라고 부른다.

따라서 배열처럼 `index` 를 통한 호출이 아닌 첫 `Node` 를 통해 다음 `Node` 를 요청해야하는 식의 단방향으로 연결된 `Node` 의 리스트를 말한다. 

## 클래스 메소드

---

### 노드(Node) 객체를 생성하는 클래스 Node

```jsx
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
};
```

`node.next` 를 통해서 다음 노드를 요청할 수 있게끔 하며, 이를 위한 노드객체의 구조에 `this.next`를 `null`로 초기화 한다.

### 단일 연결 리스트를 생성하고 조작하는 클래스 SinglyLinkedLists

```jsx
class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
		//...
  }

  pop() {
		//...
  }

  shift() {
		//...
  }

  unshift(val) {
		//...
  }

  get(index) {
		//...
  }

  insert(index, val) {
		//...
  }

  remove(index) {
		//...
  }

  reverse() {
		//...
  }

  printAll() {
		//...
  }

}
```

### push() : 마지막 노드 다음에 새 노드를 추가하는 메소드

```jsx
push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;

    return console.log(`push ${newNode.val} at the tail`, this.printAll());
  }
```

1. 추가하고자 하는 노드의 값(val)을 받아 생성자 함수 `Node(val)`를 통해서 노드를 생성한다.
2. 노드가 아예 없는 경우에는 push 된 노드가 헤드이자 꼬리가 된다.
3. 노드가 있는 경우에는 마지막 노드(테일)의 다음 노드가 새 노드가 되며, 새 노드가 테일이 된다.
4. 노드의 추가로 단일 연결 리스트의 길이가 증가된다.

### pop() : 마지막 노드를 제거하는 메소드

```jsx
pop() {
	if(!this.head) return undefined;

	let currentNode = this.head;
	let newTail = null;

	while(currentNode) {
		newTail = currentNode;
		currentNode = currentNode.next;
	}
	this.tail = newTail;
	newTail.next = null;
	
	this.length--;

	return console.log(`pop ${nextNode.val} at the tail`, this.printAll());
}
```

1. 헤드가 없는 경우(노드가 없음), 제거할 노드가 없으므로 `undefined` 를 반환.
2. 반복문을 통해 헤드노드부터 제거될 마지막 노드까지 거치는 변수 `currentNode` 와 새로운 꼬리노드가 될 마지막에서 두번째 노드 `newTail`
3. 반복문을 통해 헤드노드부터 마지막 노드까지 가며, `currentNode` 가 한 노드씩 앞으로 갈 때 마다, 이전 노드를 `newTail` 에게 넘겨주고 감.
반복문이 끝나는 시점은 `currentNode` 가 마지막 노드일 때로, 즉 제거되어야 할 노드가 되며, 뒤따라 붙는 `newTail`은 새로운 꼬리가 될 노드를 가리킴.
4. `newTail` 은 새로운 꼬리노드가 되고 다음 노드로 원래의 꼬리노드를 가리키고 있으므로 `next` 의 연결을 끊기 위해 `null` 을 삽입
5. 마지막 노드가 제거되었으므로 길이 감소.

### shift() : 맨 처음의 노드 즉, 헤드 노드를 제거하는 메소드

```jsx
shift() {
	if(!this.head) return undefined;

	let originHead = this.head;
	this.head = originHead.next;
	this.length--;

	if(this.length==0) this.tail=null;

	return console.log(`delete headnode '${originHead.val}'`, this.printAll());
}
```

1. 노드가 없는 경우 `undefined` 를 반환.
2. 기존의 헤드 노드인 `originHead` 의 `next` 노드가 새로운 헤드노드가 됨.
3. 길이가 하나 감소

> 💡 예외상황
만약 노드가 1개만 존재했다면 해당 노드는 헤드이자 테일이다.
`this.length—;` 까지의 코드는 헤드노드에 대한 변동만이 존재하므로, 
헤드이자 테일인 노드가 제거되었을 경우에는 테일 또한 `null` 값이 되어야 한다.
> 

### unshift(val) : 새로운 헤드 노드를 추가하는 메소드

```jsx
unshift(val) {
	let newHead = new Node(val);

	if(!this.head) {
		this.head = this.tail = newHead;
	} else {
		newHead.next = this.head;
		this.head = newHead;
	}

	this.length++;

	return console.log(`insert new headnode ${newHead.val}`, this.printAll())
}
```

1. 새로운 헤드가 될 노드를 생성한다.
2. 노드가 없는 경우에 새롭게 생성되는 헤드노드는 테일노드이기도 하다.
3. 노드가 있는 경우에는 기존의 헤드노드는 새로운 헤드노드의 `next` 노드가 된다.
4. 길이가 증가한다.

### get(index) : 특정 `index` 번째의 노드를 반환하는 메소드

```jsx
get(index) {
	if(index < 0 || index >= this.length) return null;

	let counter = 0;
	let node = this.head;

	while(counter < index) {
		node= node.next;
		counter++;
	}
	return node;
}
```

1. 각 노드가 갖게 될 인덱스는 `0` ~ `this.length-1` 까지 이므로 이 외의 값은 노드가 존재하지 않아 `null` 값을 반환한다.
2. `counter` 라는 변수와 `index` 를 통해서 반복문 내의 `next` 의 반복횟수가 결정되게 된다.
`index` 값이 `2` 인 경우 헤드노드였던 `node` 는 두번의 `next`를 거쳐 `0`, `1`, `2` 최종적으로 `index` 값이 `2` 인 노드를 반환한다.

### set(index, val) : 특정 `index` 번째의 노드의 `value` 값을 바꾸는 메소드

```jsx
set(index, val) {
	let node = this.get(index);

	if(node) {
		node.val = val;
		return true;
	}
	return false;
}
```

1. `set` 메소드는 특정 노드의 값을 변경에 성공하였을 때와 특정 노드가 없어 변경하지 못하였을 때로 나뉜다.
2. `get` 메소드를 통해서 특정 `index` 의 노드를 반환받는다.
3. 해당 노드가 존재하는 경우 `value` 값을 변경한다.

### insert(index, val) : 특정 `index` 노드에 `val` 값을 가진 노드를 추가하는 메소드

```jsx
insert(index, val) {
	if(index < 0 || index > this.length) return null;
	if(index === this.length) return this.push(val);
	if(index === 0) return this.unshift(val);

	let newNode = new Node(val);
	let prevNode = this.get(index-1);
	let nextNode = this.get(index);

	prevNode.next = newNode;
	newNode.next = nextNode;
	this.length++;

    return console.log(`insert new node at ${index}, ${newNode.val}`, this.printAll());
}
```

> 💡 `insert` 메소드로 추가될 수 있는 노드의 인덱스 범위는 `0` ~ `this.length` 까지 이다. `this.length` 의 경우 테일노드가 추가되는 것과 동일하며, `0` 의 경우 새로운 헤드노드가 추가되는 것과 동일하다.
> 
1. `val` 값을 가지는 새로운 노드를 생성한다.
2. 새로운 노드는 `index-1` 에 위치한 노드의 `next` 가 되고, `index` 에는 새로운 노드가 위치하게 되면서 기존의 `index` 노드는 새로운 노드의 `next` 가 된다.
3. 새로운 노드가 추가되었으므로 길이가 증가한다.

### remove(index) : 특정 `index` 노드를 제거하는 메소드

```jsx
remove(index) {
	if(index < 0 || index >= this.length) return null;
	if(index === this.length) return this.pop();
	if(index === 0) return shift();

	let currentNode = this.get(index);
	let prevNode = this.get(index-1);
	let nextNode = currentNode.next;

	prevNode.next = nextNode;
	this.length--;

	return console.log(`remove node at ${index}, ${currentNode}`, this.printAll());
}
```

> 💡 `remove` 메소드로 제거될 수 있는 노드는 `0` 부터 `index`를 취급하기 때문에 `0` ~ `this.length-1` 까지 이다. 따라서 이외의 범위에는 제거할 수 없는 노드가 없기 때문에 `null` 을 반환한다. 
`index` 가 `this.length-1` 과 동일한 경우 마지막 노드의 제거와 같고, `0` 인 경우에는 헤드 노드를 제거하는 것과 동일하다.
> 
1. 특정 `index` 의 노드가 제거되면 `index-1` 의 노드의 `next` 값이 `index 노드` 가 아닌 `index+1의 노드` 가 되어야 한다.
2. `index-1의 노드` 의 `next` 노드를 `index+1의 노드 또는 index.next 노드` 로 설정한다.
3. 노드가 삭제되었으므로 길이를 감소한다.

### reverse() : 헤드노드에서 테일노드까지의 링크를 역순하는 메소드

```jsx
reverse() {
	let node = this.head;
	this.head = this.tail;
	this.tail = node;

	let prevNode=null;
	let nextNode;

	for(let i=0; i<this.length; i++) {
		nextNode=node.next;
		node.next=prevNode;
		prevNode = node;
		node = nextNode;
	}

	return console.log(`Reverse all Singly Linked Lists`, this.printAll());
}
```

`reverse()` 메소드는 조금 이해하기에 어려울 수 있으나 단계적으로 차근히 알아보자.

우선 헤드 노드와 테일 노드를 변경해야 하는데, 나머지의 노드는 현재 헤드 노드를 기점으로 `next` 를 통해 엮어 있다. 따라서 `node` 변수에 헤드 노드를 담고 이를 통해서 헤드 노드와 테일 노드를 서로 바꾸고 `node` 를 통해 나머지 노드의 `next` 를 즉, 링크를 이어준다.

현재 노드가 `[0] - [1] - [2] - [3] - [4]` 라고 가정하자. 이를 그대로 바로보는 것이 아니라.

`[null] - [0] - [1] - [2] - [3] - [4]` 의 단일 연결 리스트로 바라보고 이해하려 해보자.

`[null]` 이 바로 `prevNode` 이다. 현재 `node` 는 기존의 테일 노드로 `node.next` 는 `[1]` 이다.

즉 `prevNode는 [null]` , `node는 [0]`, `nextNode는 [1]` 이 된다.

두번째 루프에서 node가 되어야 하는 것은 [1]이므로 먼저 해당 노드를 변수(`nextNode`)에 담았으니 기존의 헤드노드에서 테일노드가 되어야할 `node` 의 `next` 는 `null` 값을 지닌 `prevNode` 가 되어야 한다.

그리고 두번째 루프에서의 `prevNode` 가 되어야 하는 것은 첫번째 루프때의 `node` 값인 `[0]` 이다. 

이러한 루프의 순서를 설명하면, 현재 링크가 역행해야하기 때문에 `node.next` 는 이전 노드를 가리켜야 한다. 이전 노드를 먼저 가리키는 순간부터 기존 단일 연결 리스트를 더 이상 이어갈 수 없기 때문에 `nextNode` 라는 변수에 `node.next` 를 담아두고 연결 링크를 바꾸어 준 이후, `prevNode, node` 를 다음 노드로 한 `index` 씩 위로 올리는 것이다. 

### PrintAll() : 현재 단일 연결 리스트를 배열을 통해 눈으로 보기 위한 메소드

```jsx
printAll() {
    let arr = []

    let anyNode = this.head;
    while(anyNode) {
      arr.push(anyNode.val);
      anyNode = anyNode.next;
    }
    return arr;
  }
```

빈 배열에 헤드 노드부터 테일노드의 값들을 차례대로 `push()` 하고 반환하여 배열의 형태로 반환한다.