import './getInTouch.css'
import GetBtn from '../Btns/GetBtns'

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      {/* <div className="w-full h-full">
        <Image src="/banner.png" alt="Get In Touch" fill />
      </div> */}
      <div className="get-in-layer">
        <div className="get-in-content">
          <h2>Contact with vica</h2>
          <p>please fill out the form and we will be in touch with you soon</p>
          <GetBtn />
        </div>
      </div>
    </div>
  )
}
export default GetInTouch
