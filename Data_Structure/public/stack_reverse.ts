class Stack{
    private data:string[]= [];

    push(newVal:string):void{
        this.data.push(newVal);
    }

    pop(){
        this.data.pop();
    }

    display(){
        console.log(this.data);
    }
}

var st = new Stack();

st.push("krutik");
st.push("krutik");
st.push("krutik");
