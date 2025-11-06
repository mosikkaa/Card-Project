import success from "../assets/succesbtn.svg";
import '../App.css'

const Success = () => {
    return (
        <div id='successfull'>
            <img src={success} style={{height:'80px',width:'80px'}}/>
            <div style={{display: 'flex', justifyContent: 'space-between',flexDirection:'column',alignItems: 'center',gap:'20px'}}>
                <p style={{fontFamily: 'Space Grotesk',
                    fontWeight: '500',
                    fontSize:'28px',
                    lineHeight: '100%',
                    letterSpacing: '3.42px',
                    textAlign: 'center',
                    color:'rgba(33, 9, 47, 1)'
                }}>THANK YOU!</p>
                <p style={{fontFamily: 'Space Grotesk',
                    fontWeight: '500',
                    fontSize: '18px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    color:'rgba(143, 134, 148, 1)',
                }}>We’ve added your card details</p>
            </div>

            <button type='submit' id='btn' style={{width:'100%'}}>Continue</button>

        </div>
    )
}

export default Success;