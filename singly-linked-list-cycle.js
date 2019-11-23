
const node = (x) => {
    return {
	info: x,
	next: null
    }
}

const newList = (x) => {
    const head = node(x)
    return {
	head: head,
	current: head,
	addNext: (x) => {
            this.current.next = node(x)
	    this.current = this.current.next
	}
    }
}


const traverse = (head) => {
    if(head == null) {
	return;
    }
    console.log(head.info)
    traverse(head.next)
}


const list = newList(1)
list.addNext(2)
list.addNext(3)


traverse(list.head)

