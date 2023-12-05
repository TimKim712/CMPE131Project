import React, { useState } from 'react';
import '../App.css';
import './MakePostContent.css';
import { useHistory } from 'react-router-dom';


function MakePostContent() {
  const history = useHistory();
  const [postData, setPostData] = useState({
    username: '',
    title: '',
    type:'',
    description: '',
    eventDate: '', // Added state for event date
    image: ''
  });

  const handleChange = (e) => {
    // For file input, update the state differently
    if (e.target.name === 'image') {
      setPostData({ ...postData, image: e.target.files[0] });
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', postData.username);
    formData.append('title', postData.title);
    formData.append('type', postData.type);
    formData.append('description', postData.description);
    formData.append('image', postData.image); // Assuming 'image' is the file object
    if (postData.type === 'events') {
      formData.append('eventDate', postData.eventDate);
    }

    try {
        const response = await fetch('http://localhost:8081/posts', {
            method: 'POST',
            body: formData, // Send formData
        });

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const result = await response.json();
        console.log(result);
        alert(`Post Created!`);
        // Navigate to another route on success
        history.push('/');
      
        // Handle success here
    } catch (error) {
        console.error('Failed to Post!', error);
        // Handle errors here
    }
};


  

  return (
    <div className="MakePost-content">
      <h2>Add an Event / Post</h2>
      <form className="MakePost-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required onChange={handleChange} />

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required onChange={handleChange} />

        <label htmlFor="type">Type:</label>
        <select id="type" name="type" required onChange={handleChange}>
        <option value="">Select a Type</option>  {/* Default option */}
        <option value="events">Events</option>    {/* Replace with your actual types */}
        <option value="community">Community</option>
        <option value="news">News</option>

</select>

{/* Conditional rendering for event date */}
{postData.type === 'events' && (
          <div className="date">
            <label htmlFor="eventDate">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              onChange={handleChange}
              required={postData.type === 'events'}
            />
          
          </div>
        )}

        <label className='description' htmlFor="description">Description:</label>
        <textarea type='text' id="description" name="description" required onChange={handleChange} />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" required onChange={handleChange} />

        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

export default MakePostContent;




// import { useState } from 'react';
// import React from 'react';
// import '../App.css';
// import './MakePostContent.css';
// import { useHistory } from 'react-router-dom';

// function MakePostContent() {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     passwordConfirm:'',
//     email: ''
//   });

//   const handleChange = (e) => {
//     console.log(e.target.name, e.target.value);
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//       // Check if passwords match
//     if (formData.password !== formData.passwordConfirm) {
//       alert("Passwords do not match.");
//       return; // Stop the form submission
//     }

//     // API call
//     try {
//       const response = await fetch('http://localhost:8081/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({'username':formData.username, 'password':formData.password, 'email':formData.email})
//       });

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const result = await response.json();
//       console.log(result);

//       // this makes it go to the route below: 
//       history.push('/');
      
//       // Handle success here
//     } catch (error) {
//       console.error('Failed to sign up:', error);
//       // Handle errors here
//     }
//   }

//   return (
//     <div className="MakePost-content">
//     <h2>Add an Event / Post</h2>
//     <form className="MakePost-form" action="#" method="post" onSubmit={handleSubmit}>
  

//       <label for="username">Username:</label>
//       <input type="text" id="username" name="username" required onChange={handleChange}/>

//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password" required onChange={handleChange}/>

//       <label for="passwordConfirm">Password Confirm:</label>
//       <input type="password" id="passwordConfirm" name="passwordConfirm" required onChange={handleChange}/>

//       <label for="email">Email:</label>
//       <input type="email" id="email" name="email" required onChange={handleChange}/>

//       <input type="submit" value="Sign Up" />
//     </form>
//   </div>
//   );
// }

// export default MakePostContent;
