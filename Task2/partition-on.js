function partitionOn(pred, items) {
    let index = 0;
    let falsy= [];
    let truthy=[];
    items.forEach(ele =>{
    if(pred(ele)){
    truthy.push(ele);
    }
    else{
        falsy.push(ele);
    }
    }
);
for(let i of falsy){
    items[index++]=i;
}
for(let i of truthy){
    items[index++]=i;
}
    return falsy.length;
    }