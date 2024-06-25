import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return(
        <>
        <section className='bg-white py-20' id='about'>
        <div className="align-element md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} className='w-full h-64'/>
                <article>
                    <SectionTitle text='Who is Ridwan Adebosin?'/>
                    <p className='text-slate-600 mt-8 leading-loose'>
                    As a Frontend developer specializing in web applications, I embarked on my software engineering journey a year ago. Utilizing HTML, CSS, JavaScript, React, and TypeScript, along with proficient use of GitHub, I craft not just apps, but standards-compliant applications prioritizing accessibility for keyboard and onscreen users, and ensure passing tests prior to deployment.
                    </p>

                </article>
            </div>

        </section>    
        </>
    )
};

export default About;