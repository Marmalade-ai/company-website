import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import HeroImage from '../svg/HeroImage';
import SEO from '../components/seo';

const Index = () => (
  <Layout>
    <SEO title="Home" description="What is Marmalade AI?" />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-4xl lg:text-left lg:text-5xl xl:text-6xl font-bold leading-none">
            Making freelancer networking easier.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            How freelancers connect with peers to share gigs and stay
            up-to-date.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
            <a href="https://forum.marmalade.ai/">
              <Button size="lg">Forum</Button>
            </a>
          </p>
        </div>
        <div className="lg:w-1/3">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="homeSubHeading">Why Choose Marmalade?</h2>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">Improved Networking</h3>
              <p className="splitBody">
                Meet new people more frequently and more efficiently.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../images/networking.jpg"
              alt="Networking"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="splitHeading">Automated Matching</h3>
              <p className="splitBody">
                You provide your profile and networking goals. We suggest people
                that you should meet. It&apos;s that easy.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/matching.jpg"
              alt="Matching"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">Serendipity Chats</h3>
              <p className="splitBody">
                Indicate that you are available and we will match you with
                someone else who is also ready to network.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/chatting.jpg"
              alt="Chatting"
            />
          }
        />
      </div>
    </section>
    <section id="benefits" className="py-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="homeSubHeading">Get Started with Marmalade AI</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="cardHeading">Learn Something New</h3>
              <p className="cardBody">
                Keep up with the latest tools, techniques, and technologies by
                meeting regularly with your peers.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="cardHeading">Collaborate</h3>
              <p className="cardBody">
                Find peers with whom you would like to collaborate, either for
                paid projects or side projects.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="cardHeading">Find a Gig</h3>
              <p className="cardBody">
                Meet peers regularly to create deeper relationships, so that you
                know who to call on when you need help.
              </p>
            </Card>
          </div>
        </div>
        <p className="mt-8">
          <Button size="xl">Get Started for Free</Button>
        </p>
      </div>
    </section>

    <section id="pricing" className="py-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="homeSubHeading">Choosing a Plan</h2>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-12">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium bg-primary text-white uppercase tracking-wider"
                      >
                        Features
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium bg-primary text-white uppercase tracking-wider"
                      >
                        Free 60-day trial
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium bg-primary text-white uppercase tracking-wider"
                      >
                        $5.00/mo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center ml-4 ">
                        <div className="text-sm font-medium">
                          Browse Member Profiles
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center ml-4 ">
                        <div className="text-sm font-medium">
                          Direct Messaging
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center ml-4 ">
                        <div className="text-sm font-medium">
                          Automated Matching
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center ml-4 ">
                        <div className="text-sm font-medium">
                          Premium Feature 1
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">No</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center ml-4 ">
                        <div className="text-sm font-medium">
                          Premium Feature 2
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">No</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center ml-4 ">
                        <div className="text-sm font-medium">
                          Premium Feature 3
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">No</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Yes</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
