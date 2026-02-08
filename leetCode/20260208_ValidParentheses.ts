// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
//
// Example 1:
//
// Input: s = "()"
//
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
//
// Example 3:
//
// Input: s = "(]"
//
// Output: false
//
// Example 4:
//
// Input: s = "([])"
//
// Output: true
//
// Example 5:
//
// Input: s = "([)]"
//
// Output: false

// Constraints:
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
// -------------------------------------------------------------------------------------------------------

// 方針
// 　正しい組み合わせの括弧が揃った時点で消していく
// 　括弧が残ったら、正しくない組み合わせ →　false
//   括弧が残らない場合は → true
//    括弧のとじが最初来たときはその時点でfalse
//   括弧がなくらない時はfalse
function isValid(s: string): boolean {
  let stack: string[] = []

  const tableobj: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  for(const c of s) {

    // 開きかっこの処理
    if(c === "(" || c === "{" || c === "[") {
      stack.push(c)
      continue
    }

    // 閉じ括弧の処理
    if(stack.length === 0) return false

    const stackTop = stack.pop()
    if(stackTop !== tableobj[s]) return false


  }
    return stack.length  === 0
};