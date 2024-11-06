
function UserGreeting(props){
  const isLogin=true
  
  const msg=<h2 className="welcomeMessage">Hello,User</h2>
  const log=<h2 className="loginMessage">please log in</h2>
  return(
   isLogin?msg:log
  );
}

export default UserGreeting