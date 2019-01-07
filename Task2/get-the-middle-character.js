function getMiddle(s)
{
let len = s.length;
let middle = parseInt(len/2);
  if(len % 2 == 0){   
  value = s[middle -1]+""+s[middle];
  } else{
   value = s[middle];
   }
   return value;
}