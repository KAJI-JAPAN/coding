function isValid(s: string): boolean {

  const stack = []

  const pair = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  for (let i=0; i < s.length; i++) {
    const char = s[i]

    if(char === "(" || char === "{" || char ==="[") {
      stack.push(s[i])
      continue
    }
    const lastOpen = stack.pop()

    if(lastOpen !== pair[char]) return false

  }

  return stack.length === 0
};