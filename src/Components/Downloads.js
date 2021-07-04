import React,{Component} from 'react';
class Downloads extends Component{
    constructor(){
        super();
        this.state={
            devicelist:[],
        }
    }

    getDevice = () =>{
        fetch("https://raw.githubusercontent.com/Hycon-Devices/official_devices/master/builds/website_api.json")
        .then(response => response.json())
        .then(alldevice => this.setState({
            devicelist : alldevice
        }))
    }
    componentDidMount(){
        this.getDevice();
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center text-white">
                      <p>List of Devices Official : {this.state.devicelist.length}</p>
                  <h1>Downloads </h1>
                  </div>
                </div>
                <div className="row " >

                  
                    {
                        this.state.devicelist.map((devices, index)=>{
                            return(
                              
                              <>
                              <div className="col-md-2"></div>
                                <div className="col-md-8 form-group m-2" key={index}>
                                <div className="card bordered" id="card">
                                    <a className="card-header text-primary"> Maintainer Name : {devices.maintainer}  </a>
                                    <div className="card-body">
                                    <p className="text-danger"> <span className="device">Device :</span> {devices.filename} </p>
                                    <p className="text-danger device"> <span className="device">Version :</span> {devices.version} </p>
                                    <p> Telegram : <a class="fas fa-external-link-alt" href={devices.telegram_username}></a></p>
                                    <p> Github : <a class="fas fa-external-link-alt"  href={devices.maintainer_url}></a></p>
                                    <a className="btn btn-success mt-2" href={devices.url}>Download</a>
                                     

                                    </div>
                                   
                                </div>
                            </div>
                            </>
                          
                           
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Downloads