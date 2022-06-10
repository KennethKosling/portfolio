import './Links.css'
import github from '../../images/GitHub.png'
import linkedIn from '../../images/Linked.png'

export default function Links() {
  return(
    <div className='Links'>
      <a href='https://www.linkedin.com/in/kenneth-k-4b2143230/'><img className="linkedIn" src={linkedIn} alt='LinkedIn' /></a>
      <a href='https://github.com/KennethKosling'><img className="github" src={github} alt='Github' /></a>
    </div>
  )
}