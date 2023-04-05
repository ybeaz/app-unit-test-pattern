/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- func', () => {
    const getShiftedElemDown = (listIn, indexIn) => {
      let output = []
      listIn.forEach((item, index) => {
        if (index !== indexIn && index !== indexIn + 1) {
          output = [...output, item]
        } else if (index === indexIn) {
          output = [...output, listIn[indexIn + 1]]
        } else if (index === indexIn + 1) {
          output = [...output, listIn[indexIn]]
        }
      })

      return output
    }

    const list = [
      'Lombard St, San Francisco, CA, USA',
      'PIER 39, The Embarcadero, San Francisco, CA, USA',
      'Golden Gate Bridge, San Francisco, CA, USA',
      `Fisherman's Wharf, San Francisco, CA, USA`,
      'Alcatraz Island, San Francisco, CA, USA',
    ]

    const list2 = ['0', '1', '2', '3']

    let outputed = getShiftedElemDown(list2, 1)
    let outputed2 = getShiftedElemDown(outputed, 2)
    // console.info('getShiftedElemDown.test [35]', { list2, outputed, outputed2 })

    const expected = ['0', '2', '1', '3']
    const expected2 = ['0', '2', '3', '1']
    expect(outputed).toEqual(expected)
    expect(outputed2).toEqual(expected2)
  })
})
