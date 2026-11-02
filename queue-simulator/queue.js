class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
        return element;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
        return this.items;
    }
}

const queue = new Queue();

$(document).ready(function() {

    $("#btn-push").click(function() {
        let val = $("#ST-data").val();
        if (val.trim() !== "") {
            queue.enqueue(val);
            updateQueueDisplay();
            $("#ST-data").val("");
        } else {
            alert("Please enter a valid value!");
        }
    });

    $("#btn-pop").click(function() {
        if (!queue.isEmpty()) {
            let removedVal = queue.dequeue();
            updateQueueDisplay();
            $("#pop").text(removedVal);
        } else {
            $("#pop").text("Queue is empty!");
        }
    });

    $("#btn-peek").click(function() {
        if (!queue.isEmpty()) {
            let frontVal = queue.peek();
            $("#pop").text(`Front: ${frontVal}`);
            
            let frontItem = $("#queue").children().first();
            frontItem.removeClass("bg-primary").addClass("bg-warning text-dark");
            setTimeout(function() {
                frontItem.removeClass("bg-warning text-dark").addClass("bg-primary");
            }, 500);
        } else {
            $("#pop").text("Queue is empty!");
        }
    });

    $("#btn-clear").click(function() {
        queue.clear();
        $("#queue").empty();
        $("#pop").empty();
    });

    function updateQueueDisplay() {
        $("#queue").empty();
        queue.items.forEach(function(item, index) {
            let label = "";
            if (queue.items.length === 1) {
                label = " (Front / Rear)";
            } else {
                if (index === 0) label = " (Front)";
                if (index === queue.items.length - 1) label = " (Rear)";
            }
            
            $("#queue").append(`<div class="row bg-primary push text-white text-center p-2 mb-1">${item}${label}</div>`);
        });
    }

});