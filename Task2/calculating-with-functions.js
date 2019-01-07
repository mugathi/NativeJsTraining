let left;
let right;
let operand;

function zero() {
if(arguments.length != 0){
    left = 0;
     return evaluate(operand);
}else{
    right=0;
}
}
function one() {
if(arguments.length != 0){
    left = 1;
     return evaluate(operand);
}else{
    right=1;
}
}
function two() {
if(arguments.length != 0){
    left = 2;
     return evaluate(operand);
}else{
    right=2;
}
}
function three() {
if(arguments.length != 0){
    left = 3;
     return evaluate(operand);
}else{
    right=3;
}
}
function four() {
if(arguments.length != 0){
    left = 4;
     return evaluate(operand);
}else{
    right=4;
}
}
function five() {
if(arguments.length != 0){
    left = 5;
     return evaluate(operand);
}else{
    right=5;
}
}
function six() {
if(arguments.length != 0){
    left = 6;
     return evaluate(operand);
}else{
    right=6;
}
}
function seven(){
if(arguments.length != 0){
    left = 7;
     return evaluate(operand);
}else{
    right=7;
}
}
function eight() {
if(arguments.length != 0){
    left = 8;
     return evaluate(operand);
}else{
    right=8;
}
}
function nine() {
if(arguments.length != 0){
    left = 9;
     return evaluate(operand);
}else{
    right=9;
}
}

function plus() {
operand="+";
}
function minus() {
operand="-";
}
function times() {
operand="*";
}
function dividedBy() {
operand="/";
}

function evaluate(operand){
let result;
switch(operand){
case '+': result = left+right;break;
case '*': result = left*right;break;
case '-': result = left-right;break;
case '/': result = parseInt(left/right);
}
return result;
}