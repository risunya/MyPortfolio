import { Aboutme } from "../../components/about-me/Aboutme"
import { Carousel } from "../../components/carousel/Carousel"
import { MarqueeComponent } from "../../components/marquee/MarqueeComponent"
import { Profile } from "../../components/profile/Profile"

export const Home = () => {
    return (
        <>
            <Profile/>
            <MarqueeComponent/>
            <Carousel />
            <Aboutme />
        </>
    )
}