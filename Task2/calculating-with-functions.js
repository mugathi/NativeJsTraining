let left;
let right;
let operand;

function zero() {
if(arguments.length != 0){
    left = 0;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=0;
}
}
function one() {
if(arguments.length != 0){
    left = 1;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=1;
}
}
function two() {
if(arguments.length != 0){
    left = 2;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=2;
}
}
function three() {
if(arguments.length != 0){
    left = 3;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=3;
}
}
function four() {
if(arguments.length != 0){
    left = 4;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=4;
}
}
function five() {
if(arguments.length != 0){
    left = 5;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=5;
}
}
function six() {
if(arguments.length != 0){
    left = 6;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=6;
}
}
function seven(){
if(arguments.length != 0){
    left = 7;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=7;
}
}
function eight() {
if(arguments.length != 0){
    left = 8;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
}else{
    right=8;
}
}
function nine() {
if(arguments.length != 0){
    left = 9;
     return parseInt(new Function( 'return (' + left+""+operand+""+right + ')' )());
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