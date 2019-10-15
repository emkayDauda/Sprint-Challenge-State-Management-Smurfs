1. What problem does the context API help solve?
Answer: Context API eliminates the need to pass props down from parent components to deeply nested child components. State is kept at the top somewhere, and whichever child component of the parent that needs the state can just access it provided the parent is wrapped in a provider of that state.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Answer: `Actions` are the activities that may be carried out on state which modify the state. `reducers` are the functions which components use to modify state. Their role in redux is to provide a `setter` of sorts for state. `store` is the repository of `state` and `reducers` abstracted away from the components so that they may be purely presentational. The store is regarded as a 'single source of truth' because all of the data which components may need during their lifecycle can always be obtained from the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Answer: Application state refers to state that resides within the top-most component (e.g. `App`) and can be accessed or modified by the parent component or any child components however deeply nested. Component state refers to state that resides within a component. It may only be accessed by sub-components if it is passed through props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Answer: `redux-thunk` is a middleware for redux. It allows asyncrhronous programming to happen when using redux. With `redux-thunk`, `action-creators` may execute asynchronously, waiting for promises to complete before continuing execution.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Answer: Redux. Even though it is a lot of pain to set up, I very much like the concept of separating concerns. App state is kept in repository and any component can just obtain whatever data it needs from there.
