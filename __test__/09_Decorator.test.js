describe('Structural Patterns', () => {
  it('-- Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    const User = function (name) {
      this.userName = `Name: ${name}`
      this.index = function () {
        return '94111'
      }
      this.outcome = function () {
        return this.name
      }
    }

    function decorator(User) {
      return function (name, address) {
        const user = new User(...arguments)

        // We close all existing properties
        Object.keys(user).forEach(item => {
          this[item] = user[item]
        })

        // We modify existing function property
        this.outcome = function () {
          return `${user.userName}, Address: ${address}, Index: ${this.index()}`
        }

        // We add a function property
        this.address = function () {
          return `Address: ${address}, Index: ${this.index()}`
        }
      }
    }

    const UserDecorated = decorator(User)
    const userDecorated = new UserDecorated(
      'Mikhail',
      '10 Market st., San Bruno'
    )

    let expected = 'Name: Mikhail'
    expect(userDecorated.userName).toBe(expected)

    expected = '94111'
    expect(userDecorated.index()).toBe(expected)

    expected = 'Name: Mikhail, Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.outcome()).toBe(expected)

    expected = 'Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.address()).toBe(expected)
  })
})

// User
// name
// say

// DecoratedUser
// user, street, city
// user
// name
// street
// city
// say
