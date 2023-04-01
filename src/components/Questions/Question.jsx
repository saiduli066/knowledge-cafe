import React from 'react';

const Question = () => {
    return (
      <div className='bg-light p-4 ' >
        <h4>Props vs State</h4>
        <p>
          <small>
            The ownership of the data on each component makes a difference. The
            component itself updates the state, which is locally owned. A parent
            owns the props and has read-only access to them. Props can be
            changed only if an upstream shift is caused by a callback function
            passed on to the child.
          </small>
        </p>

        <h4>How does? useState work</h4>
        <p>
          <small>
            UseState is a React Hook that allows users to add state to a
            functional component. The current state and a function to update it
            are both values in an array that is returned. Every time the setter
            function is called, the Hook takes an initial state value as an
            argument and returns an updated state value.
          </small>
        </p>
        <h4>Purpose of useEffect other than fetching data.</h4>
        <p>
          <small>
            The useEffect in react js allows users to perform side effects in
            components. The react useEffect examples of side effects include
            retrieving data, direct DOM updates, and timers. The second argument
            is optional.
          </small>
        </p>
        <h4>How does ReactJs work</h4>
        <p>
          <small>
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called props. It's possible to have as many components as necessary without
            cluttering your code.
          </small>
        </p>
      </div>
    );
};

export default Question;