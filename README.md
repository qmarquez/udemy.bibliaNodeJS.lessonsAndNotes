# [PERSONAL PROJECT] [02] NodeJs Basics - from callback to promises.
Just console simple app.

## Concepts details.
### -> Callback
> A function who serves as argument to another function, the second one can call it.

| Advantages                        | Disadvantages                                           |
| --------------------------------- | ------------------------------------------------------- |
| **Simple**, conceptually          | **Toscas**, when nesting many (Callback hell)           |
| **Universal**, they are JS native | **Little intuitive**, to understand the flow is tedious |

#### Notes
*· First callback argument allways will be the error.*

### -> Promise
> **_Object_** wich represent the end or fail of a asinconous operation.

| Advantages                                                  | Disadvantages                                               |
| ----------------------------------------------------------- | ----------------------------------------------------------- |
| **Easily chaining**, clair and easy to chain hadling a flow | **No exceptions**, require .catch() method to handel errors |
| **Powerfull**, really capable to handle complex async ops   |

#### Notes
*· use promise instead callbacks. Watch out with promise hell.*

### -> async/await
> An **async** function returns a Promise object. If the function return a value the promise _resolve_ that value and if throws an error or falls on a exception it _reject_ that error or exception.

> The **await** stops an **async** execution until a promise will resolve or reject.                                          |

#### Notes
*· requires a tryCatch block.*

---
#NodeJS\
#JavaScript\
#ES6