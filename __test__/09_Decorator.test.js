describe('Structural Patterns', () => {
  it('-- Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    function User(name) {
      this.name = `Name: ${name}`
      this.outcome = function () {
        return this.name
      }
    }

    function decorator(User) {
      return function (name, address) {
        this.user = new User(name)
        this.address = `Address: ${address}`
        this.outcome = function () {
          // console.info('[2]', { ...user, address: address02 })
          return `${this.user.name}, ${this.address}`
        }
      }
    }

    const UserDecorated = decorator(User)
    const userDecorated = new UserDecorated(
      'Mikhail',
      '10 Market st., San Bruno'
    )
    const outcome = userDecorated.outcome()

    const expected = `Name: Mikhail, Address: 10 Market st., San Bruno`
    expect(outcome).toBe(expected)
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
