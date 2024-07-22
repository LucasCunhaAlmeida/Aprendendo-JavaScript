let num = []


console.log(`Nosso vetor é o ${num}`)
num[5] = 'Ola'
console.log(`Agora esse é o novo vetor ${num}`)
num[6] = 12.8
console.log(`Agora esse é o novo vetor ${num}`)
/* Se não quisermos explicitar aonde queremos colocar o elemento
   por meio dos indices, podemos fazer apenas um por exemplo:
   num.push(7)
*/
num.push('Final')

console.log(`Agora esse é o novo vetor ${num}`) 

num.sort()
for(let pos in num){
    console.log(`A posição ${pos} è ${num[pos]}`)
}