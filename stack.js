
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

$(document).ready(function(){
    $("#stack").prepend(`<div class="row bg-primary push">${stack.push(100)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-success push">${stack.push(200)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-primary push">${stack.push(300)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-success push">${stack.push(400)[0]}</div>`);
});class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        let push_res = `${element}`; 
        this.count += 1;
        let count = this.count - 1;
        return [push_res, count];
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        return deleteItem
    }

    peek() {
        if(this.count == 0) return undefined
        return this.items[this.count - 1]
    }

    clear() {
        this.items = []
        this.count = 0
        return this.items
    }
}

const stack = new Stack();

$(document).ready(function(){
    $("#btn-push").click(function(){
        let val = $("#ST-data").val();
        if(val.trim() === "") {
            alert("Please enter a valid value.");
            return;
        }
        let res = stack.push(val);
        $("#stack").prepend(`<div class="row bg-primary push text-white text-center p-2 mb-1" id="ST-${res[0]}">${res[0]}</div>`);
        $("#ST-data").val(""); 
    });

    $("#btn-pop").click(function(){
        if(stack.count === 0) {
            $("#pop").text("Stack is empty!");
            return;
        }
        let poppedVal = stack.pop();
        $("#pop").text(poppedVal);
        $(`#ST-${poppedVal}`).remove();
    });

    $("#btn-peek").click(function(){
        if(stack.count === 0) {
            $("#pop").text("Stack is empty!");
            return;
        }
        let topVal = stack.peek();
        $("#pop").text(`Top: ${topVal}`);
        
        let targetBlock = $(`#ST-${topVal}`);
        targetBlock.removeClass("bg-primary").addClass("bg-warning text-dark");
        setTimeout(function(){
            targetBlock.removeClass("bg-warning text-dark").addClass("bg-primary");
        }, 500);
    });

    $("#btn-clear").click(function(){
        stack.clear();
        $("#stack").empty();
        $("#pop").empty();
    });
});