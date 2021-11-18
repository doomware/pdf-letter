import React, {Component} from 'react';
import './AppImg.css';

const host = 'https://letter-qr.herokuapp.com';
const endpoint = host + '/api/v1/letter/';

class AppImg extends Component{
  constructor(props){
    super(props);
    this.state = {
      link: this.props.link,
      paperType: this.props.paperType,
      download: '',
      image: ''
    };
  }
  downloadDir = ''
  imagenDir = ''
  
  componentDidMount(){
    const data = {
      link: this.props.link,
      paperType: this.props.paperType
    }
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) => {
      this.setState({download: data.download});
      this.setState({image: data.image});
      // console.log(data);
      // console.log(this.state.download);
      // console.log(this.state.image);
      // console.log('---------------------------');
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps.link !== this.props.link){
      const data = {
        link: this.props.link,
        paperType: this.props.paperType
      }
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => response.json())
      .then((data) => {
        this.setState({download: data.download});
        this.setState({image: data.image});
        // console.log(data);
        // console.log(this.state.download);
        // console.log(this.state.image);
        // console.log('---------------------------');
      });
    }  
  }

  render(){
    const {download, image} = this.state
    return(
      <div id="divQr" className="col-sm">
        <img id="qrImage" src={host + image} alt="Qr" className="img-fluid" />
        <p className="pLabel">Este QR estara con la hoja en pdf</p>
        <a href={host + download} id="download" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Descargar</a>
        <p className="pLabel text-warp">{this.downloadDir} {this.imagenDir}</p>
      </div>  
    )
  }
}

export default AppImg;