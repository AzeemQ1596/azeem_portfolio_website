/* eslint-disable jsx-a11y/anchor-has-content */
//import Header from "./header";
import ProjectCol from "./projectCol";

export default function Projects() {
  
    return(
        <div id="projects">
                
                <h2>Here are some of my accomplishemts over the past few years</h2>

                <ProjectCol title="Segment Code Tracking" links={project_link1} para={project_para1} />
                <ProjectCol title="Email Spam detection Model" links={project_link2} para={project_para2}/>
                <ProjectCol title="Highway Simulation Project" links={project_link3} para={project_para3}/>
                <ProjectCol title="Waste Classification Model" links={project_link4} para={project_para4}/>
        </div>
        )
    }

let project_link1 = (
    <div >
        <a href="https://github.com/AzeemQ1596/Segement-Event-Tracking-VS-Code-Extension" className="fa-brands fa-github-square" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

        <a href="https://marketplace.visualstudio.com/items?itemName=seca.segment-event-tracking" className="fa-brands fa-microsoft" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

        <a href="https://docs.google.com/document/d/e/2PACX-1vRdt-suL7a206GDMYWYrmRglzGmCb8Pb7QS97Xoq7VTZ_uWTuQJCtNJFv0O7V1sqg/pub" className="fa-solid fa-file-pdf" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
    </div>
);

let project_link2 = (
    <div>
        <a href="https://drive.google.com/drive/folders/1eesL1nH38q7w1w1vPQCvWTjO3q8UzLwe" className="fa-brands fa-google-drive" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
    </div>
);

let project_link3 = (
    <div>
        <a href="https://github.com/AzeemQ1596/Segement-Event-Tracking-VS-Code-Extension" className="fa-brands fa-github-square" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

        <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vSRIfL8E-hWJc_6h25ftNcjxLApuzo6VFaRyPEh7Zwp_9Z840Z2BxTQHsBjICVf4Btd8nEMP4u47o-W/pub" className="fa-solid fa-file-pdf" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
    </div>
);

let project_link4 = (
    <div>
        <a href="https://colab.research.google.com/drive/1sryqiGgOCHYW8xwAsEBdNhMLRlaHgzBe?usp=sharing" className="fa-brands fa-google-drive" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>

        <a href="https://docs.google.com/document/d/e/2PACX-1vQvbWkCRYYs3UFzJiz-52v4in-WZyoy7g3uSntzdmOHD1kiDtMytURCeSQ-Bd0i2tV-dzJMu_WfFPPW/pub" className="fa-solid fa-file-pdf" target="_blank" rel="noopener noreferrer" aria-hidden="true"></a>
    </div>
);

let project_para1 = (
    <div>
        <p> This is probably one of my most proud projects I've ever done (yet!). This was done for our Capstone project made in collaboration with <a href="https://www.linkedin.com/in/eunice-js-choi/" target="blank" rel="noopenter noreferrer"> Eunice Choi</a>, and under the supervision of <a href="https://sophiaytian.com/" target="blank" rel="noopenter noreferrer"> Prof. Yuan Tian </a>. The main idea of the project was to make a code tracking tool for developers who use the <a href="https://segment.com/" target="_blank" rel="noopener noreferrer" aria-hidden="true">Segment</a> API, a customer data platform. Segment is used by developers to see how their customers interact with their website. As their website grows bigger, more Segment API calls are added, which makes it harder to keep track of them, especially for developers. </p>
        
        <p> We use regular expressions (RegEx) to do a complex and smart search in the user's codebase for all Segment API calls, and collect them in present them in a table right inside the IDE! This table shows information like line number, file name and other meta data of the Segment call. From here, developers can double-click on the row which will open the document inside the IDE and highlight the line where this is present. Users can also sort, filter the rows in the table too. A cool feature of this table is that it has dynamic theme switching, that automatically switches between light, dark and high-contrast themes depending on the user's IDE theme for better visual clarity. </p>

        <p> Another feature of the extension is that it allows users to reuse previously used API calls from the table. Overall this greatly improved developer experience and has removed some of the mundane and tedious tasks when using the Segment API. </p>
                    
        <p> Now I know what you're all thinking: "But why not do a simple Cmd+f/Ctrl+f search to locate the Segment API calls??" Well, user's not only have to track these API calls, but also see at a glance where all the API calls are present and the types of API calls present. And as mentioned earlier, as the website grows bigger, more API calls are needed, and it becomes harder to keep track of all the API calls. </p>
    </div>
);

let project_para2 = (
    <div>
        <p> This was a machine learning project to classify between spam and ham emails (yes non-spam emails are called ham emails). I used Python and machine learning libraries like TensorFlow and Numpy. I used the <a href="https://github.com/erayon/Email-spam-filter-naive-bayes-classifier-scikit-learn-text-classification/tree/master/CSDMC2010_SPAM/CSDMC2010_SPAM">CSDMC2010 SPAM corpus </a> which contains 4327 training and 4292 testing data. </p>

        <p> The data required a lot of preprocessing before any training could be done, like removing all the HTML tags, subject tags, stop words and punctuation. Then finally I was able to implement a RNN (recurrent neural network) with LTSM layers to train the model. The model achieved 90% testing accuracy. </p>
    </div>

);

let project_para3 = (
    <div>
        <p> This was a project done with QMIND, my university's AI club. I was part of a team with a team leader. Our task was to simulate a virtual autonomous driving environment. Because of the COVID pandemic, our project was done in a virtual environment using Gazebo. This was also where I was introduced to Linux and using virtual machine. I first used Windows 10 VM feature before moving on to Oracle VM VirtualBox.</p>

        <p> We used ROS2, an open-source framework for robotics, inside Gazebo to implement and control a virtual Turtlebot. To get the Turtlebot to detect the road and lane we utilized the onboard camera sensor and fed the image to a machine learning model through various transformation. Then finally to detect other cars on the road we utilized the onboard LIDAR scan to detect objects in its vicinity. Combing these two techniques we were able to have the car drive around a virtual track and adjust its speed based on the curve of the road and other Turtlebots present. </p>

        <p> Our project was featured at <a href="https://cucai.ca/">CUCAI</a>, an AI conference in 2021 and our research paper was selected in the <a href="https://www.linkedin.com/posts/qumind_proceedings-of-cucai-2021-activity-6794786756949532672-NJdQ/"> top 5 best papers! </a> </p>
    </div>
);

let project_para4 = (
    <div>
         <p> This was a machine learning group project to classify images of recyclable and organic waste. This project was made using Python, TensorFlow and Numpy. We got our dataset from Kaggle, which contains 2513 images. From here we were able to do the necessary preprocessing steps, like resizing the images and converting the images.</p>

        <p> We implemented a convolutional neural network (which is best used for image classification) with pooling layers to train the model. We used the ADAM optimizer for gradient descent.Random Zoom and Dropout Layers were added to prevent overfitting. Our model achieved 87% accuracy on the testing data. </p>
    </div>
);