import axios from "axios";



const get = ( onSuccess, onFail) => {
    const url = "http://localhost:3000/arca";
    axios.get(url).then((result) => {
        onSuccess(result);
    }).catch(err => {
        onFail(err);
        console.log(err);
    }).then(() => {
        // always executed
    });
}




export default {get};
