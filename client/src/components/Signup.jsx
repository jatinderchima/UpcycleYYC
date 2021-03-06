import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'antd';
import './components.css';

class Signup extends Component {
  state = {
    email:'',
    ward: '',
    name:'',
    progress: 0
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleBlur = (e) => {
    console.log(this.state)
    var progress = 0  
    if(this.state.name !== ''){
        progress += 33.33
        } if(this.state.email !== ''){
        progress += 33.33
        } if(e.target.value === 'ward'){
        progress += 33.34
        }
        this.setState({progress: progress})
    }

  render() {

    return (
      <div className="SignUpPg">
        <Progress strokeColor={{'0%': '#66b9ea', '100%': '#41cd8c',}} percent={this.state.progress} type="line" strokeWidth="20px" status="active" size="large"/>
        <div className="form">
          <h2><center>Hi!</center></h2>
          <h3><center>Let's get started:</center></h3>
          <div>
                <div className='sign-upcontainer'>
                <form className='white' action='/dashboard' method='get'>
                    <div className="input-name">
                        <input placeholder="First and Last Name" className='text-name' type='name' onBlur={this.handleBlur} id='name' onChange={this.handleChange}></input>
                    </div>

                    <div className="input-email">
                        <input placeholder="Email" onBlur={this.handleBlur} className='text-email' type='email' id='email' onChange={this.handleChange}></input>
                    </div>

                    <div className="dd-wrapper">
                    <center>
                        <select onChange={this.handleBlur} className='input-wrapper' type='ward' id='ward'>
                          <option value='chooseward' className="chooseward">Select Your City Ward</option>                         
                          <option value='ward'>Ward 1</option>
                          <option value='ward'>Ward 2</option>
                          <option value='ward'>Ward 3</option>
                          <option value='ward'>Ward 4</option>
                          <option value='ward'>Ward 5</option>
                          <option value='ward'>Ward 6</option>
                          <option value='ward'>Ward 7</option>
                          <option value='ward'>Ward 8</option>
                          <option value='ward'>Ward 9</option>
                          <option value='ward'>Ward 10</option>
                          <option value='ward'>Ward 11</option>
                          <option value='ward'>Ward 12</option>
                          <option value='ward'>Ward 13</option>
                          <option value='ward'>Ward 14</option>
                        </select>
                        </center>
                        <center>
                        <p><br/><a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/citycouncil/Pages/FindYourCouncillor.aspx'>Find your ward here</a></p>
                        </center>
                    </div>
                    <div className='input-field'>
                    <p/><br/>
                    <center>
                        <button type='submit' className="signup-pg-btn">Sign Up</button>
                        <p/>
                        <p><Link to={'/'}>or Go Back</Link></p>
                        </center>
                    </div>
                </form>
                </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Signup;