export function LodashChunk(array,sizeOftheArrayRequired){
const expectedResponse = [];
const outputSizeoftheArray = Math.min(Math.ceil(array.length/sizeOftheArrayRequired),array.length);
let index =0 ;
for(let i=0;i<outputSizeoftheArray;i++){
expectedResponse.push(arrray.slice(index,index+sizeOftheArrayRequired));
index = index+sizeOftheArrayRequired;
}
return expectedResponse;
}
