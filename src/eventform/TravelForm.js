import React, { useState } from 'react'
import Travel from '../models/travel';
import { useSelector } from 'react-redux';
import TravelService from '../services/travel.service';
import { useNavigate } from 'react-router-dom';


export default function TravelForm() {
    const [flag,setFlag]=useState(false);
    const [travel,setTravel]=useState(new Travel());
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const currentUser = useSelector((state) => state.user);

    const navigate = useNavigate();

    
    const addTravel=(e)=>{
        
        e.preventDefault();
        

        setSubmitted(true);
        console.log(travel);

        if (!travel.fromLocation || !travel.toLocation|| !travel.onDate|| !travel.mediumType|| !travel.required||!travel.description) {
            return;
          }
      
        setLoading(true);

        TravelService.saveTravel(travel,currentUser?.user_id)
        .then((_) =>{
            navigate("/travel/viewTravel");
        })
        .catch((error) =>{
            console.log(error);
            if(error?.response?.status === 409){
                setErrorMessage("Event already exists");
            }else{
                
                setErrorMessage("Unexpected error occured");
            }
            setLoading(false);
        });
        


    };

    const handleChange=(e)=>{
        const{name,value}=e.target;
        console.log(currentUser);

        setTravel((prevState)=>{
            return {...prevState,[name]: value};
        });
    }
    
    

  return (
    <>
    <h2 >Enter the Travel Details here:</h2>
    <div className="container mt-3">
        
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={(e) => addTravel(e)}
          noValidate
          className={submitted ? "was-validated" : ""}>
            
            <div class="form-group">
            <label for="source">Source :</label > &nbsp; &nbsp;&nbsp;
            <select required
              id='source'
              name="fromLocation"
              className="form-control"
              value={travel.fromLocation}
              onChange={(e) => handleChange(e)}>
            <option value="">Select City</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            </select>
            <div className="invalid-feedback">Source is required.</div>
            </div>

            <div class="form-group">
            <label for="destination">Destination :</label > &nbsp; &nbsp;&nbsp;
            <select required
              id='destination'
              name="toLocation"
              className="form-control"
              value={travel.toLocation}
              onChange={(e) => handleChange(e)}>
            <option value="">Select City</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            </select>
            <div className="invalid-feedback">Destination is required.</div>
            </div>

            <div class="form-group">
            <label for="vehicle">Vehicle Type/Medium :</label > &nbsp; &nbsp;&nbsp;
            <select required
              id='vehicle'
              name="mediumType"
              className="form-control"
              value={travel.mediumType}
              onChange={(e) => handleChange(e)}>
            <option value="">Select City</option>
            <option value="BIKE">Bike</option>
            <option value="CAR">Car</option>
            <option value="Other">Other</option>
            
            </select>
            <div className="invalid-feedback">Vehicle Type is required.</div>
            </div>

            <div class="form-group">
            <label for="date">Date and time of the Travel :</label>
            &nbsp; &nbsp;
            <input type="datetime-local" value={travel.onDate} onChange={handleChange} id="date" name="onDate" required/>
            <div className="invalid-feedback">Date & Time is required.</div>
            </div>


        <div class="form-group">
            <label for="description">Description:</label >
            <textarea rows={3} value={travel.description} onChange={handleChange} class="form-control" id="description" name="description" placeholder="Enter Details Like Price per person, Name of Person, Vehicle details etc" required/>
            <div className="invalid-feedback">Description is required.</div>
        </div>
        
          

        
        <div class="form-group">
            <label for="capacity">Maximum number of participants</label>
            <input type="number" value={travel.required} onChange={handleChange} class="form-control" id="capacity" name="required" required/>
            <div className="invalid-feedback">Capacity is required.</div>
        </div>
          
      
            

        <button type="submit" class="btn btn-success" disabled={loading}>Submit</button>
        </form>
        
    </div>
    </>
  )
}
