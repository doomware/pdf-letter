import React, {Component} from 'react';
import AppForm from './Components/AppForm'
import AppImg from './Components/AppImg'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      link: '',
      paperType: ''
    };
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleCallback = (childData) => {
    this.setState({link: childData.link})
    this.setState({paperType: childData.paperType})
  }

  render() {
    const {link, paperType} = this.state;
    let appDownload;
    if(this.state.link === ''){
      appDownload = <br />
    }else if(this.state.link !== ''){
      appDownload = <AppImg link={link} paperType={paperType}/>
    }
    return (
      <div className="container">
        <div className="row card-main" id="rowContainer">
          <div id="divForm" className="col-sm">
            <AppForm
            formObject = {this.handleCallback}/>
          </div>
          {appDownload}
        </div>
      </div>
    );
  }
}

export default App;
