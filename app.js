const addNumbers = (a,b) =>{
    return a+b
};

const printHello = () =>{
    return "Hello"
}

const checkCredentials = (username, password)=>{
    if (username=="user" && password=="root"){
        return "Authorised";
    }
    else{
        return "Not Authorised";
    }
}

module.exports = {
    addNumbers,
    printHello,
    checkCredentials
}