import React, {useState, useEffect} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
 
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import axios from 'axios';

function App() {

  const [thisthing, setthisthing] = useState([])

    useEffect(()=>{
        axios.get("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&begin_date=20210128&end_date=20210129&datum=MLLW&station=9444900&time_zone=lst_ldt&units=english&interval=hilo&format=json")
            .then(res=>{
                setthisthing(res.data.predictions)
              
            } )
    }, [])

  return (


    <div className="MainDiv">
      <body>
      <div class="text-center">
          <h3>Tidal</h3>
        
      </div>
      {/* <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201602/MIT-Rogue-Waves_0.jpg?itok=z9m-CjfH" /> */}
      
      <div className="container">
          
          <FullCalendar
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
            plugins={[ dayGridPlugin, interactionPlugin ]}
            dateClick={function(arg) {
              $("#myModal").modal("show");
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
              
            }}
          
            initialView="dayGridMonth"
            events={[
              // { title: 'event', date: '2021-01-27' },
              // { title: 'event2', date: '2021-01-27' }
            
            ]}
          />
        </div>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
              
                <div class="modal-header">
                  <h4 class="modal-title align-center">Date is Below</h4>
                  <div>
          {thisthing.map(aThing => {
                        return(
                        
                        <div>
                            <div className="box">
                            <p>Water Depth:{aThing.v}</p>
                            </div>
                            <div className="box">
                            <p>TimeStamp: {aThing.t}</p>
                            </div>
                            <div className="box">
                            <p>High/Low: {aThing.type}</p>
                            </div>
                        </div>
                    )})
                }
        </div>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body text-center">
                  
                </div>
              
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </body>
    </div>
  )
          }

export default App;