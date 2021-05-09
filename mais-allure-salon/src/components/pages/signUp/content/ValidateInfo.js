export function  validate (data) 
{
  let emailERROR = "";
  let usernameERROR = "";
  let passwordERROR = "";
  let password2ERROR = "";
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  if (!data.username) {
    usernameERROR = "הכניסי שם משתמש";

  }
  if (!data.email){
    emailERROR = "הכניסי כתובת דואר אלקטרוני";
  }else if (!pattern.test(this.state.email))
  {
    emailERROR = "כתובת דואר אלקטרוני לא חוקית";
  }
  if (!data.password){
    passwordERROR = "הכניסי סיסמה";

  } else if (data.password.length < 6) {
    passwordERROR = "סיסמה לא חוקית, הכניסי לפחות 6 תוים";
  }
  if (!data.password2){
    password2ERROR = "הכניסי סיסמה";
  } else if (data.password2 !== data.password) {
    password2ERROR = "סיסמאות לא תואמות";
  }

  if(usernameERROR || emailERROR || passwordERROR || password2ERROR ){
    this.setState({emailERROR, usernameERROR, passwordERROR, password2ERROR});
    return false
  }
  return true;
}