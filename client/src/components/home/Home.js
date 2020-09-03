
import M from 'materialize-css'
import './../../styles/Home.scss'


import React, { Component } from 'react'


import DownloadFormAudio from '../forms/DownloadFormAudio'
import DownloadFormVideo from '../forms/DownloadFormVideo'






class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }





  render() {
    return (
      <div className="container">


        <div id="myHeroHolder">
          <img src="/images/InLove.svg" alt="" id= "myHero" />
          <h3 className= "red-text center-align" id= "myHeroTitle"><i className="fa fa-youtube"></i> <span>Downloader</span></h3>
        </div>    





        <div className="row">
          <div className="col s12">
            
 
 
 
            <ul className="tabs">
              <li className="tab col s6">
                <a href="#myMp3">Mp3 Download</a>
              </li>
              <li className="tab col s6">
                <a href="#myMp4">Mp4 Download</a>
              </li>
            </ul>





            <div className="col s12" id="myMp3">
              <DownloadFormAudio/>
            </div>

 
  
            <div className="col s12" id="myMp4">
              <DownloadFormVideo/>
            </div>





            
          </div>
        </div>  






        
         
      </div>
    )
  }
}

export default Home

