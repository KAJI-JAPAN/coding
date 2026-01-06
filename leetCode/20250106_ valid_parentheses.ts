/*
1) 開き括弧は stack に積む
2) 閉じ括弧は stack の一番上と対応している必要がある
3) 最後に stack が空なら true

falseの条件
・閉じ括弧がきたときにstackが空
・s最後にtackが空ではない
・pop した開き括弧が、閉じ括弧と種類不一致
 */
function isValid(s: string): boolean {
    const pair: Record<string, string> = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    let stack: string[] = ["("]
    for(const string of s) {
        // pushしてcontinueにすることで、以降を発火させない
        if(string === "(" || string === "{" || string === "[") {
            stack.push(string)
            continue
        }
        // 以降は閉じ括弧の処理
        if(stack.length === 0) return false

        const top = stack.pop()
        if(top !== pair[string]) return false
}

    return stack.length === 0
};


/*
* Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
* */