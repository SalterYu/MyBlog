function f1() {
  var a = 2
  function f2() {
    var a = 3;
    console.log(this);//3
  }
  f2()
}
f1()
