import React, { Component} from 'react';

export default class Timer extends Component{
    
    componentDidMount(){
      //  this.timer = setInterval(this.ticker, 1000);
        setInterval(this.ticker, 1000);
    }

    ticker(){
        this.setState({clock: new Date() - this.props.start});  
         //console.log(new Date() +' '+ Date.now());    Sat Jun 02 2018 18:34:02 GMT+0530 (India Standard Time) 1527944642812
        //Sat Jun 02 2018 18:24:18 GMT+0530 (India Standard Time)  -  1527944203230
        //Sat Jun 02 2018 18:24:19 GMT+0530 (India Standard Time)
       // console.log(new Date() - this.props.start);             1081   2077
    }
    
    constructor(props){
        super(props);

        this.state = {
            clock: 0
        };
        this.ticker = this.ticker.bind(this);
    }
    

    render(){
       var clock = Math.round(this.state.clock /1000);
        return(
            <div>
            <p>You have been on this site since:</p><br />
            <span>{clock}</span>
            <p>Seconds.</p>
            </div>
        );
    }
}