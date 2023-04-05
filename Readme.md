# Module 1

Set up a React Router for our app. We should be able to do the following:

1. Click on the words "Pic Some" in the header to go to the "/" route, which should
display the Photos component (found in the pages folder)

2. Click on the shopping cart icon in the header to go to the "/cart" route, which

should display the Cart component (found in the pages folder)


# Module 2

Set up the Context for our app.

1. In a new file, create a new context with React

2. In that same file, create a custom component that renders the Provider of the
context you created

3. For now, just pass in an empty string "" as the context provider's value prop

4, Export the custom Provider component and the full context object (so we can pass
it to the use Context hook eventually)

5. Set up your reduxreactindex.js to use the custom context Provider you created.

(You can wrap it as a parent of the Router component)


# Module 3

Add state to our context and pass it through the Provider

1. Add state to hold the array of all photos our app gets from the API

2. Pass the array of all photos through the value of the provider so it's available

anywhere the app accesses the context

# Module 4
Get the JSON data with the photos information from the API and save it to context
State.

1. As soon as the Context Provider component renders, get the JSON data from this

url:
https://raw.githubusercontent.com/bobziroll/scrimba-reactbootcampimages/master/images.json

2. Save the array of data that comes back to state. Review data fetching in React

using “fetch: