class Strings {
    concat(word1, word2) { 
        // add code here 
        return word1 + word2;
    }
    repeat(word, times) {
        // add code here 
        let txt = "";
        for(let i=0; i<times; i++){
            txt += word;
        }
        return txt;
    }
    toString(input) {
        // add code here 
        return `${input}`;
    }
    charAt(word, index) {
        // add code here
        return word[index];
    }
}
module.exports = Strings