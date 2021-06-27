import React, {Component} from 'react';
import Hero from './android.svg';
import Hycon from './hycon-logo.png'
class Main extends Component{


    render(){
        return(
                <div className="container" >
                <div className="row" >
                 <div className="col-md-6" >
                   <h1 className="text-white" id="main-heading">HyconOS</h1>
                   <p className="text-white" id="paragraph">We believe in providing an enriching useful experience without having a soup of features.</p>
                   <button className="btn btn-primary">Download</button>  
                 </div>
                 <div className="col-md-6">
                     <img src={Hero} className="img-fluid" id="hero"/>
                 </div>
                </div> 
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <h2 className="text-white text-center">About us</h2>
                    </div>
                     <div className="col-md-4">
                         <img src={Hycon} className="img-fluid" />
                     </div>
                     <div className="col-md-7 mt-5">
                     <p className="text-justify text-white mt-2" id="paragraph">
                       HyconOS focuses on having a balance of features and simplicity. We believe in providing an enriching useful experience without having a soup of features. 
                        Our team comprises of beginners as well as industry veterans. Our working pattern is quite flexible. Under the guidance of our skillful leaders, 
                        newcomers are welcome and are also encouraged to try things and develop their skills
                    </p>
                     </div>
                </div> 
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-white text-center">Meet The Team</h3>
                    </div>
                    <div className="col-md-4 pt-5">
                    <div class="card">
                    <h5 class="card-header">Yash Kachave (Introdructor)</h5>
                    <div class="card-body">
                        <h5 class="card-title">Founder (Lead Dev)</h5>
                        <a href=""><i class="fab fa-telegram m-2"></i></a>
                        <a href=""><i class="fab fa-github-alt m-2"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4  pt-5">
                    <div class="card">
                    <h5 class="card-header">Sagar Das (Madmax )</h5>
                    <div class="card-body">
                        <h5 class="card-title">Founder (Lead Dev)</h5>
                        <a href=""><i class="fab fa-telegram m-2"></i></a>
                        <a href=""><i class="fab fa-github-alt m-2"></i></a>
                       
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4  pt-5"></div>
                 
                </div> 

            </div>
       
          
              
    
           
        )
    }


}
export default Main