import DataImage from '../data'

const Hero = () => {
  return (
    <div className='hero grid grid-cols-2'>
        <div className=''> 
            <div>
                <img src={DataImage.HeroImage} alt="" className='w-10 rounded-md' />
            </div>
            <a href="/V.png" download={DataImage.logo}>Download</a>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className='w-[400px]' />
    </div>
  )
}

export default Hero