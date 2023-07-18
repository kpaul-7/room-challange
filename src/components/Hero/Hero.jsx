import heroMobileImage1 from '../../assets/images/mobile-image-hero-1.jpg'
import heroMobileImage2 from '../../assets/images/mobile-image-hero-2.jpg'
import heroMobileImage3 from '../../assets/images/mobile-image-hero-3.jpg'
import heroDesktopImage1 from '../../assets/images/desktop-image-hero-1.jpg'
import heroDesktopImage2 from '../../assets/images/desktop-image-hero-2.jpg'
import heroDesktopImage3 from '../../assets/images/desktop-image-hero-3.jpg'
import iconLeft from '../../assets/images/icon-angle-left.svg'
import iconRight from '../../assets/images/icon-angle-right.svg'
import iconArrow from '../../assets/images/icon-arrow.svg'
import { useMediaQuery } from 'react-responsive'
import style from './Hero.module.css'
import { useState } from 'react'
const Hero = () =>{
    const isMobile = useMediaQuery({
        query: '(max-width:800px)'
    })
    const mobileImages = [heroMobileImage1,heroMobileImage2,heroMobileImage3]
    const desktopImages = [heroDesktopImage1,heroDesktopImage2,heroDesktopImage3]
    const contents = [
      {
        id:1,
        title:"Discover innovative ways to decorate",
        content:" We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
      },
      {
        id:2,
        title:"We are available all across the globe",
        content:"  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
      },
      {
        id:3,
        title:"Manufactured with the best materials",
        content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
      }
    ]
    const [currentImg,setCurrentImg] = useState(0)
    const incrementImage = () =>{
      setCurrentImg(prev=>{
        prev = (prev + 1) % 3
        return prev
      })
    }    
    const decrementImage = () =>{
      setCurrentImg(prev=>{
        prev = prev - 1
        if(prev < 0){
          prev = 2
        }
        return prev
      })
    }
    return (
        <div className={style.Hero}>
        {/* first div  */}
        <div className={style.Hero__Image}>
                {!isMobile &&
                      <img src={desktopImages[currentImg]} alt="hero" className={style.Hero__Desktop__Image} /> }
                <div className={style.Hero_Mobile_Wrapper}>
                  {isMobile &&
                  <img src={mobileImages[currentImg]} alt="hero" />}
                  {isMobile &&
                              (<div className={style.MobileIcons}>
                              {/* arrows */}
                              <img src={iconLeft} alt="left arrow" onClick={decrementImage}/>
                              <img src={iconRight} alt="left arrow" onClick={incrementImage}/>
                            </div>)
                  }
                </div>
        </div>
        <div className={style.Hero__Sidebar}>
          <div className={style.Hero__Content}>
            <div className={style.Content__Div}>
            <p className={style.Hero__Content__Title}>{contents[currentImg].title}</p>
            <p className={style.Hero__Content__Description}>{contents[currentImg].content}</p>
  </div>
            <div className={style.Shop}>
              <p><span id={style.Shop__First__Span} className={style.Shop__Span}>S H O P</span><span className={style.Shop__Span}>N O W</span></p>
              <img src={iconArrow} alt="arrow" />
            </div>
          </div>
          <div className={style.Icons}>
            {/* arrows */}
            <img src={iconLeft} alt="left arrow" onClick={decrementImage}/>
            <img src={iconRight} alt="left arrow" onClick={incrementImage}/>
          </div>
        </div>
      </div>
    )
}
export default Hero