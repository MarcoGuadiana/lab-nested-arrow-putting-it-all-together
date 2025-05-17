
function createLoginTracker(userinfo) {
//userInfo object test
  const userInfo = {
    username:"user1",
    password: "password123"
  };


  let attemptCount = 0;
  // Attempt counter 
   createLoginTracker((passwordAttempt ) => {
    attemptCount = attemptCount + 1;
//If the password attempt and actual passwors match and its under three attempts the login may be succesfull but if not it will fail. 
    if (passwordAttempt== userInfo.password && attemptCount <= 3) {

      console.log("Login Successful!!"); 
      return "Login successful! part 2 using the return function"; 

    }
// If the user exceeds 3 logins the account will lock
    if(attemptCount > 3) {
      return "Account locked due to too many failed login attempts"; 
    }
    else {
      
      console.log("Login Failed"); 
      return 0; 

    }

   })
  
}

const login = createLoginTracker(userInfo);
console.log(login("wrongpass"));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};



