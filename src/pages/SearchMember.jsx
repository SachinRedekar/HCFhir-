import './SearchMember.css'
import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import Navbar from '../components/Navbar/Navbar/Navbar';

function SearchMember() {

    const [subscriber_data, setSubscriberIDData] = useState([]);
    

const fetchData = (event) => {
  axios
    .post("http://localhost:3000/HCQuery/subscriber_id", {
      subscriber_id: event.target.value,
    })
    .then(async (res) => {
      console.log(res.data[0]);
      setSubscriberIDData({ ...res.data[0] });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

useEffect(() => {
  console.log('subscriber_data:', subscriber_data);
}, [subscriber_data]); 


const [subscriber_name, setSubscriberNameData] = useState([]);

const fetchSubscriberName = (event) => {
  axios
    .post("http://localhost:3000/HCQuery/subscriber_name", {
      given: event.target.value,
    })
    .then(async (res) => {
      console.log('setSubscriberNameData',res.data);
      setSubscriberNameData({ ...res.data });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

useEffect(() => {
  console.log('subscriber_name:', subscriber_name);
}, [subscriber_name]); 

       
    return (
        <div>

            <h1>Search Member From FHIR</h1>

            <div className='box'></div>
        
            <div className="row">
            <div className="column">
            <input
                  type="text"
                  name="subscriber_id"
                  className="textbox"
                  placeholder="Subscriber ID.."
                  required
                  onChange={fetchData}
            />
                {/* <input type='text' className = "textbox" name='subscriber_id' value='' onChange={handleData} placeholder='Subscriber ID'></input> */}
            </div>
            <div className="column" >
            <input
                  type="text"
                  name="subscriber_name"
                  className="textbox"
                  placeholder="Subscriber Name.."
                  required
                  onChange={fetchSubscriberName}
            />
            
            {Array.from(subscriber_name).map((item, index) => (
              <div key={index}>
                <p>Family: {item.family}</p>
                <p>Given: {item.given}</p>
                <p>Use: {item.use}</p>
              </div>
            ))}

            {/* <a className='a' href="#">{subscriber_name?.resource_type}</a> */}
            </div>
            </div>

            <div className='box'></div>
            <div className='container' >
            {Array.from(subscriber_name).map((item, index) => (
              <div key={index}>
                <p>Family: {item.family}</p>
                <p>Given: {item.given}</p>
                <p>Use: {item.use}</p>
              </div>
            ))}
             <a className='a' href="/patientdetail">{subscriber_data?.resource_type}</a>
            </div>


            <div className="mytabs">
              <input type="radio" id="tabfree" name="mytabs" checked="checked"defaultChecked={true}  />
              <label for="tabfree">Patient</label>
              <div className="tab">
                <h2>Patient</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <input type="radio" id="tabsilver" name="mytabs"/>
              <label for="tabsilver">Encounter</label>
              <div className="tab">
                <h2>Encounter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>


            </div>

            

        </div>
    );
};

export default SearchMember;