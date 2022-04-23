function checkForm() 
{
    let e = document.forms["Account"]["email"].value;
    let p=document.forms["Account"]["password"].value;
    let n=document.forms["Account"]["number"].value;
    
    if(n.length!=10)
    {
        alert("Please enter a valid Mobile Number");
        document.getElementById("number").focus();
        return false;
    }
    for(let i=0;i<n.length;i++)
    {
        if(isNaN(n.charAt(i)))
        {
            alert("Please enter a valid Mobile Number");
            document.getElementById("number").focus();
            return false;
        }
    }
    for(let i=0;i<e.length;i++)
    {
        if(e.charCodeAt(i)>=65 && e.charCodeAt(i)<=90)
        {
            alert("Please enter E-mail in lowercase");
            document.getElementById("email").focus();
            return false;
        }
    }
    if(p.length<8)
    {
        document.getElementById("replace").innerHTML = "Use 8 characters or more for your password";
        document.getElementById("replace").style.color= "red";
        document.getElementById("replace").style.fontFamily="Lucida Sans";
        document.getElementById("replace").style.fontSize="90%";
        document.getElementById("password").focus();
        return false;
    }
    else
    {
        document.getElementById("replace").innerHTML = "";
        
    }
    if(document.forms["Account"]["cpassword"].value!=p)
    {
        document.getElementById("match").innerHTML = "Those passwords didn't match. Try again.";
        document.getElementById("cpassword").focus();
        return false;
    }
    else
    {
        document.getElementById("match").innerHTML = "";
    }
}
function display()
{
    var s=document.getElementById("password");
    var c=document.getElementById("cpassword");
    if(s.type==="password" && c.type==="password")
    {
        s.type="text";
        c.type="text";
    }
    else
    {
        s.type="password";
        c.type="password";
    }
}