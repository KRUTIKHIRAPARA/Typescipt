// QUEUE

    let  queue:number[]=[];
    let currLength = queue.length;
    let maxSize = 5;

    function equeue(newVal:number){
        queue[currLength] = newVal;
        currLength++;
    }

    function dequeue(){
        for(let i=0; i<queue.length; i++)
        {
            queue[i] = queue[i+1];
        }
        currLength--;
        queue.length = currLength;
    }

    function display(){
        console.log(queue);
    }

    equeue(45);
    equeue(4);
    equeue(5);
    equeue(67);

    dequeue();

    display();

    

