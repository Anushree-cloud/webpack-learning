
const body = document.getElementsByTagName('body')
const head = document.getElementsByTagName('head')

export default function toast(props){
    showToast(getProps(props))
    console.log(props)
}

function showToast(props) {
    const {message, delay, type} = props // destructuring the values from props
    // console.log(props);
    let toastItem = createToastMessage(message, type) // calling to create the div and set message
    document.body.appendChild(toastItem)
    //setting the delay time here
    setTimeout( ()=>{
        toastItem.remove()
    }, delay )
}

function getProps( props ){
    let isObject = (typeof props === "object") // boolean value: checking the type of the parameter passed
    let message = "", delay = 2000 // default values if no parameter is passed
    let type = props.type

    if( isObject ) {                 // if the parameter is of object type
        message = props.message
        delay = props.delay ? props.delay : delay // if delay value is not passed
        
    }
    else{
        message = props // if the parameter is not object type
    }

    return {message, delay, type}

}

// creating a div to show the message and also setting the div content
function createToastMessage( message, type ){
    let toastItem = document.createElement('div')
    
    //not scalable
    /*if ( type == "success" ) {
        toastItem.className = "toast-item success"
    }
    else {
        toastItem.className = "toast-item error"
    }*/

    let typeClassList = ["success", "error"]
    let typeClass = typeClassList.includes(type) ? type : "default"
    
    toastItem.className = `toast-item ${typeClass}`

    toastItem.innerText = message // setting toastItem content, if no parameter is passed it will return "" (blank).
    
    return toastItem
}


//for attaching css
function addStyle(styles) {
    let style = document.createElement('style');

    if (style.styleSheet) 
        style.styleSheet.cssText = styles;
    else 
        style.appendChild(document.createTextNode(styles));

    document.head.appendChild(style);
}

let styles = `.toast-item{
    width: max-content;
    padding: 10px;
    box-shadow: 0px 0px 5px 2px #000;
    color: aliceblue;
    position: fixed;
    margin: 10px;
    top: 0;
    right: 0;
}
.default{
    background-color: blue;
}
.success{
    background-color: green;
}
.error{
    background-color: red;
}`

window.onload = function() { addStyle(styles) }




// export default toast;






