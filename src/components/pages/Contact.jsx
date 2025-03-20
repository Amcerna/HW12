import { useState, useEffect} from 'react';

export default function Contact() {
  const [name ,setName] = useState(" ");
  const [email ,setEmail] = useState(" ");
  const [message ,setMessage] = useState(" ");
  const [lastTarget, setLastTarget] = useState(" ");  



  const handleNameBlur = (event) => {
    setName(event.target.value);
    if(name === "") {
      setLastTarget("name");
    }
  }
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
    if(email === "") {
      setLastTarget("email");
    }
  }
  const handleMessageBlur = (event) => {
    setMessage(event.target.value);
    if(message === "") {
      setLastTarget("message");
    }
  }

  const HandleError = (props) => {
      if(props.name === "" && props.lastTarget === "name") {
        return <p>name is required</p>
      } else if(props.email === "" && props.lastTarget === "email") {
        return <p>email is required</p>
      } else if(props.message === "" && props.lastTarget === "message") {
        return <p>message is required</p>
      } else {
        return
      }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" onBlur={handleNameBlur}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleEmailBlur}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleInputPassword1" onBlur={handleMessageBlur}></textarea>
        </div>
        <HandleError name={name} email={email} message={message} lastTarget={lastTarget}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
