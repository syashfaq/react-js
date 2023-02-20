let a = 1;
const closure = function(){
    console.log(a);
    a = 2;
};
a = 3;

const closure2 = function(){
    console.log(a);
};

closure();
closure2();