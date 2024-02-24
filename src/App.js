import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import Card from './components/Card';

function App() {
  const data=[
    {name: "aaa", email:"aaa@aaa.com"},
    {name: "abc", email:"abc@abc.com"},
    {name: "def", email:"def@def.com"},
    {name: "ghi", email:"ghi@ghi.com"}
  ]; 
  const cards=data.map(
    (cardObject)=> (
      <Card name={cardObject.name} email={cardObject.email}/>
    ));
  return (
    <div className="container-fluid p-0">
      <RegisterForm/>
      <div className="row">{cards}{cards}{cards}</div>
      <div className='footer text-center'>Copyright 2024 . All rights reserved. <a className="link" href="https://github.com/Shivam-Shukla-KGP">Shivam Shukla</a></div>
      {/* <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> */}
    </div>
  );
}

export default App;
