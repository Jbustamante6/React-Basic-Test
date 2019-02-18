import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Info from './components/info/info'
import Cards from './components/cards/cards'
import Follow from './components/followup/follow'
import Leads from './components/leads/leads'
import Tasks from './components/tasks/tasks'
import Appointment from './components/appointments/apponintments'
import Persons from './components/persons/persons';
import  './App.css';

class App extends Component {
  state={
    info:[
      {id:1,name:'Appointments Held', value:13459 , percent:6.9, days:8360},
      {id:2,name:'Closed Sales', value:5435 , percent:85, days:1385},
      {id:3,name:'Pending Sales', value:3350 , percent:-11.9, days:2224},
      {id:4,name:'Conversion Rate', value:'40.58%' , percent:3.80, days:'37.13%'},
      {id:5,name:'Closed Rates', value: '70.05%', percent:-3, days:'72,23%'}
    ], 
    cards:[
      {id:1, product:'product name', workflow:'Workflow Name', members: 15, leads:1400, wl:'423/10', conversion:20, bg: 'bg-danger'},
      {id:2, product:'product name', workflow:'Workflow Name', members: 15, leads:1400, wl:'423/10', conversion:20, bg: 'bg-primary'},
      {id:3, product:'product name', workflow:'Workflow Name', members: 15, leads:1400, wl:'423/10', conversion:20, bg: 'bg-warning'},
      {id:5, product:'product name', workflow:'Workflow Name', members: 15, leads:1400, wl:'423/10', conversion:20, bg: 'bg-info'}
    ], 
    followup:[
      {id:1, description: 'Call Ricardo to schedule an App', from:'Sebastian G.', to:'Richard Smith', date:'Feb at 1:30PM', dayAgo:'2 hours ago', type: 1},
      {id:2, description: 'Call Ricardo to schedule an App', from:'Sebastian G.', to:'Richard Smith', date:'Feb at 1:30PM', dayAgo:'Today', type: 2},
      {id:3, description: 'Call Ricardo to schedule an App', from:'Sebastian G.', to:'Richard Smith', date:'Feb at 1:30PM', dayAgo:'In 3 days', type: 3},
      {id:4, description: 'Call Ricardo to schedule an App', from:'Sebastian G.', to:'Richard Smith', date:'Feb at 1:30PM', dayAgo:'In 6 days', type: 3},
      {id:5, description: 'Call Ricardo to schedule an App', from:'Sebastian G.', to:'Richard Smith', date:'Feb at 1:30PM', dayAgo:'In 1 Month', type: 3},
    ],
    leads:[
      {id:1, name:'Richard Smith (Overdue)', company:'Fuitworks LLC', assigned: 'Sebastian G.', status:1},
      {id:2, name:'Barn Bones', company:'Fuitworks LLC', assigned: null, status:2},
      {id:3, name:'Tera Jones', company:'Bark & Fire LLC', assigned: null, status:2},
      {id:4, name:'Jon Smith', company:'Fuitworks LLC', assigned: 'Sebastian G.', status:3},
      {id:5, name:'Marco LeBlanc', company:'Magnify Enterprises', assigned: 'Sebastian G.', status:3},
    ],
    tasks:[
      {id:1, description: 'Organize an set up everything', ago:'2 hours ago', status:1},
      {id:2, description: 'Organize an set up everything', ago:'Today', status:2},
      {id:3, description: 'Organize an set up everything', ago:'In 3 days', status:2},
      {id:4, description: 'Organize an set up everything', ago:'in 7 days', status:2},
      {id:5, description: 'Organize an set up everything', ago:'In 1 month', status:2},
    ],
    appointments:[
      {id:1, description: 'Appointment', ago:'2 hours ago', status:1},
      {id:2, description: 'Appointment', ago:'Today', status:2},
      {id:3, description: 'Appointment', ago:'In 3 days', status:2},
      {id:4, description: 'Appointment', ago:'in 7 days', status:2},
      {id:5, description: 'Appointment', ago:'In 1 month', status:2},
    ],
    persons:[
      {id:1, name: 'Sales Person', description:'Sales Rep'},
      {id:2, name: 'Sales Person', description:'Sales Rep'},
      {id:3, name: 'Sales Person', description:'Sales Rep'},
      {id:4, name: 'Sales Person', description:'Sales Rep'},
      {id:5, name: 'Sales Person', description:'Sales Rep'},
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

          <h5>Workflows</h5>
          <div className='row mb-4'>
            <Cards cards={this.state.cards}/>
          </div>

          <div className="row mb-4">
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mb-4">
              <h5>Followup Action</h5>
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-6"><small className="text-black-50">FOLLOWUP + TEAM > LEAD</small></div>
                    <div className="col-3"><small className="text-black-50">DEADLINE</small></div>
                    <div className="col-3 text-right">
                      <button type="button" className="btn btn-link btn-sm">MORE <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </li>
                <Follow follows={this.state.followup}/>
              </ul>
            </div>

            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mb-4">
              <h5>Leads</h5>
              <ul className="list-group shadow-sm">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-9"><small className="text-black-50">NAME + COMPANT + ASSIGNED</small></div>
                      <div className="col-3 text-right">
                        <button type="button" className="btn btn-link btn-sm">MORE <i className="fas fa-angle-right"></i></button>

                      </div>
                    </div>
                  </li>
                  <Leads leads={this.state.leads}/>
                </ul>

            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 mb-4">
              <h5>To Dos</h5>
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-9"><small className="text-black-50">TASK</small></div>
                    <div className="col-3 text-right">
                      <button type="button" className="btn btn-link btn-sm">MORE <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </li>
                <Tasks tasks={this.state.tasks}/>
              </ul>
            </div>
           
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 mb-4">
              <h5>Calendar</h5>
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-9"><small className="text-black-50">APPOINTMENT</small></div>
                    <div className="col-3 text-right">
                      <button type="button" className="btn btn-link btn-sm">MORE <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </li>
                <Appointment appointments={this.state.appointments}/>
             
              </ul>
            </div>
          
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 mb-4">
              <h5>Leaderboard</h5>
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-9"><small className="text-black-50">POSITIONS</small></div>
                    <div className="col-3 text-right">
                      <button type="button" className="btn btn-link btn-sm">MORE <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </li>
                <Persons persons={this.state.persons}/>
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-primary circle-btn shadow"><i className="fas fa-plus"></i></button>
        </div>
      
      

      </div>
    );
  }
}

export default App;
