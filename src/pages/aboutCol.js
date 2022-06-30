export default function AboutCol(props) {
    
    return(
        <div  className="about-col">
            <h1> {props.title} </h1>
            <p> {props.para} </p> 
        </div>
    );
}