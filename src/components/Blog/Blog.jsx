import React from 'react';

const Blog = () => {
    return (
        <div className='m-10 p-10'>
            <h1 className='text-3xl'>1. Tell us the differences between uncontrolled and controlled components.</h1>
            <p className='mb-3'>A controlled component is one that uses props to get its current value and uses callbacks like onChange to notify users of changes. By handling the callback, maintaining its own state, and sending the updated values as props to the controlled component, the parent component "controls" the child component. This may also be referred to as a "dumb component".
A component that is uncontrolled saves its own state internally, and when you need to locate it, you query the DOM using a ref. This resembles traditional HTML a little more.</p>
            <h1 className='text-3xl '>2. How to validate React props using PropTypes</h1>
            <p className='mb-3'>We first install prop-types. To install the prop-types library, we run:

npm i prop-types. e define a component called MyComponent that takes a prop called name. We use the PropTypes.string validator to ensure that name is a string, and the isRequired modifier to indicate that the prop is required.

There are a variety of different validators available in PropTypes, including number, bool, array, object, and more. You can also create custom validators using the PropTypes.shape validator.

Using PropTypes to validate props is important because it helps to catch errors early and prevent bugs in your code. It also makes it easier for other developers who use your components to understand what props are required and what types of values are expected.




</p>
            <h1 className='text-3xl'>3. Tell us the difference between nodejs and express js.</h1>
            <p className='mb-3'>JavaScript-based server-side event-driven i/o applications can be built using the Node.js platform.
The Node.js-based Express.js framework is used to create web applications utilizing the event-driven architectural methods and ideas.</p>
            <h1 className='text-3xl'>4. What is a custom hook, and why will you create a custom hook?</h1>
            <p>A React JS software developer can employ custom React JS hooks, which are reusable functions, to add distinctive and customized functionality to React apps. Typically, one can install a third-party library and fix the issue if a feature is needed to be added.</p>

        </div>
    );
};

export default Blog;