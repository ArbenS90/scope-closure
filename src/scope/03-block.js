//block scope

function fruits (){
  if (true) {
    var fruit1 = 'Corozo'; //function scope
    let fruit2 = 'Chontaduro'; //block scope
    const fruit3 = 'Aguacate'; //block scope

    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);

}

fruits();