import AboutCol from "./aboutCol";

export default function About()  {
    
        return(
            <div id ="about-div">
                
                <AboutCol title="About me" para={about1_para}/>
                <AboutCol title="What I've learned through the years" para={about2_para} />
                <AboutCol title="More to Come" para={about3_para}/>           
            </div>
        );
}

let about1_para = (
    <div>
        <p> My name is Syed Azeem Quadri, but I usually go by Azeem.
        
            In April 2022, I completed my degree in Computing Science (Specialization in Mathematics) from <a id="queens-link"  target="_blank" rel="noopener noreferrer" href="https://www.queensu.ca/"> Queen's University, Ontario</a>, and now I'm pursuing my passion for writing code! I enjoy problem-solving, challenging myself and learning new things, which is why I made this website!

            This website also allows me to talk more about my experiences more than what I can fit on my resume. 
        </p>
    </div>)

let about2_para = (
    <div>
        <p> Over the years of my education, I have learned and improved my technical and interpersonal skills. I have taken many courses that have helped me in my technical skills. Like understanding best code practices, algorithms and data structures, debugging code, understanding different languages, using version control and repository software like Github, and how to solve complex problems. I have also improved my interpersonal skills, like time management, researching, collaborating with team members, understanding and meeting requirements, and being an effective learner. </p>
    </div>)

let about3_para = (

    <div>
        <p>
        This is only the beginning, and I shall be continuously improving and adding more content to this website! If you have any suggestions for my website, feel free to shoot me an email! (Don't worry, I regularly check my junk folder!)
        </p>
    </div>)