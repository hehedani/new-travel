function WarningBanner(props){
	if(!props.warn){
		return null;
	}
	return (
		<div className="warning">
		警告
		</div>
		);
}
class Page extends React.Component{
	constructor(props){
		super(props);
		this.state={showWarning:true}
		this.handleToggleClick=this.handleToggleClick.bind(this);
	}
	handleToggleClick(){
		this.setState(prevState=>({
			showWarning: !prevState.showWarning
		}));
	}
	render(){
		return(
		<div>
			<WarningBanner warn={this.state.showWarning}/>
			<button onClick={this.handleToggleClick}
				className="123">
				{this.state.showWarning?'隐藏':'显示'}
				</button>
		</div>
		);
	}
}
ReactDOM.render(
<Page/>,
document.getElementById('result-preventing')
)