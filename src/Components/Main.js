import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Hero from './android.svg';
import Hycon from './hycon-logo.png'
import Screenshot1 from './screenshot1.png'
import Screenshot2 from './screenshot2.png'
import Screenshot3 from './screenshot3.png'
import Screenshot4 from './screenshot4.png'
import Screenshot5 from './screenshot5.png'
import Screenshot6 from './screenshot6.png'
import Screenshot7 from './screenshot7.png'
import Screenshot8 from './screenshot8.png'
import introductor from './founder.jpg'
import madmax from './founder2.jpeg'
import thephotogenicbug from './web-dev.jpeg'
import Footer from './Footer'
class Main extends Component{


    render(){
        return(
                <div className="container" >
                <div className="row" >
                 <div className="col-md-12 mb-4 text-center" >
                   <h1 className="text-white" id="main-heading">HyconOS</h1>
                   <p className="text-white" id="paragraph">We believe in providing an enriching useful experience without having a soup of features.</p>
                   <Link to="/downloads" className="btn btn-primary">Download</Link>  
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
                <div className="col-md-12 text-center text-white">
                 <h3 >Screenshots</h3>   
                </div>  
                
                </div> 
                <div className="row text-center mt-4">
                <div className="col-md-3 mb-3">
                 <img src={Screenshot1} className="img-fluid" width="170" height="170"/>     
                </div> 
                 <div className="col-md-3 mb-3">
                 <img src={Screenshot2} className="img-fluid" width="170" height="170"/>    
                  </div> 
                 <div className="col-md-3 mb-3">
                 <img src={Screenshot3} className="img-fluid" width="170" height="170"/>    
                  </div>
                  <div className="col-md-3 mb-3">
                 <img src={Screenshot4} className="img-fluid" width="170" height="170"/>    
                  </div> 
                  <div className="col-md-3 mt-4">
                 <img src={Screenshot5} className="img-fluid" width="170" height="170"/>    
                  </div> 
                  <div className="col-md-3 mt-4">
                 <img src={Screenshot6} className="img-fluid" width="170" height="170"/>    
                  </div> 
                  <div className="col-md-3 mt-4">
                 <img src={Screenshot7} className="img-fluid" width="170" height="170"/>    
                  </div> 
                  <div className="col-md-3 mt-4">
                 <img src={Screenshot8} className="img-fluid" width="170" height="170"/>    
                  </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 pt-3">
                        <h3 className="text-white text-center">Meet The Team</h3>
                        <h5 className="text-white text-center">Core Team</h5>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card">
                    <h5 class="card-header">Name: Yash Kachave (Introdructor) </h5>
                    <div class="card-body">
                        <h5 class="card-title"> Position : Founder (Lead Dev) < img src={introductor} className="rounded" height="70px; width:70px" /></h5>
                        <a href="https://t.me/Introdructor"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/Introdructor"><i class="fab fa-github-alt m-2"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4  mt-4">
                    <div class="card">
                    <h5 class="card-header"> Name: Sagar Das (Madmax )</h5>
                    <div class="card-body">
                        <h5 class="card-title"> Position : Founder (Lead Dev) < img src={madmax} className="rounded" height="70px; width:70px" /></h5>
                        <a href="https://t.me/Prophecy_child"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/madmax7896"><i class="fab fa-github-alt m-2"></i></a>
                       
                    </div>
                    </div>
                    </div>
                    
                    <div className="col-md-4  mt-4">
                    <div class="card ">
                    <h5 class="card-header "> Name: Harsh (hpnightowl)</h5>
                    <div class="card-body width" >
                        <h5 class="card-title ">Position : Core Developer</h5>
                        <a href="https://t.me/hpnightowl"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/hpnightowl"><i class="fab fa-github-alt m-2"></i></a>
                       
                    </div>
                    </div>
                    </div>
                 
                </div> 
                <div className="row">
                    <div className="col-md-4 mt-4">
                    <div class="card">
                    <h5 class="card-header"> Name: Ankit Kene</h5>
                    <div class="card-body width">
                        <h5 class="card-title"> Position : Storage Manager</h5>
                        <a href="https://t.me/ankitkene"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/keneankit01"><i class="fab fa-github-alt m-2"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card">
                    <h5 class="card-header"> Name: rzlamrr</h5>
                    <div class="card-body width">
                        <h5 class="card-title"> Position : Manager</h5>
                        <a href="https://t.me/fakhiralkda"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/rzlamrr"><i class="fab fa-github-alt m-2"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card">
                    <h5 class="card-header"> Name: Ojas (Cryogenchill)</h5>
                    <div class="card-body width">
                        <h5 class="card-title"> Position : Core Developer</h5>
                        <a href="https://t.me/ChilledCryo"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/CryogenChill"><i class="fab fa-github-alt m-2"></i></a>
                        
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4">
                    <div class="card">
                    <h5 class="card-header"> Name: Kostas Giapis</h5>
                    <div class="card-body width ">
                        <h5 class="card-title "> Position : Core Developer</h5>
                        <a href="https://t.me/Kostasgiapis"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/tsiflimagas"><i class="fab fa-github-alt m-2"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card">
                    <h5 class="card-header"> Name: thephotogenicbug</h5>
                    <div class="card-body ">
                        <h5 class="card-title"> Position : Web Developer < img src={thephotogenicbug} className="rounded" height="70px; width:70px" /></h5>
                        <a href="https://t.me/thephotogenicbug"><i class="fab fa-telegram m-2"></i></a>
                        <a href="https://github.com/thephotogenicbug/"><i class="fab fa-github-alt m-2"></i></a>
                    </div>
                    </div>
                    </div>
                 
                </div>
                
                <div className="mt-2">
                <Footer/>
                </div>
            </div>
       
          
              
    
           
        )
    }


}
export default Main