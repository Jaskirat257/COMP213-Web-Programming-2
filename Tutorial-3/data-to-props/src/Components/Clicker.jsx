const clickMessage = () => {
 console.log("This is a clicker function!");
};

export default function Clicker() {
    return <button onClick={clickMessage} >Click Me </button>;
}