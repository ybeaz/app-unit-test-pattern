describe('Structural Patterns', () => {
  it('-- Pattern: Bridge	Separates an object’s interface from its implementation', () => {
    function Gesture(output) {
      this.output = output
      this.tap = function () {
        this.output.click()
      }
      this.swipe = function () {
        this.output.move()
      }
      this.pan = function () {
        this.output.drag()
      }
      this.pinch = function () {
        this.output.zoom()
      }
    }

    function Mouse(output) {
      this.output = output
      this.click = function () {
        this.output.click()
      }
      this.move = function () {
        this.output.move()
      }
      this.down = function () {
        this.output.drag()
      }
      this.wheel = function () {
        this.output.zoom()
      }
    }

    function Screen() {
      this.result = []
      this.click = function () {
        this.result = [...this.result, 'Screen is selected']
      }
      this.move = function () {
        this.result = [...this.result, 'Screen is moved']
      }
      this.drag = function () {
        this.result = [...this.result, 'Screen is dragged']
      }
      this.zoom = function () {
        this.result = [...this.result, 'Screen is zoomed']
      }
    }

    function Audio() {
      this.result = []
      this.click = function () {
        this.result = [...this.result, 'Sound oink']
      }
      this.move = function () {
        this.result = [...this.result, 'Sound waves']
      }
      this.drag = function () {
        this.result = [...this.result, 'Sound scretch']
      }
      this.zoom = function () {
        this.result = [...this.result, 'Sound volume up']
      }
    }

    const screen = new Screen()
    const audio = new Audio()
    const screen02 = new Screen()
    const audio02 = new Audio()

    const handWithScreen = new Gesture(screen)
    const mouseWithAudio = new Mouse(audio)
    const handWithAudio = new Gesture(audio02)
    const mouseWithScreen = new Mouse(screen02)

    handWithScreen.tap()
    handWithScreen.pinch()

    // console.info('01', {
    //   'screen.result': screen.result,
    //   expected: ['Screen is selected', 'Screen is zoomed'],
    // })
    let expected = ['Screen is selected', 'Screen is zoomed']
    expect(screen.result).toEqual(expected)

    mouseWithAudio.move()
    mouseWithAudio.down()

    // console.info('02', {
    //   'audio.result': audio.result,
    //   expected: ['Sound waves', 'Sound scretch'],
    // })
    expected = ['Sound waves', 'Sound scretch']
    expect(audio.result).toEqual(expected)

    handWithAudio.tap()
    handWithAudio.pan()

    // console.info('[03]', {
    //   'audio02.result': audio02.result,
    //   expected: ['Sound oink', 'Sound scretch'],
    // })
    expected = ['Sound oink', 'Sound scretch']
    expect(audio02.result).toEqual(expected)

    mouseWithScreen.move()
    mouseWithScreen.wheel()

    // console.info('[04]', {
    //   'screen02.result': screen02.result,
    //   expected: ['Screen is moved', 'Screen is zoomed'],
    // })
    expected = ['Screen is moved', 'Screen is zoomed']
    expect(screen02.result).toEqual(expected)
  })
})

// Gestures
// output
// tap
// swipe
// pan
// pinch

// Mouse
// output
// click
// move
// down
// wheel

// Screen
// click
// move
// drag
// zoom

// Audio
// click
// move
// drag
// zoom
