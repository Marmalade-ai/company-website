import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
    <Layout>
        <section className="py-20 lg:pb-20 lg:pt-24">
            <div className="px-6 mx-auto lg:w-2/3">
                <h1 className="text-center text-3xl lg:text-5xl font-semibold">Privacy Policy</h1>
                <p className="mt-2">Last Updated: July 8, 2021</p>
                <p className="mt-2">
                    Marmalade AI, Inc. has created this Privacy Notice to explain why we collect particular
                    information and how we will protect your personal privacy when you visit our websites, or
                    otherwise engage with Marmalade AI (e.g., web browsing, online chatting, and online
                    messaging) including through our comapany website and the Marmalade AI web application.
                </p>
                <p className="mt-2">
                    The following discloses our information collection, use, storage and other data processing
                    practices for Marmalade AI.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">Collection of Personal Information</h2>
                <p className="mt-2">
                    Personal information is any information that personally identifies you or from which you
                    could be identified. This may include your name, physical address, telephone number, email
                    address, social security number or other numerical identifier and IP address.
                </p>
                <p className="mt-2">
                    Marmalade AI may collect your personal information through your access and use of
                    websites, web-based applications, or mobile applications, during conversations or
                    correspondence with Marmalade AI representatives, or when you complete an online
                    application or inquiry form.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">
                    We us various technologies to collect information
                </h2>
                <h3 className="mt-6 text-xl font-semibold">Cookies</h3>
                <p className="mt-2">
                    The Marmalade AI website uses cookies. Cookies are text files that are stored in a
                    computer system via an Internet browser.
                </p>
                <h3 className="mt-6 text-xl font-semibold">Internet Protocol Address</h3>
                <p className="mt-2">
                    We collect an IP address from all visitors to our site. An IP address is a number that is
                    automatically assigned to your computer when you use the Internet. We use IP addresses to
                    help diagnose problems with our server, administer our site, analyze trends, gather broad
                    demographic information for aggregate use in order for us to improve the site, and deliver
                    customized, personalized content. In some case we may use your IP address to customize
                    content based on your location.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">Third Parties</h2>
                <p className="mt-2">We may disclose your information to third parties as follows:</p>

                <h3 className="mt-6 text-xl font-semibold">Third-Party Service Providers and Partners</h3>
                <p className="mt-2">
                    At times Chicago Booth will use third parties to process your information on our behalf,
                    for example to provide services, analysis, research and development, optimization and
                    other internal purposes, including, without limitation, to compile usage data.
                </p>
                <h3 className="mt-6 text-xl font-semibold">Required by Law</h3>
                <p className="mt-2">
                    We may share your information with third parties to the extent we are required to do so by
                    law, court order, or subpoena.
                </p>
                <h3 className="mt-6 text-xl font-semibold">Consent</h3>
                <p className="mt-2">
                    We may seek your consent to disclose your information to third parties if we are required
                    to do so. Where we have sought, and you have provided, your express consent for a
                    particular purpose, please note you have the right to withdraw your consent at any time by
                    notifying us at the contact information below.
                </p>
                <h3 className="mt-6 text-xl font-semibold">De-Identified and Aggregate Information</h3>
                <p className="mt-2">
                    We may use and disclose information about our applicants in de-identified or aggregate
                    form without limitation.
                </p>
                <h3 className="mt-6 text-xl font-semibold">International Transfers</h3>
                <p className="mt-2">
                    We may transfer your information to third parties located in other countries. These
                    transfers are made subject to appropriate technical safeguards and contractual provisions
                    to ensure the security of your information.
                </p>
                <p className="mt-2">
                    Occasionally, we may contract with a third party to communicate on our behalf to the
                    third-party's contacts. We don’t collect the email addresses or contact information from
                    these third parties, and we don’t have access to their mailing lists.
                </p>
                <p className="mt-2">
                    We may provide third party mailers with a suppression list of contacts to exclude from
                    their email distribution list. In this situation, the third party doesn’t have permission
                    to keep or market to contacts contained in these suppression lists, or to use them in any
                    way other than as a suppression list for a mailing they are providing on our behalf.
                </p>
                <p className="mt-2">
                    Other than as described above, we will not share your personal information with any third
                    parties.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">Children's Privacy</h2>

                <p className="mt-2">
                    Marmalade AI does not knowingly collect information from children as defined by local law,
                    and does not target its websites or mobile applications to children under these ages. We
                    encourage parents and guardians to take an active role in their children’s online and
                    mobile activities and interests.
                </p>

                <h2 className="mt-6 text-2xl font-semibold">Data Retention</h2>

                <p className="mt-2">
                    The need to retain data varies depending on the type of data. Marmalade AI will retain
                    your personal data as long as necessary for the purpose of processing (e.g., archival,
                    data analysis). We may also retain and use your information in order to comply with our
                    legal obligations, resolve disputes, prevent abuse, and enforce our agreements.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">Security</h2>

                <p className="mt-2">
                    Marmalade AI takes seriously the trust you place in us. All information provided to
                    Marmalade AI is transmitted using SSL (Secure Socket Layer) encryption. SSL is a proven
                    coding system that allows your browser to automatically encrypt, or scramble, data before
                    you send it to us. To prevent unauthorized access or disclosure, to maintain data
                    accuracy, and to ensure the appropriate use of the information, Marmalade AI utilizes
                    reasonable and appropriate technical and administrative procedures to safeguard the
                    information we collect and process. We protect account information by placing it on a
                    secure portion of our website that is only accessible by certain qualified employees of
                    Marmalade AI. Unfortunately, however, no data transmission over the internet is 100
                    percent secure. While we strive to protect your information, we cannot ensure or warrant
                    the security of such information. We strongly advise you not to share your password with
                    anyone.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">Changes to the Privacy Notice</h2>
                <p>
                    Changes may be made to this Privacy Notice and personal information may be used for new
                    purposes. When significant changes are made to our privacy practices, they will be
                    disclosed here. For your convenience please refer to the last updated date.
                </p>
                <h2 className="mt-6 text-2xl font-semibold">Contact Information</h2>
                <p>
                    If you have any questions about this Privacy Notice, the practices of this site, or your dealings with this site, 
                    you can send email to <em>privacy@marmalade.ai</em>.
                </p>

            </div>
        </section>
    </Layout>
);

export default Index;