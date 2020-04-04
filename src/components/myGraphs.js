import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import moment from 'moment'
import React_Loader from "./spinner.js"


class MyGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: 0,
      info: [],
      bonus_room_temperature: [],
      living_room_temperature: [],
      kitchen_temperature: [],
      rooms: ['office_temperature', 'bonus_room_temperature', 'kitchen_temperature', 'living_room_temperature', 'laundry_temperature']
    };
  }

  async componentDidMount() {
    let info_array = []
    for (let room in this.state.rooms) {
      let room_name = this.state.rooms[room]
      let url = "http://api.calebdunn.tech:24242/temps/" + room_name
      await fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(
          (data) => {
            data = JSON.parse(data)
            info_array.push({[room_name]: data})
            this.setState({
              isLoaded: this.state.isLoaded + 1,
              info: info_array
            })
            },
          (error) => {
            this.setState({
              isLoaded: false,
            });
          }
        )
      }
  }
  
  render() {
    // Empty object to hold modified data
    let temp_data_object = []
    // Loop through the created array from the above fetch
    for (let i = 0; i < this.state.info.length; i++) {
      for (let room in this.state.info[i]) {
        let temp_data = []
        if (this.state.info[i][room]) {
          for (let j = 0; j < this.state.info[i][room][0].length; j++) {
            // console.log(j + ".." + room + ".." + this.state.info[i][room][0][j]['last_updated'])
            // console.log(moment(this.state.info[i][room][0][j]['last_updated']).fromNow())
            temp_data.push({"order": j, "time": moment(this.state.info[i][room][0][j]['last_updated']).unix(), "temperature": this.state.info[i][room][0][j]['state']})
          }
          temp_data_object[room] = temp_data
          console.log(Object.keys(temp_data_object).length)
        }
      }
    }
    
    if (Object.keys(temp_data_object).length === this.state.rooms.length) {
      return (
        <div className="mt-5 pt-3">
          {Object.keys(temp_data_object).map((key, data) => {
            return <div><h2 style={{textAlign: 'center'}}>{key.replace(/_/g, " ").toUpperCase()}</h2>
              <ResponsiveContainer width='100%' aspect={10.0/1.0}>
                <LineChart
                  data={temp_data_object[key]}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}>
                  <XAxis domain={['dataMin', 'dataMax']} dataKey="time" scale='time' name='Time' type='number'
                        tickFormatter={(unixTime) => moment.unix(unixTime).format('hh:mm')}
                        minTickGap={20}/>
                  <YAxis domain={[ 60, 80 ]}/>
                  <Tooltip />
                  <Legend />
                  <Line type="natural" strokeWidth={3} animationDuration={5000} dot={false} animationEasing='ease' dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          })}
        </div>
      );
    }
    else {
      return (
        <React_Loader />
      )
    }
  }
}

export default MyGraph
