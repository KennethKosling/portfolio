import './Bio.css'
import Me from '../../images/Me.jpg'

export default function Bio() {
  return(
    <div className='Bio'>
      <h1>Hi! My name is Kenneth Kosling.</h1>
      <img className='headshot' src={Me} alt="Kenneth Kosling" />
      <div>
        <h3>I'm a software engineer with major interests in gaming and technology. Check out these projects I've made recently!</h3>
      </div>
    </div>
  )
}