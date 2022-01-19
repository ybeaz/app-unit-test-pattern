/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- letterTemplateAnna', () => {
    function letterTemplate() {
      this.HappyBirthdayToYou = function (name) {
        return (
          'Hey, ' + name + '.' + ' Happy Birthday to you!' + ' Yours, Anna.'
        )
      }
      this.HappyNewYear = function (name) {
        return 'Hey, ' + name + '.' + ' Happy New Year!' + ' Yours, Anna.'
      }
      this.MyCongratulationsWithMarriage = function (name) {
        return (
          'Hey, ' +
          name +
          '.' +
          ' My congratulations with marriage!' +
          ' Yours, Anna.'
        )
      }
    }

    const name = 'Алекс'
    const letterTemplateObj = new letterTemplate()
    const letterTemplate1 = letterTemplateObj.HappyBirthdayToYou(name)
    const letterTemplate2 = letterTemplateObj.HappyNewYear(name)
    const letterTemplate3 =
      letterTemplateObj.MyCongratulationsWithMarriage(name)

    console.info('[35]', {
      letterTemplate1,
      letterTemplate2,
      letterTemplate3,
    })
    // const expected = 'Happy New Year, Mary!'
    expect(true).toBe(true)
  })
})
