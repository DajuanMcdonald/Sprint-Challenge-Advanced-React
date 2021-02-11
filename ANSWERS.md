## Self-Study/Essay Questions

        - [x] Why would you use class component over function components (removing hooks from the question)?

        Class components provide additional features that do not exist in functional components.
        There are many applications that use class Components, so it is beneficial to adapt to other code bases
        with similar structure. Finally, class components provide a way to use life-cycle methods that are not present
        in functional components. (Class components are Stateful components)

        - [ ] Name three lifecycle methods and their purposes.

        componentDidMount(), runs after a component renders to the DOM. This method's purpose is to hold EventListeners.

        componentDidUpdate(), runs when adding changes to the DOM. This method's purpose is to operate on the DOM whenever
        a component has updated. This is where one can perform network requests.

        getSnapshotBeforeUpdate(), is called between render and the updated component. This method's purpose is to snap shot
        the previous State and previous Props on the DOM. (prevState, prevProps)

        - [ ] What is the purpose of a custom hook?

        Custom Hooks hold stateful logic, are re-usable, extend pieces of stateful logic, and bring compositional power
        to compose multiple hooks into one. Custom hooks purpose is to seperate Logic from Presentation.

        - [ ] Why is it important to test our apps?

        Automated testing resuces risk of bugs in production code, gives a developer confidence in their applications,
        act as a safety net when making coding changes, and reduces the risks associated with regression.
