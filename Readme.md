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


# Module 5

Using the data in context state, map over it in the Photos page and display the
images.

On the Image component, track the hover state

1. Create state boolean for "hovered"

2. When the mouse enters the Image's div, set "hovered" to true

3. When the mouse leaves the Image's div, set "hovered" to false

4. Log "hovered" to the console so you know it's changing successfully.


# Module 6

Conditionally render the heart and plus icons when an Image component is being
hovered on

1. Icon to render for the heart:

<i className="ri-heart-line favorite"></i>

2. Icon to render for the plus:

<i className="ri-add-circle-line cart"></i>