
function String() {

    // let red: string = 'Red';
    // let green: string = "Green";
    // let yourColor: string = 'Your color is' + green;
    // let myColor: string = `My color is ${red}.`;

    let red: string = 'Red';


    function strings(str1: string, str2: string): string {
        return str1 + str1;
    }

    // 같은 문자열을 두 번 반복하는 함수
    function repeatString(text: string): string {
        return text + text;
    }

    // 예시 호출
    const repeated = repeatString("Hi"); // "HiHi"
    console.log(repeated);

    return (
        <div>
            String
        </div>
    )
}

export default String
