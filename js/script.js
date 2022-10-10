
let riga = document.getElementById('row')
console.log(riga)




for(let i = 1; i <= 100; i++){
    let newDiv = document.createElement('div')
    newDiv.innerHTML = i
    newDiv.classList.add('marrone')
    console.log(newDiv)
    riga.append(newDiv)
    // console.log(i)
   if( i % 3 == 0 && i % 5 == 0){
    let i = 'FizzBuzz'
    newDiv.innerHTML = i;
    newDiv.classList.add('rosso')
    newDiv.classList.remove('marrone')
    console.log('FizzBuzz')
   }else if( i % 5 == 0){
    let i = 'Buzz'
    newDiv.classList.remove('marrone')
    newDiv.classList.add('blu')
    newDiv.innerHTML = i;
   }else if( i % 3 == 0){
    let i = 'Fizz'
    console.log('Fizz')
    newDiv.classList.add('verde')
    newDiv.classList.remove('marrone')
    newDiv.innerHTML = i;
   }
    newDiv.classList.add('col-1')
    newDiv.classList.add('my-col')
   
}