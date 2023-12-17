import React, { Component } from "react";

// // function TestProps({isWraped, name, surname, mylink}){

// //     if(isWraped === true){     
// //         return (
            
// //             <div className="wrapper">

// //                 <div>

// //                 <h1>My name is {name},  surname - {surname}</h1>
// //                 <a href={mylink}>my Profile</a>

// //                 </div>


// //             </div>

// //         )

// //     }
// //     else {

// //         return (
            
// //             <div>

// //                 <h1>My name is {name},  surname - {surname}</h1>
// //                 <a href={mylink}>my Profile</a>

// //             </div>
    
// //         )


// //     }


  
// // }
// {/* <TestProps
//         isWraped = {false} 
//         name = "Farid" 
//         surname = "Makhmudov"
//         mylink = 'https://egoist66.github.io/' />
//         <TestProps 
//         name = "Jack" 
//         surname = "Milton"
//         mylink = 'https://egoist66.github.io/' /> */
// }



// class WhoAmI extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             year: 27,
//             position: '',
//             text1: '',
//             text2: '',
//             background: ''
               
                
//         }

//         // this.nextyear = this.nextyear.bind(this)
   
//     }

//     render(){
//         const {name, link, ...rest} = this.props;
//         const {color, fontSize} = rest;
//         const {position, year, text1, text2, background} = this.state;
       
      
  
//         return (

        

//             <div style={{background: background}} onMouseLeave={this.removeBackground} onMouseEnter={this.setBackground}>

//                 <h1 style={{color: color, fontSize: fontSize}}>{name} And my age is - {year}, position - {position}</h1>
//                 <a href={link}>Link</a>
//                 <form action="#">

//                     <span>Введите должность</span>
//                     <input type="text" onChange={this.getval} />

//                 </form>
//                 <button style={{"display": "block"}} onClick={()=>this.nextyear()}>{text1 || "click"}</button>
//                 <button style={{"display": "block"}} onClick={this.prevyear}>{text2 || "click"}</button>

//             </div>
//         )
//     }

//     getval = (e) => {

//         this.setState({
//             position: e.target.value
//         })
//     }

//     setBackground = () => {
//         this.setState({
//             background: "violet"
//         })
//     }
//     removeBackground = () => {
//         this.setState({
//             background: "white"
//         })
//     }

   

//     nextyear(){
        
//         this.setState(state => ({

//             year: state.year + 1,
//             text1: "Plus"
//         }))

      
//     }
 
//     prevyear = () => {
//         this.setState(state => ({

//                 year: state.year - 1,
//                 text2: "Minus"
//         }))

      
//     }
 


// }


// class Clock extends Component {

//     constructor(props){
//         super(props)
        
//         this.state = {
//             date: new Date()
//         }
//     }

//     render(){

//         const {date} = this.state;

//         return (

//             <div>

//                 <h2>Time</h2>
//                 <p>{date.toLocaleString()}</p>

//             </div>

//         )
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//           () => this.tick(),
//           1000
//         );
//     }
    
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
    
//     tick() {
//         this.setState({
//           date: new Date()
//         });
//     }
// }
 

// export {Clock};
// export default WhoAmI



// class NameForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Отправленное имя: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Имя:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Отправить" />
//         </form>
//       );
//     }
// }

// export default NameForm