class Nickname extends React.Component{
	constructor(props){
		super(props)
		this.state={account:'登录'}
	}
	componentDidMount(){
		// this.setState=({account:'2234'})
		this.request=$.get(this.props.url,function(data){
			console.log(data);
			this.setState({account:data.nickname})
		}.bind(this))
		// this.setstate({nickname:'3345'})
	}
	componentWillUnmount(){
		this.request.abort();
	}
	render(){
		return(
			<div>
			<a href='register.html'>注册</a>
			<a href='login.html'>
				{this.state.account}	
				</a>
			</div>
			)
	}
}
ReactDOM.render(
<Nickname url="/user/info" />,
document.getElementById('result-nickname')
	)