import React ,{useEffect,useRef} from "react";
import "./App.css";
import anime from "animejs";

function App() {

  const containerRef=useRef(null);
  useEffect(()=>{
    const container=containerRef.current;
    container.innerHTML="";

    for(let i=1;i<=100;i++){
      let dot=document.createElement("div");
      dot.classList.add("element")
      container.appendChild(dot);
    }

    let dotAll=container.querySelectorAll(".element");
    let animation=anime.timeline({
      targets:dotAll,
      easing:"easeInOutExpo",
      loop:true,
      delay:anime.stagger(100,{grid:[10,10], from:"center"}),
    });

    animation.add({
      rotateZ:180,
      translateY:anime.stagger(0,{grid:[10,10], from :"center", axis:"y"}),
      translateX:anime.stagger(0,{grid:[10,10], from :"center", axis:"x"}),
      opacity:1,
    })

    .add({
      borderRadius:50,
    })

    .add({
      scale:0.2,
      opacity:0.2,
    })

    animation.add({
      rotateZ:180,
      translateY:anime.stagger(0,{grid:[10,10], from :"center", axis:"y"}),
      translateX:anime.stagger(0,{grid:[10,10], from :"center", axis:"x"}),
      opacity:1,
    })

    .add({
      scale:1,
      borderRadius:0,
    })

    .add({
      rotateZ:-90,
    })
  },[])

  return (
    <div>
      {/* hEeder section start */}
      <header>
        <a href="#" className="logo">
          Logo
        </a>
        {/* {Navigation} */}

        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      {/* End header section */}


      {/* Section hero */}

      <section>
        <div className="Content">
          <h2> Level Up Your Website <b>Anime.js</b> </h2>
          <p>Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API.
          It works with CSS properties, SVG, DOM attributes and JavaScript Objects.</p>

          <button className="btn">
          <a href="https://animejs.com/" target="main">Learn More </a>
          </button>
        </div>
        {/* Section end */}


        {/* AnimationArea */}

        <div className="container" ref={containerRef}>

        </div>


      </section>
      

    </div>
  );
}

export default App;
