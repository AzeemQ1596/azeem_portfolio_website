/* eslint-disable jsx-a11y/anchor-has-content */
import img1 from './images/azeem-smol.jpg';

export default function Home() {

    return(
            
            <div id="home">
               
                <div className="home-col">
                       <h1> SYED AZEEM QUADRI </h1>
                       <p> Welcome to my website <b>2.0</b></p>
                       <p>I'm a recent gradute in Computer Sciene and now pursuing my passion in writing code </p>
                
                <div id="contact-info">  
                    <h3> Contact </h3>    
                    <p> Feel free to connect with me via the following channels</p>
                    <a href="https://www.linkedin.com/in/azeem-quadri/" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
                    <a href="https://github.com/AzeemQ1596" className="fa-brands fa-github-square" target="_blank" rel="noopener noreferrer" aria-hidden="true" ></a>
                    <a href="mailto:syedazeem.quadri@queensu.ca" className="fa-solid fa-envelope" target="_blank" rel="noopener noreferrer" aria-hidden="true" ></a>
               
                </div>
                      
                </div>
                    <div className="home-col">
                        
                        <div id="azeem-div">
                                <img id="azeem-image" src={img1} alt="azeem"/>
                                <div id="azeem-overlay">
                                        <div id="credit-popup">Photo by <a href="https://www.instagram.com/_olivercao_/" target="_blank" rel="noreferrer" > Oliver Cao </a>
                                        </div>
                                
                                </div>
                        </div>
                    </div>
                
               
         
            </div>
        )
}