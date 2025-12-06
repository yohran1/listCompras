import perigo from '../assets/Perigo.png'


function ErrorMSG({error}) {
    return (
        error && 
        <p className="error">{error}<img src={perigo} /> </p>
    )
}

export default ErrorMSG