const ContactUs=()=>{
    function contactFormSubmitHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const user={};
        for(const[name,value] of formData.entries()){
            user[name]=value;
        }
        console.log(user);
    }
    return (
        <form onSubmit={contactFormSubmitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email"/>
            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone"/>
            <button type="submit">Send</button>
        </form>
    )
}
export default ContactUs;