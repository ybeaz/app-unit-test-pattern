import { testLogger } from '../../src/Shared/testLogger' // './testLogger'

/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Mediator  Defines simplified communication between classes', () => {
    const log = testLogger('arr')

    function Participant(name) {
      this.name = name
      this.chatroom = null
    }

    Participant.prototype = {
      send(message, to) {
        this.chatroom.send(message, this, to)
      },
      receive(message, from) {
        log.add(`${from.name}: ${message}`)
      },
    }

    function Chatroom() {
      this.participants = {}
      this.register = function (participant) {
        this.participants[participant.name] = participant
        participant.chatroom = this
      }
      this.send = function (message, from, to) {
        if (to) to.receive(message, from)
        else {
          for (const key in this.participants) {
            if (this.participants[key] !== from) {
              this.participants[key].receive(message, from)
            }
          }
        }
      }
    }

    var yoko = new Participant('Yoko')
    var john = new Participant('John')
    var paul = new Participant('Paul')
    var ringo = new Participant('Ringo')

    var chatroom = new Chatroom()
    chatroom.register(yoko)
    chatroom.register(john)
    chatroom.register(paul)
    chatroom.register(ringo)

    yoko.send('All you need is love.')
    yoko.send('I love you John.')
    john.send('Hey, no need to broadcast', yoko)
    paul.send('Ha, I heard that!')
    ringo.send('Paul, what do you think?', paul)

    const expected = [
      'Yoko: All you need is love.',
      'Yoko: All you need is love.',
      'Yoko: All you need is love.',
      'Yoko: I love you John.',
      'Yoko: I love you John.',
      'Yoko: I love you John.',
      'John: Hey, no need to broadcast',
      'Paul: Ha, I heard that!',
      'Paul: Ha, I heard that!',
      'Paul: Ha, I heard that!',
      'Ringo: Paul, what do you think?',
    ]

    expect(log.show()).toEqual(expected)
  })
})

// Participant
// name
// chatroom

// Participant
// send
// message, to
// receive

// Chatroom
// participants
// register
// send
