/**
 * @Description This task was suggested 2023-04-19 by filtered.ai, see details after the test
 * @command to run `yarn jest getProcessStringWithOperators.test`
 */

const OPERATORS = {
  f(res, args) {
    if (!args.length && !res.length) return ['empty']
    return [args[0], ...res]
  },
  i(res, args) {
    let args2 = args
    if (!args.length) args2 = [0, 'empty']
    else if (!args[1] || !args[1] === '') args2 = [args2[0], 'empty']

    const [index2, value] = args2
    const part1 = res.slice(0, index2)
    const part2 = res.slice(index2)
    return [...part1, value, ...part2]
  },
  r(res) {
    if (!res.length) return ['empty']
    let temp = []
    if (res.length > 0) temp = res.slice(1)
    return temp.length ? temp : ['empty']
  },
  d(res, args) {
    if (!res.length) return ['empty']
    const [index2, value] = args
    try {
      const temp = res.filter((item, index) => {
        return index !== index2
      })
      return temp
    } catch (error) {
      return res
    }
  },
  q(res) {
    return res
  },
}

const getParsedStringIntoArray = inputData => {
  const arr = inputData
    .split('\n')
    .map(item => item.split(' '))
    .map(item => {
      return item.map(item2 => {
        try {
          let res = parseInt(item2, 10)
          if (isNaN(res)) res = item2
          return res
        } catch (error) {
          return item2
        }
      })
    })
  return arr
}

const getIterateAndRunOperators = arr2 => {
  let res = []
  let result = ''
  for (let index = 0; index < arr2.length; index += 1) {
    const [operator, ...args] = arr2[index]

    if (operator === 'q') break
    res = OPERATORS[operator](res, args)

    if (!result && !res.length) {
      result = 'empty'
    } else if (!result && res.length === 1 && res[0] === 'empty') {
      result = `empty`
    } else if (result && res.length === 1 && res[0] === 'empty') {
      result = `${result}\nempty`
    } else {
      result = `${result}\n${res.join(` `)}`
    }
    res = res.filter(item => item !== 'empty')
  }

  return result
}

function getProcessStringWithOperators(inputData) {
  const arr = getParsedStringIntoArray(inputData)
  const result = getIterateAndRunOperators(arr)
  return result
}

describe('Algoritms', () => {
  it('-- getProcessStringWithOperators', () => {
    const input =
      'r\n\
f 3\n\
f 9\n\
i 1 5\n\
i 9 7\n\
r\n\
d 1\n\
d 0\n\
r\n\
f 13\n\
r\n\
r\n\
r\n\
r\n\
q'

    let outputed = getProcessStringWithOperators(input)

    const expected =
      'empty\n\
3\n\
9 3\n\
9 5 3\n\
9 5 3 7\n\
5 3 7\n\
5 7\n\
7\n\
empty\n\
13\n\
empty\n\
empty\n\
empty\n\
empty'

    expect(outputed).toEqual(expected)
  })
})

/*
[
0    ['r'], 
1    ['f', 3],
2    ['f', 9], 
3    ['i', 1, 5],
4    ['i', 9, 7], 
5    ['r'],
6    ['d', 1], 
7    ['d', 0],
8    ['r'], 
9    ['f', 13],
10   ['r'], 
11   ['r'],
12   ['r'], 
13   ['r'],
14   ['q']
]
*/

/*
0   empty
1   3
2   9 3
3.  9 5 3
4.  9 5 3 7
5.  5 3 7
6.  5 7
7.  7
8.  empty
9.  13
10. empty
11. empty
empty
empty

*/

/*


info
Go to Guide Page
support_agent
Tech Support
Prepare for Interview
Acknowledgements
Test hardware
What to Expect
Start Interview
Video question
Video question
Video question
Basic coding challenge
Preview & Submit
Finish Interview
QUESTION
NOTES
Question 4/4

"Partitioning a Linked List"

Your solution will be scored against multiple hidden test cases, with a sample case being provided for your reference.

The default code includes a mechanism for reading input strings. You will need to parse these strings into the appropriate variables as needed.

The output data type is not a concern, as long as the characters within the output box match the expected outcome.


Time limit: 90 minutes


In this problem you will be implementing a linked list of integers (int data type). The main implemented operations are insertion, deletion, and printing of the list.

Input

The input consists of lines starting with a single character. The character at the beginning of each line represents the operation to be done. Below is the description of the operations that should be implemented.

 

f N: this operation is insertion at the front (head) of the linked list. The integer N is the value to be inserted. Example: f 7 --> add 7 to the front.

 

i M N: this operation is insertion at index M. The index is zero-based. The value to be inserted is the integer N. if the index is beyond the end of the list, the value should be inserted as the last element. Negative indexes are not expected in the input so you do not have to check for it. Example: i 5 8 --> insert 8 at index 5 such that the element at 5 is 8 after successful insertion.

 

r: this operation is deletion at the front. If the list is empty, nothing should happen to the list.

 

d M: this operation is deletion at an index M. The index is zero-based. If the specified index is beyond the end of the list, nothing should happen to the list. Negative indexes are not expected in the input so you do not have to check for it. Example: d 5 --> means to delete the element at index 5.

 

q: this operation is to stop the program and exit

 

Output

The output of the program is one line for each line of the input. This line should print the complete linked list, node by node, separated by single spaces. For example, the linked list 5->7->2->8->NULL should be printed as 5 7 2 8. If the list is empty, the program should print the string "empty" all in lower case with no spaces in one line.

Code evaluation is based on your output, please follow the sample format and do NOT print anything else.

r
f 3
f 9
i 1 5
i 9 7
r
d 1
d 0
r
f 13
r
r
r
r
q
Sample Input
empty
3
9 3
9 5 3
9 5 3 7
5 3 7
5 7
7
empty
13
empty
empty
empty
empty
Sample Output
Javascript
Node.js 18.15.0
313230292827262524233334353637383940414243444546474849505152535455

            })
            return temp
        }
        catch(error) {
            return res
        }
    },
    q(res, index){ return res}
}

Console
add_boxNew Test Case


Input (editable)
r
f 3
f 9
i 1 5
i 9 7
r
d 1
d 0
r
f 13
r
r
r
r
q
Your Output

Made 3 formatting edits on line 76
 */
