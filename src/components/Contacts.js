import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+201027068227',
            
        },
        {
            title: 'Email',
            value: 'yehiahossamg@gmail.com'
        },
        {
            title: 'LinkedIn',
            value: '',
            icon: faLinkedin,
            link: 'https://www.linkedin.com/feed/'
        },
        {
            icon: faGithub,
            link: 'https://github.com/yehia-hossam',
            title: 'GitHub',

           
        }
    ]);

    const refTab = useRef();
    const divs = useRef([]);
    CustomHook(refTab, divs);

    return (
        <section className="contacts" ref={refTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                This Is My Contacts
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                Lorem saying through shrinking from toil and pain. These cases 
                are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing
                prevents our being able to do what we like best, every pleasure.
            </div>
            <div className="list" ref={(el) => el && divs.current.push(el)}>
                {listContacts.map((item, key) => (
                    <div key={key} className="item">
                        <h3>{item.title}</h3>
                        <div>{item.value}</div>
                        {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.icon && <FontAwesomeIcon icon={item.icon} />} 
                            </a>
                        ) : (
                            item.icon && <FontAwesomeIcon icon={item.icon} />
                        )}
                    </div>
                ))}
            </div>
            <footer>
                <div className="footer">
                <span>Copyright @ 2024 Design & Yehia Hossam</span>

                </div>
            </footer>
        </section>
    );
};

export default Contacts;
