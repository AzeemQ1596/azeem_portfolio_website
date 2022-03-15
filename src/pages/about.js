//import Header from "./header";
import img1 from './azeem-smol.jpg';
export default function About()  {
    
        return(
            <div>
                
               
                <div id = "azeem-intro">
                    <h2> Welcome to my website! </h2>
                    <img id="azeem" src={img1} alt="azeem"/>
                
                    <div className="intro-col">
                        <h3> About me </h3>    
                        <p> Hi! my name is Azeem. I've completed my Computer Science degree from Queen's University, Ontario and now, pursuing my passion in writing code. I enjoy problem-solving, challenging myself and learning new things, which were some of the reasons I built this website! This website also allows me to talk more about my experieneces more than what I can fit in my resume!
                        </p>
                    
                    </div>
                   
                    <div className="intro-col">
                        <h3> What I've learned through the years </h3> 
                        <p>Over of my the years of my education, I have learned and improved my technical and interpersonal skills. I have taken many courses that have helped me in my technical skills, like understanding best code practices, like algorithms and data structures, debugging code, understanding different languages, using version control and repository  softwares like Github. and how to solve complex problems. I have also improved my interpersonal skills, like time management, researching, collaborating with team members, understanding and meeting requirements, and being an efficient learner.</p>
                    </div>
                

                    <div className="intro-col">

                        <h3> Miscellaneous </h3>
                        <p>
                            Sorry for the lack of images as I only have one good photo. This is only the beginning and I shall be continuously improving and adding more content to this webstie! If you have any suggestions for my website feel free to shoot me an email! (Don't worry I regularly check my junk folder!).
                        </p>
                   
                    </div>
                </div>
               
            </div>
        )
}

