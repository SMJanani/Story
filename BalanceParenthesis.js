function balanceparenthesis(str){
    let stack = [];
    for(let i=0;i<str.length;i++){
        let x = str[i];
        if(x=='('||x=='{'||x=='['){
            stack.push(x);
            continue;
        }
        if(stack.length==0){
            return false;
        }
        let check = stack.pop();
        if(x==')'){
            if(check=='{'||check=='['){
                return false;
        }
    }
        if(x=='}'){
            if(check=='('||check=='['){
                return false;
        }
    }
        if(x==']'){
            if(check=='('||check=='{'){
                return false;
            }
        }
    }
    return (stack.length==0);
}
if (balanceparenthesis(userInput[0])){
    console.log("yes");
}
else{
    console.log("no");
}