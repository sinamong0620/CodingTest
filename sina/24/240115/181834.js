function solution(myString) {

    return [...myString].map((string) => {
        if(string < "l") return "l"
        else return string;
    }).join("")

}