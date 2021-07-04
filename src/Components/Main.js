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
                   <Link to="/downloads" className="btn btn-primary">Download</Link>  <br/><br/>
                   <a href="https://instagram.com/hyconos"><i class="fab fa-instagram m-2 fa-2x"></i></a>
                    <a href="https://twitter.com/HyconOS"><i class="fab fa-twitter m-2 fa-2x"></i></a>
                    <a href="https://github.com/HyconOS"><i class="fab fa-github m-2 fa-2x"></i></a>
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
                    <a  href="https://forms.gle/ZPv5AwP3A5uABPmY6" className="text-info form-link">Apply For Maintainership</a>
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
                    <div class="card" id="card">
                    <h5 class="card-header">Name: Yash Kachave (Introdructor) </h5>
                    <div class="card-body">
                        <h5 class="card-title"> Position : Founder (Lead Dev) < img src={introductor} className="image" height="70px; width:70px" /></h5>
                        <a href="https://t.me/Introdructor"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/Introdructor"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4  mt-4">
                    <div class="card" id="card">
                    <h5 class="card-header"> Name : Sagar Das (Madmax )</h5>
                    <div class="card-body">
                        <h5 class="card-title"> Position : Founder (Lead Dev) < img src={madmax} className="image" height="70px; width:70px" /></h5>
                        <a href="https://t.me/Prophecy_child"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/madmax7896"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                       
                    </div>
                    </div>
                    </div>
                    
                    <div className="col-md-4  mt-4">
                    <div class="card " id="card">
                    <h5 class="card-header "> Name : Harsh (hpnightowl)</h5>
                    <div class="card-body width" >
                        <h5 class="card-title ">Position : Core Developer</h5>
                        <a href="https://t.me/hpnightowl"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/hpnightowl"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                       
                    </div>
                    </div>
                    </div>
                 
                </div> 
                <div className="row">
                    <div className="col-md-4 mt-4">
                    <div class="card" id="card">
                    <h5 class="card-header"> Name : Ankit Kene</h5>
                    <div class="card-body width">
                        <h5 class="card-title"> Position : Storage Manager</h5>
                        <a href="https://t.me/ankitkene"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/keneankit01"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card" id="card">
                    <h5 class="card-header"> Name : rzlamrr</h5>
                    <div class="card-body width">
                        <h5 class="card-title"> Position : Manager</h5>
                        <a href="https://t.me/fakhiralkda"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/rzlamrr"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card" id="card">
                    <h5 class="card-header"> Name : Ojas (Cryogenchill)</h5>
                    <div class="card-body width">
                        <h5 class="card-title"> Position : Core Developer</h5> 
                        <a href="https://t.me/ChilledCryo"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/CryogenChill"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                        
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Kostas Giapis</h5>
                    <div className="card-body width ">
                        <h5 class="card-title "> Position : Core Developer</h5>
                        <a href="https://t.me/Kostasgiapis"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/tsiflimagas"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div class="card" id="card">
                    <h5 class="card-header"> Name : thephotogenicbug</h5>
                    <div class="card-body ">
                        <h5 class="card-title"> Position : Web Developer < img src={thephotogenicbug} className="image" height="70px; width:70px" /></h5>
                        <a href="https://t.me/thephotogenicbug"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/thephotogenicbug/"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                 
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-center text-white mt-3">
                        <h4>Designers</h4>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4 mt-4" id="designer-card">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name :  Shanky </h5>
                    <div className="card-body width ">
                        <h5 class="card-title "> Position : Designer </h5>
                        <a href="https://t.me/ShankyGotThatArt"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                      
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Ajay Bhojani AB </h5>
                    <div className="card-body width ">
                        <h5 class="card-title "> Position : Designer </h5>
                        <a href="https://telegram.dog/Ajay_Bhojani"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/Ajay-Bhojani"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center text-white">
                        <h5>Maintainers</h5>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Abhishek (abhixv) </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi Note 8 Pro </label><br/>
                        <a href="http://t.me/abhixv"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/abhixv"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Nasir Ali </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Poco X2/Redmi K30 </label><br/>
                        <label class="card-title "> CodeName : Phoenix/Phoenixin </label><br/>
                        <a href="https://t.me/NasirAli17"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/Nasir-buddy"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Hariprakash </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi Note 7 pro </label><br/>
                        <label class="card-title "> CodeName : Violet </label><br/>
                        <a href=""><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href=""><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Brian </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi Note 7/7S </label><br/>
                        <label class="card-title "> CodeName : lavender </label><br/>
                        <a href="https://t.me/whtisusername"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/whtisusername"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Anurag Bhaumik </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi K20 Pro </label><br/>
                        <label class="card-title "> CodeName : raphael</label><br/>
                        <a href="https://t.me/wckd12"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/anuragbhaumik"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : MADMAX </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi Note 8 </label><br/>
                        <label class="card-title "> CodeName : Ginkgo</label><br/>
                        <a href="https://t.me/Prophecy_child"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/madmax7896"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Introdructor </h5>
                    <div className="card-body width-maintainer">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi Note 8/8T </label><br/>
                        <label class="card-title "> CodeName : Ginkgo/Willow </label><br/>
                        <a href="https://t.me/Introdructor"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/Introdructor"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Ojas (Cryogenchill) </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : One Plus 5 & One Plus 8 </label><br/>
                        <label class="card-title "> CodeName : Cheeseburger & Instantnoodle </label><br/>
                        <a href="https://t.me/ChilledCryo"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/CryogenChill"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : HaSSaN </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device :  (Redmi Note 9S / 9 Pro / 9 Pro Max / Poco M2 Pro) & (Realme X) </label><br/>
                        <label class="card-title "> CodeName :  MiAtoll & RMX1901</label><br/>
                        <a href="https://t.me/HaSSaN_MoHl"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/HaSSaN-L"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : TheTablaster </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Realme 3 Pro & One Plus 8T </label><br/>
                        <label class="card-title "> CodeName :RMX1851 & Kebab </label><br/>
                        <a href="https://t.me/V3NK4135H"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/Blaster4385"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : Christian de la Cruz </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Xiaomi Mi 6X </label><br/>
                        <label class="card-title "> CodeName : Wayne </label><br/>
                        <a href="https://t.me/chdelacr"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/chdelacr"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : DustXyZ </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi S2/Y2 </label><br/>
                        <label class="card-title "> CodeName : YSL </label><br/>
                        <a href="https://t.me/NotReallyDust"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/dustxyz"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : BoxBoi </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : (Redmi Note 9) & (Redmi 9/Poco M2) </label><br/>
                        <label class="card-title "> CodeName :  Merlin & Lava</label><br/>
                        <a href="http://t.me/Box_Boi"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/Box-boi"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : BolaRamy </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Redmi Note 10 Pro </label><br/>
                        <label class="card-title "> CodeName : Sweet/Sweetin </label><br/>
                        <a href="http://t.me/Bolaalex"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/bola980"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : XtremeOrnob  </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Xiaomi POCO F1 </label><br/>
                        <label class="card-title "> CodeName : beryllium </label><br/>
                        <a href="https://t.me/XtremeOrnob"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/XtremeOrnob"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="card" id="card">
                    <h5 className="card-header"> Name : SriBalaji and Arneesh </h5>
                    <div className="card-body width-maintainer ">
                        <label class="card-title "> Position : Device Maintainer </label><br/>
                        <label class="card-title "> Device : Realme 6 Series </label><br/>
                        <label class="card-title "> CodeName : RMX2001 </label><br/>
                        <a href="https://t.me/TheCloverly"><i class="fab fa-telegram m-2 fa-2x"></i></a>
                        <a href="https://github.com/iamthecloverly"><i class="fab fa-github-alt m-2 fa-2x"></i></a>
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