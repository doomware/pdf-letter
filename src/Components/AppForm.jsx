import React, {Fragment, Component} from 'react';
import thumb1 from '../img/thumb1.png'
import thumb2 from '../img/thumb2.png'
import './AppForm.css'

// const host = 'http://localhost:8000';
// const endpoint = host + '/api/v1/letter/';

class AppForm extends Component {
  constructor(){
    super();
    this.state = this.getInitialState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  getInitialState = () => ({
    link: "",
    paperType: "lines",
  })

  resetState = () => {
    this.setState(this.getInitialState());
  }

  handleInputChange(event){
    this.setState({[event.target.name] : event.target.value})
  }

  sendData(event){
    event.preventDefault();
    if(this.state.paperType === ''){
      this.setState({paperType: 'lines'})
    };
    this.props.formObject(this.state)
    event.target.reset();
    this.resetState();
  }
  
  render(){
    let actioner;
    if(this.state.link === ''){
      actioner = <span/>
    }else if(this.state.link !== ''){
      actioner = <input type="submit" value="Crear hoja" id="send" className="btn btn-secondary" />
    }
    return (
      <Fragment>
        <form name="letter_form" id="letter_link" method="post" className="center" onSubmit={this.sendData}>
          <h3 htmlFor="name" className="labelName">
            Hoja para carta
          </h3>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="card-header">
                <a href="#collapseOne" className="card-link pLabel" data-toggle="collapse">
                  Contenido
                </a>
              </div>
              <div id="collapseOne" className="collapse show" data-parent="#accordion">
                <div className="card-body" id="card-content">
                  <div className="divDescription">
                    <label htmlFor="link" className="pDescription">Ingrese el enlace</label>
                  </div>
                  <div className="form-outline divDescription">                  
                    <input type="url" name="link" id="link" className="form-control" placeholder="Enlace" onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="card-header">
                <a href="#collapseTwo" className="collapsed card-link pLabel" data-toggle="collapse">
                  Tipo de hoja
                </a>
              </div>
              <div className="paper-group collapse" id="collapseTwo" data-parent="#accordion">
                <div className="card-group">
                  <div className="card">
                    <div className="card-body">
                      <input className="radio" type="radio" name="paperType" id="lines" value="lines" onChange={this.handleInputChange} defaultChecked/>
                      <label htmlFor="lines" className="label">
                        <img className="card-img-top" src={thumb1} alt="Con lineas" id="paper" />
                      </label>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <input type="radio" className="radio" name="paperType" id="lineless" value="lineless" onChange={this.handleInputChange} />
                      <label htmlFor="lineless" className="label">
                        <img className="card-img-top" src={thumb2} alt="Sin lineas" id="paper" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {actioner}
          </div>
        </form>
      </Fragment>
    );
  }	
}

export default AppForm;