

const str = "Hi I am Nishad";

const str1 = "Hi Bhai Kaise hoo";

const reverseSent = str => {
    const arr =str.split(" ");
    const reversed = arr.map(el =>  {
        return el.split('').reverse().join("");
    });

    return reversed.join(" ");
}
console.log(reverseSent(str));

const reverseSen = str1 => {
    const arr = str1.split(" ");
    const reversed = arr.map(el => {
        return el.split('').reverse().join(" ");
    });

    return reversed.join(" ");

}
console.log(reverseSent(str1));
