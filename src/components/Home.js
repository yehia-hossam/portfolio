import React,{useRef} from "react";
import CustomHook from "./CustomHook";

const Home = ()=>{
    const refTab = useRef();
    CustomHook(refTab);
    return(
<section className="home">
    <div className="content">
        <div className="name">
            I'M <span>YEHIA HOSSAM</span> Frontend Developer
        </div>
        <div className="des">
        I am a web interface designer with one year of experience, and I have designed many websites and designed user interfaces.
        </div>
        <a href="/democy.pdf" target="_blank" rel="noopener
        noreferrer">Download My Cv</a>
    </div>
<div className="avatar">
    <div className="card">
        <img src="/avatar.png" alt=""/>
     

    </div>

</div>

</section>
    )
}
export default Home;