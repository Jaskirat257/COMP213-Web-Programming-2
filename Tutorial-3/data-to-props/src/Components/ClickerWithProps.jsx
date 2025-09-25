const msgOnClick = (msg) => console.log(msg);

export default function ClickerWithProps({message,btnText}) {
 return <button onClick={() => msgOnClick(message)} >{btnText} </button>;
}