# Unit testing with Jest and Enzyme

  - Link to the repo `https://github.com/ybeaz/app-unit-test-pattern`
  - Main test example `src\Viewlayer\Components\ComponentXyzClass.test.js`
  - To run example `jest ComponentXyzClass.test.js`
  - To send questions and suggestions `t3531350@yahoo.com`
 
> Thanks Thiago and Max for inspiring interest in the topic and suggestions  

Themese of OOP patters
Abstract Factory - create an object through another function
Factory - create a type of object depending on certain conditions
Prototype - clone an fully initilized instance with default values
Singleton - create one and only one instance of the function, unique one
Flyweight - create a complex object "with lean resource/memory consumption"
Builder - create steps runner, step definer and step content functions and wire them to work together decoupling each one from another
Builder - (another version), create an object [one function], create actions with this object [second function], create steps to run actions [third function]
Template - from content point of view this is variation of the Builder theme through .prototype

Adaptor - adapts a new function (to exchange the old one) to an old code workflow by providing the same input-output interface
Bridge - passes one object methods to another object methods and provides unity interfaces
Decorator - adds or modify to the object/ function other "resposibilities" through this property, props or modify them, returning next non-instantiated object
Facade - represent a whole subsystem via one class interface
Template - adds or modify properties through prototype. The particular case is to add an a chain of command as a function via prototype
Visitor - adds or modify properties of the instantiated object(function)
Proxy - utilizes object/props structure to reduce using other recourses caching the unique values

Command - to run commands with standard interface from common object property set, similar in some sense to the Builder pattern 
Interpreter - to transform object state passing it "through another object"
Mediator - to apply to the object method of the mediator and leave a footprint of that in the mediator state
Iterator - to approach to reach all array/object members/props with stated method
Composite - to create objects in a tree structure of the "root object"
Memento - to restore object state
Observer - to perform (fire) actions (run function for example) on an objects (after and once they are subscribed); to unsubscribe it from that action if necessary
State - to store, change and return an object, that reflects state of the app. Optionally, to keep state history
Chain of responsibility - to create a method that can get (extract) a sense from data in a chain, like doing math, or processing consequently




[Markdown editor](https://dillinger.io/)
