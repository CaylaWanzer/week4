


// body of text is a corpus

corpus = "Now is the time..."
i = 0
console.log(corpus[i++])
// console.log(corpus[i++])
// console.log(corpus[i++])
// console.log(corpus[i++])
// console.log(corpus[i++])
// console.log(corpus[i++])

for(i=0; i < corpus.length; i++){
    console.log(i, corpus[i])
}
console.log("DONE")

// console.log(corpus.length)

words = corpus.split(" ") 
console.log(words[0])
console.log(words[3])

ip = "127.128.128.255"
parts = ip.split(".")
console.log(parts)
console.log(parts[13])