/**
 * @description Pattern: Composite	A tree structure of simple and composite objects
 * @narrative
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 08_Composite.test`
 */

describe('Structural Patterns', () => {
  it('-- Pattern: Composite	A tree structure of simple and composite objects', () => {
    function Node(name) {
      this.name = name
      this.children = []
    }

    Node.prototype = {
      add(node) {
        this.children = [...this.children, node]
      },
    }

    let tree = {}
    let step = 0

    tree = new Node('root')
    const right = new Node('right')
    const left = new Node('left')
    const rightLeft = new Node('right-left')
    const rightRight = new Node('right-right')
    const leftLeft = new Node('left-left')
    const leftRight = new Node('left-right')
    tree.add(right)
    tree.add(left)
    right.add(rightLeft)
    right.add(rightRight)
    left.add(leftLeft)
    left.add(leftRight)

    let branches = []
    function callback(name) {
      branches = [...branches, name]
    }

    function traverse(node, callback) {
      if (node.children.length > 0) {
        node.children.forEach(item => traverse(item, callback))
      }
      callback(node.name)
    }

    traverse(tree, callback)

    const expected = [
      'right-left',
      'right-right',
      'right',
      'left-left',
      'left-right',
      'left',
      'root',
    ]
    // console.info('traverse', { tree, branches, expected })
    expect(branches).toEqual(expected)
  })
})

// Node
// children
// name

// Node
// add
// remove
// getChild
// hasChildren

// traverse
// node
