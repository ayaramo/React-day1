import { useState } from 'react'
import './App.css'
import user from'./assets/user.svg'

const Header = () => (
  <header className="div1">
      <div>
      <h1> Aya Ramadan </h1>
      <p> Phone : 012345678</p>
      <p> E-mail : ayaramo2000@gmail.com</p>
      <p> Address : Aswan , Egypt</p>
      </div>
      <img src={user} className="logo" alt="" />
  </header>
);

const Education=()=>(
  <section>
  <h2> Education </h2>
  <hr />
  <div className='education'>
    <h4> ITI Trainee 2024-2025</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint, ipsa voluptatibus sequi sit eligendi dolorum earum rerum, deleniti doloremque aliquid accusamus aperiam neque. Incidunt saepe et modi aspernatur at?</p>
  </div>
  <div className='education'>
    <h4> Bachelor of Science 2016-2019</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint, ipsa voluptatibus sequi sit eligendi dolorum earum rerum, deleniti doloremque aliquid accusamus aperiam neque. Incidunt saepe et modi aspernatur at?</p>
  </div>
  </section>

);

const Experience=()=>(
  <section>
  <h2> Work Experience </h2>
  <hr />
  <div className='education'>
    <h4> Frontend developer 2024-2025</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint, ipsa voluptatibus sequi sit eligendi dolorum earum rerum, deleniti doloremque aliquid accusamus aperiam neque. Incidunt saepe et modi aspernatur at?</p>
  </div>
  <div className='education'>
    <h4> Software developer 2024-2025</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint, ipsa voluptatibus sequi sit eligendi dolorum earum rerum, deleniti doloremque aliquid accusamus aperiam neque. Incidunt saepe et modi aspernatur at?</p>
  </div>
  </section>

);


const Skills = () => (
  <section>
      <h2> Skills </h2>
      <hr />
    <ul className='skill'>
      <li>Web Design <div className='pro'><div></div></div> </li>
      <li>User Interface <div className='pro'><div></div></div></li>
      <li>User Experience <div className='pro'><div></div></div> </li>
      <li>Copywriting <div className='pro'><div></div></div></li>
      <li>Speaking <div className='pro'><div></div></div></li>
      <li>Team Leading <div className='pro'><div></div></div></li>
    </ul>
  </section>
);

const Languages = () => (
  <section>
      <h2> Language </h2>
      <hr />
    <ul className='language' >
      <li>English  100%</li>
      <li>French  100%</li>
      <li>Italian  80%</li>
      <li>Chinese  35%</li>
    </ul>
  </section>
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>

    <Header />
    <Education/>
    <Experience/>
    <Skills />
    <Languages />

    </div>

    </>
  )
}

export default App
