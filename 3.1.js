let n = [1, 2, 3, 4, 5];

let m = [100, 101, 102]; 


console.log(
    n.reduce((a, b) => a + b, 0)
  )

  console.log(
    m.reduce((a, b) => a + b, 0)
  )


    let i = [1, 2, 3, 4, 5]
    let b = [100, 101, 102]
    let additioneur = (a, b) => a + b;

    console.log(i.reduce(additioneur));
    console.log(b.reduce(additioneur));