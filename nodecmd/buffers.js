//Buffer is a special memory created outside of the v8 heap which can be utilized for moderate sets of data 

let buf = Buffer.alloc(256);

let len = buf.write("We are learning node implementation")

console.log(len);

console.log(buf.toString("utf8"));

let buf26 = Buffer.alloc(65);

for(let i=0; i<65;i++){
    buf26[i]=i+97
}
console.log(buf26);
console.log(buf26.toString('ascii',0,5));
console.log(buf26.toString('utf8',0,5));
console.log(buf26.toString('utf8'));
console.log(buf26.toString('base64',0,5));

console.log(buf26.toString('base64'));

console.log(buf26.toString(undefined,0,5));