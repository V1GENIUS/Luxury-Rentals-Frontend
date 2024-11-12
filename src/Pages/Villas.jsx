import React,{ useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Pages/Villas.css'
import Card from '../Components/card'
import close from '../Icons/close.png'
import page2img from '../Images/villasbg.png'



function Villas() {
  const page_2img = {
    backgroundImage: `url(${page2img})`,
    height: '100%',
    backgroundSize: 'cover',
  };
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    searchQuery: '',
    filters: {
      Seaside :false ,
        CountrySide  :false ,
        Village :false ,
        Town :false ,
        Mountains  :false ,
        Swimming_pool  :false ,
        Indoor_pool  :false ,
        Jacuzzi  :false ,
        Fitness_Gym  :false ,
        Sauna  :false ,
        Outdoor_dining_table  :false ,
        Outdoor_grill  :false ,
        Boat_mooring  :false ,
        Electric_car_charger  :false ,
        Private_parking  :false ,
        Playground  :false ,
        Playstation  :false ,
        Satellite_Cable  :false ,
        Table_tennis  :false ,
        Fireplace  :false ,
        Air_conditioning  :false ,
        Feeding_chair  :false ,
        Iron_and_Board  :false ,
    }
  });
  const handleReset = () => {
    const resetFilters = {};
    for (let key in formData.filters) {
      resetFilters[key] = false;
    }
    setFormData({ filters: resetFilters });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        filters: {
          ...formData.filters,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', formData.searchQuery);
    console.log('Filter:', formData.filter);
  };
  return (
    <>
    
    <div className='All_villa' >
    <Navbar/>
    <div style={{ marginTop:'0px' , textAlign:'center', color: 'white'}}>
    <h1>All Villas</h1>
    <h5>124 results</h5>
    </div>

       <div>
         <form className='form'>
            <div className='select_item'>
              <select   style={{ width: '150px', height: '50px', fontSize: '20px' , borderColor:'transparent',borderRadius: '5px' }}>
                  <option value="location">Location</option>
                  <option value="Seaside">Seaside</option>
                  <option value="Mountains">Mountains</option>
                  <option value="CountrySide">CountrySide</option>
                  <option value="CitySide">CitySide</option>
                  <option value="Village">Village</option>
                  <option value="Town">Town</option>
                </select>
              </div>
              <div className='select_item' >           
                <select style={{ width: '150px', height: '50px', fontSize: '15px',borderColor:'transparent' ,borderRadius: '5px' }}>
                  <option value="dates">Dates</option>
                  <option value="saab">Saab</option>
                 
                </select>
              </div>
              <div className='select_item'>           
                <select  style={{ width: '150px', height: '50px', fontSize: '15px',borderColor:'transparent',borderRadius: '5px' }}>
                  <option value="guest">No. of Guest</option>
                  <option value="saab">5</option>
                  <option value="fiat">8</option>
                  <option value="audi">10</option>
                  <option value="audi">15</option>
                  <option value="audi">20</option>
                </select>
              </div>
              <div className='select_item'>           
                <select   style={{ width: '150px', height: '50px', fontSize: '20px' ,borderColor:'transparent',borderRadius: '5px'}}>
                  <option  value="price">Price Range</option>
                  <option value="saab">$20-$100</option>
                  <option value="fiat">$100-$500</option>
                  <option value="audi">$500-$1000</option>
                  <option value="audi">$1000-$5000</option>
                </select>
              </div>

              <div>
                <div>
                  <div>
                    <button  style={{fontSize:'20px' , height:'50px' ,width:'90px',marginTop:'5px', backgroundColor:'black' , color:'white', borderRadius:'0px 10px 10px 10px' }}>search</button>
                  </div>
                  
                </div>
              </div>

             
              
            </form>
            <br/>
           
            <div>
      <button
        style={{
          border: 'transparent',
          background: 'transparent',
          color: 'white',
          fontSize: '18px',
          marginInlineStart: '345px'
        }}
        onClick={() => setShowForm(true)}
      >
        <b>ADD FILTERS</b>
      </button>

      {showForm && (
        <div style={{ marginInlineStart: '345px' }} className="form-container">
          <form onSubmit={handleSubmit} className="filter-form">
            <div style={{display:'flex'}}>
            <h2>Filters</h2>
            <button onClick={() => setShowForm(false)} className="close">
              <img src={close} alt='close' width='15' height='15'>
            </img></button>
            </div>
           
            <div className="form-sections">
              <div className="filter-section">
                <h4>Location</h4>
                <label><input type="checkbox" name="Seaside" checked={formData.filters.Seaside} onChange={handleInputChange} /> Seaside</label>
                <label><input type="checkbox" name="CountrySide" checked={formData.filters.CountrySide} onChange={handleInputChange} /> Countryside</label>
                <label><input type="checkbox" name="Village" checked={formData.filters.Village} onChange={handleInputChange} /> Village</label>
                <label><input type="checkbox" name="Town" checked={formData.filters.Town} onChange={handleInputChange} /> Town</label>
                <label><input type="checkbox" name="Mountains" checked={formData.filters.Mountains} onChange={handleInputChange} /> Mountains</label>
              </div>

              <div className="filter-section">
                <h4>Wellness</h4>
                <label><input type="checkbox" name="Swimming_pool" checked={formData.filters.Swimming_pool} onChange={handleInputChange} /> Swimming pool</label>
                <label><input type="checkbox" name="Indoor_pool" checked={formData.filters.Indoor_pool} onChange={handleInputChange} /> Indoor pool</label>
                <label><input type="checkbox" name="Jacuzzi" checked={formData.filters.Jacuzzi} onChange={handleInputChange} /> Jacuzzi</label>
                <label><input type="checkbox" name="Fitness_Gym" checked={formData.filters.Fitness_Gym} onChange={handleInputChange} /> Fitness/Gym</label>
                <label><input type="checkbox" name="Sauna" checked={formData.filters.Sauna} onChange={handleInputChange} /> Sauna</label>
              </div>

              <div className="filter-section">
                <h4>Outdoor</h4>
                <label><input type="checkbox" name="Outdoor_dining_table" checked={formData.filters.Outdoor_dining_table} onChange={handleInputChange} /> Out dining table</label>
                <label><input type="checkbox" name="Outdoor_grill" checked={formData.filters.Outdoor_grill} onChange={handleInputChange} /> Outdoor grill</label>
                <label><input type="checkbox" name="Boat_mooring" checked={formData.filters.Boat_mooring} onChange={handleInputChange} /> Boat mooring</label>
                <label><input type="checkbox" name="Electric_car_charger" checked={formData.filters.Electric_car_charger} onChange={handleInputChange} /> EV car charger</label>
                <label><input type="checkbox" name="Private_parking" checked={formData.filters.Private_parking} onChange={handleInputChange} /> Private parking</label>
              </div>

              <div className="filter-section">
                <h4>Activity</h4>
                <label><input type="checkbox" name="Playground" checked={formData.filters.Playground} onChange={handleInputChange} /> Playground</label>
                <label><input type="checkbox" name="Playstation" checked={formData.filters.Playstation} onChange={handleInputChange} /> Playstation</label>
                <label><input type="checkbox" name="Satellite_Cable" checked={formData.filters.Satellite_Cable} onChange={handleInputChange} /> Satellite/Cable</label>
                <label><input type="checkbox" name="Table_tennis" checked={formData.filters.Table_tennis} onChange={handleInputChange} /> Table tennis</label>
              </div>

              <div className="filter-section">
                <h4>Amenities</h4>
                <label><input type="checkbox" name="Fireplace" checked={formData.filters.Fireplace} onChange={handleInputChange} /> Fireplace</label>
                <label><input type="checkbox" name="Air_conditioning" checked={formData.filters.Air_conditioning} onChange={handleInputChange} /> Air conditioning</label>
                <label><input type="checkbox" name="Feeding_chair" checked={formData.filters.Feeding_chair} onChange={handleInputChange} /> Feeding chair</label>
                <label><input type="checkbox" name="Iron_and_Board" checked={formData.filters.Iron_and_Board} onChange={handleInputChange} /> Iron & Board</label>
              </div>
            </div>
            <button className='btn' onClick={handleReset} >Clear All</button>
            <button className='btn' type="submit">Search</button>
          </form>

          
        </div>
      )}
            </div>
  
   
   </div>


          <div className='Cards'>
            <Card  />
          </div>

          <div className='page7'>

           <div className='page__2' style={page_2img}>
            <div className='villas_2' >
              <div className='connection_villa'>

    <div style={{background:'black' , color:'#F5E9D6' , borderRadius:'8px 80px 8px 8px' , width:'450px', height:'350px'
    }} >
      <h1 style={{textAlign:'center' , marginTop:'50px'}}>
        Let's connect 
      </h1>
      <div style={{display:'flex'}}>
        <div style={{marginInlineStart:'15px'}}>
          <h3>
            Phone     
          </h3>
          <h3>
            Email       
          </h3>
          <h3>
            Address       
          </h3>
        </div>
        <div style={{marginInlineStart:'15px'}}>
          <h3>
            :
          </h3>
          <h3>
            :
          </h3>
          <h3>
            :
          </h3>
        </div>
        <div style={{marginInlineStart:'20px'}}>
          <h4>
            +91 84777-44171
          </h4>
          <h4>
            prospekt@prospekt.hr
          </h4>
          <h4>
            Prospekt Ltd Drazice 138, 51000 Rijeka Croatia
          </h4>
        </div>
      </div>
    </div>
    <div style={{background:'white', color:'black' ,textAlign:'center' , borderRadius:'8px 8px 80px 8px' , marginInlineStart:'60px' , height:'350px' }}>
    <form >
    <h1>We’d love to hear from you</h1>
    <input className="forminputhome" type="text" placeholder='Your name'  ></input>
    <input className="forminputhome" type="email" placeholder='Email' ></input>
    <input  type="textbox" placeholder='Massage' style={{ border:'none' ,borderBottom: '1px solid #000', paddingBottom: '30px',marginInlineStart:'10px',marginTop: "30px", width:"415px" }} ></input>
    <h5>
      I accept terms and condition
    </h5>
   <button style={{ height:"40px" ,width:'90px',background:'#5B656F' ,color:'white' , border:"none", borderRadius:'0px 10px 10px 10px', fontSize:'20px'}}>Send</button>
    
    </form>
  </div>
              </div>
            </div>
          </div>
        </div>

<Footer/>
        </div>
      
    </>
  )
}

export default Villas


