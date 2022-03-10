/* eslint-disable jsx-a11y/anchor-has-content */
//import Header from "./header";

function Card({}) {

    return(
        <p> </p>
    )
}

export default function Projects() {

        return(
            <div>
               <div id="projects">
                <h3>Here are some of my accomplishemts over the past few years : </h3>
                <div className="project-col">
                  
               
                    <div className="project-title">
                        <h4> VS Code extension for Segment Code Tracking : </h4>
                    </div>
                    <div className="project-icons">
                        <a href="https://github.com/AzeemQ1596/Segement-Event-Tracking-VS-Code-Extension" className="fa-brands fa-github-square" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

                        <a href="https://marketplace.visualstudio.com/items?itemName=seca.segment-event-tracking" className="fa-brands fa-microsoft" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

                        <a href="https://docs.google.com/document/d/e/2PACX-1vRdt-suL7a206GDMYWYrmRglzGmCb8Pb7QS97Xoq7VTZ_uWTuQJCtNJFv0O7V1sqg/pub" className="fa-solid fa-file-pdf" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
                    </div>
                    
                        
                    
                    <p> Developed VS Code extension in TypeScript to improve developer experience of using Segment API. Implemented Agile Methodology. - Extension tracks users code by analyzing and extracting all Segment Calls using RegEx and stored in a JSON file along with attributes. - Code assistant feature created from JSON file allows user to quickly reuse previously called Segment Calls. - Created table from JSON file, viewed inside IDE and allows users to see all Segment Calls along with attributes (line number, file name, properties) and quickly locate them. Table made using jsGrid and supports dynamic theme switching between light, dark and high contrast - Uploaded the extension on Visual Studio Marketplace for developers to use. Created documentation for the extension.</p>
                </div> 
                <div className="project-col">

                
                <div className="project-title">
                    <h4>Email Spam detection :</h4>
                </div>
                    <div className="project-icons">
                        <a href="https://drive.google.com/drive/folders/1eesL1nH38q7w1w1vPQCvWTjO3q8UzLwe" className="fa-brands fa-google-drive" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

                    </div>
                    <p> Created a Machine Learning Model to detect spam emails using Python and machine learning libraries (TensorFlow, NumPy). - Preprocessed data to extract subject and body from raw .eml files to remove HTML tags, punctuations, and stop-words. - Implemented RNN model with LTSM layers for training the model. Model achieved 90% testing accuracy</p>
                </div> 
                <div className="project-col">
                    <div className="project-title">
                        <h4>QMIND :</h4>
                    </div>
                    <div className="project-icons">
                        <a href="https://github.com/AzeemQ1596/Segement-Event-Tracking-VS-Code-Extension" className="fa-brands fa-github-square" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

                        <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vSRIfL8E-hWJc_6h25ftNcjxLApuzo6VFaRyPEh7Zwp_9Z840Z2BxTQHsBjICVf4Btd8nEMP4u47o-W/pub" className="fa-solid fa-file-pdf" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
                        
                    </div>    
                    <p> Design Team Member at The Division of AI Research at QMIND, tasked to simulate an autonomous virtual driving environment. - Used Gazebo to simulate virtual 3D environments and used Python ROS2 libraries to control virtual robot in Linux OS. - Utilized LIDAR to detect other cars and utilized machine learning to facilitate in image recognition to identity lanes and curves. - Project was featured at an AI Conference (CUCAI) 2021. Research paper was selected in top 5 best papers.</p>
                </div> 
                <div className="project-col">
                    
                    <div className="project-title">
                        <h4>Waste Classification Machine Learning Model :</h4>
                    </div>
                    <div className="project-icons">
                        <a href="https://colab.research.google.com/drive/1sryqiGgOCHYW8xwAsEBdNhMLRlaHgzBe?usp=sharing" className="fa-brands fa-google-drive" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

                        <a href="https://docs.google.com/document/d/e/2PACX-1vQvbWkCRYYs3UFzJiz-52v4in-WZyoy7g3uSntzdmOHD1kiDtMytURCeSQ-Bd0i2tV-dzJMu_WfFPPW/pub" className="fa-solid fa-file-pdf" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
                    </div>
                    <p> Created a Machine Learning Model to classify images of recyclable and organic waste using Python, TensorFlow and NumPy. - Implemented CNN model with pooling layers for training the model and ADAM gradient optimizer. - Validated model to prevent overfitting and achieved 87% accuracy. Compiled the results in a report.</p>
                </div> 
                <div className="project-col">

                    <div className="project-title">
                        <h4>Airline Database Application :</h4>
                    </div>
                    <div className="project-icons">
                        <a href="https://www.youtube.com/watch?v=mfz-XRzAMr8" className="fa-brands fa-youtube" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
                    </div>
                    <p>  Created and designed a web application project to access SQL database consisting of a mockup airline database. - Used PHP Data Objects for back-end logic to create queries to retrieves data from database. Used HTML and CSS for front end. - Web application implements displaying flight schedule, adding new flights, and updating data successfully. Demo video made.</p>
                    
                </div>
                </div>
        
            </div>
        )
    
}