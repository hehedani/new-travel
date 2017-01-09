class Clock extends React.Component{
  constructor(props){
    super(props);
      this.state={date:new Date()};
    }
    componentDidMount() {
      this.timerID=setInterval(
        ()=>this.tick(),
        1000
        )
    }
    
    componentWillUnmount(){
      clearInterval(this.timerID)
    }
    tick(){
      this.setState({
        date:new Date()
      })
    }
    render() {
      return (
        <div>
          <h3>Hello, world!</h3>
          <h4>现在是 {this.state.date.toLocaleTimeString()}.</h4>
        </div>
        );
    }
  }
  ReactDOM.render(
  <Clock/>,
  document.getElementById('result-final')
  )