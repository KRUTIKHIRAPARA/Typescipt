// STACK CUSTOME PUSH & POP METHODS

// PUSH
export{};

    var data:any = [];
    var currLength = data.length;
    var max = 5;

    
    function push(n:number){
        if(currLength >= max)
        {
            console.log(`Stack Is Full , You can not add ${n}`);
        }
        else{
        
            data[currLength] = n;
            currLength += 1;
        }
            
    }


    function pop(){
        if(currLength>0)
        {
            currLength -= 1;
            data.length = currLength;
        }
        else
        {
            console.log("Stack Is Already Empty!!!");
        }
    }

    push(34);
    push(56);
    push(4);
    push(33);
    push(8);
    push(98);
    push(77);
    push(77);
    push(77);

    pop();

    console.log(data);