import { useNavigate } from 'react-router-dom';
function Contact() 
{

    console.log("Contact page loaded!");


    return(
    
        <>
            <h2>Contact Us</h2>
            <div>
                <form>
                    <div>
                        <label for="fname">First Name: </label>
                        <input name="myInput" />
                    </div>
                    <div>
                        <label for="lname">Last Name: </label>
                        <input name="myInput" />
                    </div>
                    <div>
                    <textarea rows={4} cols={40}/>
                    </div>
                   
                </form>
            </div>

        </>
    );
  }
  
  export default Contact;
  