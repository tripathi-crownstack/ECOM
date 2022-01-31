function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }

  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6



  function *  generatorFunc() {
    yield 'a';
    return 'b'; // Generator ends here.
    yield 'a'; // Will never be executed. 
  }



 // Generator as an object method

  class Foo {
    *generator () {
      yield 1;
      yield 2;
      yield 3;
    }
  }
  
  const f = new Foo ();
  const gen = f.generator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }



  function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  var newgen = generator(10);
  
  console.log(newgen.next().value); // 10
  console.log(newgen.next().value); // 11
  console.log(newgen.next().value); // 12
  console.log(newgen.next().value); // 13
  console.log(newgen.next().value); // 20