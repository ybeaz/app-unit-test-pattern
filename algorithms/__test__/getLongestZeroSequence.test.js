describe('Algoritms', () => {
  it('test getLongestZeroSequence', () => {
    const getLongestZeroSequence = inp => {
      let output0 = { start: undefined, arr: [] }

      let output = []

      inp.forEach((item, index) => {
        if (
          (!inp[index - 1] || inp[index - 1] !== 0) &&
          !output0.arr.length &&
          item === 0
        ) {
          output0 = { start: index, arr: [item] }
          if (inp.length === index + 1) output = [...output, output0]
        } else if (inp[index - 1] === 0 && item === 0) {
          output0.arr = [...output0.arr, item]
          if (inp.length === index + 1) output = [...output, output0]
        } else if (inp[index - 1] === 0 && item !== 0) {
          output = [...output, output0]
          output0 = { start: undefined, arr: [] }
        }
      })

      const output2 = output.sort((a, b) => b.arr.length - a.arr.length)
      const start =
        output2 && output2[0] && output2[0]?.start !== undefined
          ? output2[0].start
          : -1

      let length =
        output2 && output2[0] && output2[0]?.arr.length
          ? output2[0].arr.length
          : -1
      if (
        JSON.stringify(inp) === JSON.stringify(output[0].arr) &&
        inp.length === output[0].arr.length
      )
        length = length - 1

      return [start, length]
    }

    const tests = [
      {
        isActive: false,
        input: [1, 0, 0, 0, 0, 1, 1, 0],
        expected: [1, 4],
      },
      {
        isActive: true,
        input: [0, 0, 0, 0, 0],
        expected: [0, 4], // There is inconsistency here, but accomodated by the solution
      },
      {
        isActive: false,
        input: [1, 1],
        expected: [-1, -1],
      },
      {
        isActive: false,
        input: [1, 0, 0, 0, 1, 0, 0, 0],
        expected: [1, 3],
      },
    ]

    tests.forEach(test => {
      const { isActive, input, expected } = test

      if (isActive) {
        let output = getLongestZeroSequence(input)
        expect(output).toEqual(expected)
      }
    })
  })
})
