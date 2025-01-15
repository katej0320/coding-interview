// Given a string , return a new string with reversed order of characters
// reverse(apple) === 'elppa'


function reverse (str){
    const reversed = str.split('').reverse();
    console.log(reversed.join(''));
}

reverse('apple');