import './FAQ.scss'
import arrow from '@/assets/logo-yellow.svg';
import faqData from '@/data/faq.json';

const faqs = faqData.data;

const FAQ = () => {
    return (
        <section className="faqSection">
            <div>
                 <h2>Frequently asked questions</h2>
                <div>
                    {
                        faqs.map((faq, index) => (
                            <div key={index} className={`faqGroup ${faq.active ? 'active' : ''}`}>
                                {
                                    faq.group && (
                                        <h4 className={`faqGroupSubHeading ${faq.active ? 'active' : ''}`}>{faq.group}</h4>
                                    )
                                }
                                {
                                    faq.subGroup && (
                                        <h4 className='faqGroupSubHeading'>{faq.subGroup}</h4>
                                    )
                                }
                                <p className='faqItem'>{faq.question}</p>
                                {faq.hasImage && <img src={arrow} alt=''/>}
                            </div>
                        ))
                    }
                </div>
            </div>
           
        </section>
    )
}

export default FAQ;