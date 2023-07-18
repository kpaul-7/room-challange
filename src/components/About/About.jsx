import aboutDarkImage from '../../assets/images/image-about-dark.jpg'
import aboutLightImage from '../../assets/images/image-about-light.jpg'
import style from './About.module.css'
const About = () =>{
    return (
        <div className={style.About}>
        {/* second */}
        <div className={style.About__Dark__Image}>
          <img src={aboutDarkImage} alt="" />
        </div>
        <div className={style.About__Content}>
          <p className={style.About__Heading}>About our furniture</p>
          <p className={style.About__Description}>Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div className={style.About__Light__Image}>
          <img src={aboutLightImage} alt="" />
        </div>
      </div>
    )
}
export default About