 
 import profilePic from './assets/onepicelogo.jpg'
 
 function Card(){
    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Sarthak Pradhan</h2>
            <p className="card-text">Swinburne University </p>

        </div>
    );
 }

 export default Card