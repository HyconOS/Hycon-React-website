import React, {Component} from 'react';
class Ad extends Component{

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }

    render(){
        return(
            <div className='ad'>
            <ins className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-client='ca-pub-5923224042513822'
              data-ad-slot='5923224042513822'
              data-ad-format='auto' />
          </div>
        )
    }

}
export default Ad