function LoggedIn(props) {
  return (
    <div>
      欢迎回来，
      <a href="user-info.html">
        {props.nickname}
      </a>
      <a href="login.html">
      退出登录
      </a>
    </div>
  )
}

function LoggedOut(props) {
  return (
    <div>
      <a href="login.html">
        请登录
      </a>
      &nbsp;或&nbsp;
      <a href="register.html">
        注册
      </a>
    </div>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false, nickname: ''}
  }

  componentDidMount() {
    let user = Cookies.get('user')
    console.log(user)
    if (user) {
      this.request = $.get('/user/info', function (data) {
        console.log(data)
        this.setState({isLoggedIn: true, nickname: data.nickname})
      }.bind(this))
    } else {
      this.setState({isLoggedIn: false, nickname: ''})
    }
  }

  componentWillUnmount() {
    this.request.abort()
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    console.log(isLoggedIn)
    let e = null
    if (isLoggedIn) {
      e = <LoggedIn nickname={this.state.nickname} />
    } else {
      e = <LoggedOut />
    }
    return (
      <div>
        {e}
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('logg')
)
