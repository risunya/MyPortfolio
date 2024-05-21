import { CssLogo } from './images/csslogo';
import { DockerLogo } from './images/dockerlogo';
import { FigmaLogo } from './images/figmalogo';
import { HtmlLogo } from './images/htmllogo';
import { JavaScriptLogo } from './images/javascriptlogo';
import { JestLogo } from './images/jestlogo';
import { MongoLogo } from './images/mongodblogo';
import { NodeLogo } from './images/nodelogo';
import { NpmLogo } from './images/npmlogo';
import { PostgresLogo } from './images/postgreslogo';
import { ReactLogo } from './images/reactlogo';
import { ScssLogo } from './images/scsslogo';
import { TypeScriptLogo } from './images/typescriptlogo';
import { ViteLogo } from './images/vitelogo';
import { WebpackLogo } from './images/webpacklogo';
import './marqueecomponent.scss';
import Marquee from "react-fast-marquee";

export const MarqueeComponent = () => {
    return (
        <div className="marquee-wrapper">
            <div className='marquee'>
                <Marquee speed={60} autoFill={true} direction='right' pauseOnHover={true}>
                    <div className="marquee-item">
                        <div className="marquee-item__name">FRONTEND</div>
                        <div className="marquee-item__pictures">
                            <HtmlLogo/>
                            <CssLogo/>
                            <ScssLogo/>
                            <ViteLogo/>
                            <WebpackLogo/>
                            <ReactLogo/>
                            <TypeScriptLogo/>
                            <JavaScriptLogo/>
                            <JestLogo/>
                        </div>
                    </div>
                    <div className="marquee-item">
                        <div className="marquee-item__name">BACKEND</div>
                        <div className="marquee-item__pictures">
                            <NodeLogo/>
                            <PostgresLogo/>
                            <MongoLogo/>
                        </div>
                    </div>
                    <div className="marquee-item">
                    <div className="marquee-item__name">HELPERS</div>
                        <div className="marquee-item__pictures">
                            <NpmLogo/>
                            <FigmaLogo/>
                            <DockerLogo/>
                        </div>
                    </div>
                </Marquee>
            </div>
            <div className="marquee">
            <Marquee speed={60} autoFill={true} direction='left' pauseOnHover={true}>
                    <div className="marquee-item">
                        <div className="marquee-item__name">FRONTEND</div>
                        <div className="marquee-item__pictures">
                            <HtmlLogo/>
                            <CssLogo/>
                            <ScssLogo/>
                            <ViteLogo/>
                            <WebpackLogo/>
                            <ReactLogo/>
                            <TypeScriptLogo/>
                            <JavaScriptLogo/>
                            <JestLogo/>
                        </div>
                    </div>
                    <div className="marquee-item">
                        <div className="marquee-item__name">BACKEND</div>
                        <div className="marquee-item__pictures">
                            <NodeLogo/>
                            <PostgresLogo/>
                            <MongoLogo/>
                        </div>
                    </div>
                    <div className="marquee-item">
                    <div className="marquee-item__name">HELPERS</div>
                        <div className="marquee-item__pictures">
                            <NpmLogo/>
                            <FigmaLogo/>
                            <DockerLogo/>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}