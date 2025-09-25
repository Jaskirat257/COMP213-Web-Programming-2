const handleOnSubmit=(e) => {
    e.preventDefault();
    console.log("This is a submission form");
    console.log(document);
};

export default function EmptyForm() {
 return (
 <div>
 <form action="" onSubmit={ handleOnSubmit }>
 <input type ="submit" />
    </form>
 </div>
 );
}