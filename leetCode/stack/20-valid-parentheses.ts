/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/
/*
・マップのような括弧表を準備する
・開括弧の場合はresultに追加
・閉じ括弧の場合はチェックする
*/

function isValid(s: string): boolean {
    const bracketMap = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);

    const stack: string[] = [];

    for (const char of s) {
        if (bracketMap.has(char)) {
            // 閉じ括弧の場合、スタックの最後の要素が対応する開括弧かチェックする
            if (stack.pop() !== bracketMap.get(char)) {
                return false;
            }
        } else {
            // 開括弧の場合、スタックに追加する
            stack.push(char);
        }
    }

   // スタックが空かどうかチェックする
    return stack.length === 0;
}

