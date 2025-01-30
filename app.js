// in the case of nested div
/* 
<div id="parent">
    <div id="child">
        <h1>
            hello worlddd
        </h1>
        <h1>
            its meee
        </h1>
    </div>
</div>
*/


const parent = React.createElement("div",{id:"parent"} , React.createElement("div",{id:"child"} , [React.createElement("h1",{id:"hello-text"} , "hello worldd" ),React.createElement("h1",{id:"hello-text"} , "its me" )] ) ) ;

console.log('parent --- ',parent)

const root = ReactDOM.createRoot(document.getElementById("root")) ;

root.render(parent)