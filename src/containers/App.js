import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Info from './components/info/info'
import  './App.css';

class App extends Component {
  state={
    info:[
      {id:'1',name:'Appointments Held', value:13459 , percent:6.9, days:8360},
      {id:'2',name:'Closed Sales', value:5435 , percent:85, days:1385},
      {id:'3',name:'Pending Sales', value:3350 , percent:-11.9, days:2224},
      {id:'4',name:'Conversion Rate', value:'40.58%' , percent:3.80, days:'37.13%'},
      {id:'5',name:'Closed Rates', value: '70.05%', percent:-3, days:'72,23%'}
    ]

  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container mt-1">
          <div className="d-flex flex-row-reverse bd-highlight mb-2">
            <div className="p-2 bd-highlight">
              <div className="dropdown float-rigth">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Last 30 days
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <Info info={this.state.info}/>
          </div>

          <div className='row'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
