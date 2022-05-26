import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[700px] mb-8'>
            <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Questions/Answers</h3>
            <div className='w-11/12 md:w-3/4 mx-auto'>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q1. How will you improve the performance of a React Application?</p>
                    <p className='text-xl pt-2'>A: There are many ways or best practices to keep react application performance smooth and fast. For example, making sure that components recieve only the props that are reqired. It will stop over-rendering unnecessary features. We can use code-splitting using dynamic import functions. We can also use lazy loading to load images only when necessary to make website loading faster.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q2.What are the different ways to manage a state in a React application?</p>
                    <p className='text-xl pt-2'>A: There are four types of state we have to manage in react. They are local sate, global state, server state, and url state. To manage local state we can use useState. For global state, we can use react's built in context API. We can also use useReducer for managing local or global state where it's initial state will be a reducer. For server state we can use useState and useEffect together. For a easier solution we can use react query or swr library. To manage the url state, we can use useHistory or useLocation. We can use useParams for route parameters. </p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q3.How does prototypical inheritance work?</p>
                    <p className='text-xl pt-2'>A: Prototypical inheritance is a feature of JavaScript to add methods and properties in an object. In JavaScript, every object we create has a base object called __proto__. Even if we create an array or function they have a object prototype in them and that prototype has the __proto__ object in them. In __proto__ there are some built in methods which will be available for all object. If we call some method and JavaScript can't find that method in that particular object it will keep searching upward until the __proto__ object and if not found then it will throw error.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q4.Why you do not set the state directly in React?</p>
                    <p className='text-xl pt-2'>A: We don't set the state directly in React because of its lifecyle phases. When we render an app it goes through constructor phase, render phase and componentDidMount phase. And reacts virtual dom keeps track where each variable and component is mounted. So when we change a variable that is in state it can go to it's previous mount and check which variable is changed and update it accordingly. Now if we set variables directly react won't be able to find the changes and update it until we reload the app.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q5.What is a unit test? Why should write unit tests?</p>
                    <p className='text-xl pt-2'>A: Unit testing is a software development process is which the smallest testable parts of an application, called units, are tested individually and independently for proper operation. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money and helps developer write better code.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q6. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                    <p className='text-xl pt-2'>A: Here's the code that implements the search:
                    </p>
                    <div class="mockup-code my-2">
                        <pre data-prefix="1"><code>products.filter(product=&gt;product.name.includes('search input'))</code></pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;