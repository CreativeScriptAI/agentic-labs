import React from "react";

const TechStackSection: React.FC = () => {
  return (
    <div className="w-full py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium text-sm uppercase tracking-wider mb-4">
            BUILD → INTEGRATE → VALIDATE
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Full-Stack AI Agent Development Card - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M43.2956 32.25C43.4937 32.5938 43.5476 33.0021 43.4453 33.3855C43.343 33.7689 43.093 34.0962 42.75 34.2957L24.75 44.7957C24.5206 44.9294 24.2599 44.9999 23.9944 44.9999C23.7289 44.9999 23.4681 44.9294 23.2388 44.7957L5.23875 34.2957C4.90068 34.0925 4.65622 33.7644 4.55831 33.3823C4.4604 33.0002 4.51692 32.595 4.71563 32.2543C4.91433 31.9135 5.23923 31.6648 5.61999 31.5619C6.00075 31.459 6.40672 31.5102 6.75 31.7044L24 41.7638L41.25 31.7044C41.5938 31.5063 42.0021 31.4525 42.3855 31.5547C42.7689 31.657 43.0962 31.907 43.2956 32.25ZM41.25 22.7044L24 32.7638L6.75 22.7044C6.40846 22.5344 6.01495 22.5008 5.64957 22.6107C5.28419 22.7205 4.97441 22.9655 4.78326 23.2957C4.59212 23.6259 4.53399 24.0165 4.6207 24.3881C4.70741 24.7596 4.93244 25.0842 5.25 25.2957L23.25 35.7957C23.4794 35.9294 23.7401 35.9999 24.0056 35.9999C24.2711 35.9999 24.5319 35.9294 24.7612 35.7957L42.7612 25.2957C42.9341 25.1978 43.0859 25.0667 43.2076 24.9097C43.3294 24.7528 43.4188 24.5733 43.4707 24.3815C43.5225 24.1897 43.5357 23.9896 43.5096 23.7927C43.4834 23.5958 43.4184 23.406 43.3183 23.2344C43.2183 23.0628 43.0851 22.9128 42.9266 22.7931C42.7681 22.6734 42.5874 22.5864 42.395 22.5371C42.2025 22.4878 42.0023 22.4772 41.8057 22.5059C41.6091 22.5346 41.4203 22.6021 41.25 22.7044ZM4.5 15C4.5006 14.7373 4.57019 14.4793 4.70181 14.252C4.83344 14.0246 5.02247 13.8358 5.25 13.7044L23.25 3.20441C23.4794 3.07066 23.7401 3.00018 24.0056 3.00018C24.2711 3.00018 24.5319 3.07066 24.7612 3.20441L42.7612 13.7044C42.9877 13.8365 43.1755 14.0257 43.3061 14.253C43.4367 14.4803 43.5054 14.7379 43.5054 15C43.5054 15.2622 43.4367 15.5198 43.3061 15.7471C43.1755 15.9744 42.9877 16.1636 42.7612 16.2957L24.7612 26.7957C24.5319 26.9294 24.2711 26.9999 24.0056 26.9999C23.7401 26.9999 23.4794 26.9294 23.25 26.7957L5.25 16.2957C5.02247 16.1643 4.83344 15.9755 4.70181 15.7481C4.57019 15.5207 4.5006 15.2628 4.5 15ZM8.9775 15L24 23.7638L39.0225 15L24 6.23628L8.9775 15Z"
                        fill="#0062FF"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-red-500 font-medium text-sm uppercase tracking-wider mb-2">
                  VOICE, CHAT, WORKFLOW & INTEGRATIONS.
                </p>
                <h3 className="text-2xl lg:text-3xl font-[500] text-gray-900 mb-4">
                  Full-Stack AI Agent Development.
                </h3>
              </div>

              {/* Right Side - Tech Stack */}
              <div>
                <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-6">
                  TECH STACK WE USE
                </p>

                <div className="space-y-6">
                  {/* LLMs & Frameworks */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        LLMs & Frameworks:
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-9">
                      OpenAI, Anthropic, Llama, LangChain, CrewAI, Haystack
                    </p>
                  </div>

                  {/* Voice & Speech */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Voice & Speech:
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-9">
                      ElevenLabs, Whisper, Speechmatics
                    </p>
                  </div>

                  {/* Databases & Memory */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 16v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Databases & Memory:
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-9">
                      Pinecone, ChromaDB, Weaviate, MongoDB
                    </p>
                  </div>

                  {/* APIs & Integrations */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.5 12c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1zm7.5-1h4v2h-4v-2zm-8 0H4v2h4v-2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        APIs & Integrations:
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-9">
                      HubSpot, Salesforce, Notion, Slack, Google Suite, PandaDoc
                    </p>
                  </div>

                  {/* Deployment */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Deployment:
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-9">
                      AWS, GCP, Azure, custom on-prem solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-Built AI Agents Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-red-500 font-medium text-sm uppercase tracking-wider mb-2">
                  READY-TO-DEPLOY AI AGENTS
                </p>
                <h3 className="text-xl lg:text-2xl font-[500] text-gray-900">
                  Pre-Built AI Agents
                </h3>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M12.9712 23.2425C12.9225 23.4363 11.7037 28 4.99999 28C4.73477 28 4.48042 27.8947 4.29288 27.7071C4.10534 27.5196 3.99999 27.2652 3.99999 27C3.99999 20.2963 8.56374 19.0775 8.75749 19.0288C9.01491 18.9645 9.28734 19.005 9.51485 19.1416C9.74235 19.2781 9.9063 19.4995 9.97061 19.7569C10.0349 20.0143 9.99435 20.2868 9.8578 20.5143C9.72125 20.7418 9.49991 20.9057 9.24249 20.97C9.12999 21.0013 6.43999 21.7875 6.04749 25.9525C10.2125 25.56 11 22.875 11.0325 22.75C11.0988 22.4929 11.2645 22.2727 11.4932 22.1378C11.7219 22.0029 11.9948 21.9643 12.2519 22.0306C12.509 22.0969 12.7292 22.2627 12.8641 22.4913C12.999 22.72 13.0375 22.9929 12.9712 23.25V23.2425ZM24.5962 14.8175L24 15.4138V22.705C24.0015 22.9687 23.9505 23.23 23.8501 23.4738C23.7497 23.7175 23.6018 23.9389 23.415 24.125L19.125 28.4125C18.94 28.5988 18.7199 28.7467 18.4775 28.8475C18.2351 28.9484 17.9751 29.0002 17.7125 29C17.4958 29 17.2805 28.9649 17.075 28.8963C16.7221 28.7796 16.4089 28.5665 16.1708 28.2811C15.9327 27.9957 15.7791 27.6494 15.7275 27.2813L15.0562 22.47L9.52999 16.9438L4.72124 16.2725C4.35267 16.2208 4.00583 16.0673 3.71974 15.8293C3.43366 15.5912 3.21968 15.278 3.10187 14.925C2.98406 14.5719 2.96709 14.193 3.05288 13.8309C3.13868 13.4687 3.32382 13.1377 3.58749 12.875L7.87499 8.58502C8.06108 8.39825 8.28246 8.25035 8.52624 8.14992C8.77002 8.04949 9.03133 7.99853 9.29499 8.00002H16.5862L17.1825 7.40377C20.5175 4.07002 24.5362 3.92627 26.1087 4.02002C26.5963 4.04965 27.0562 4.25671 27.4016 4.60212C27.747 4.94754 27.9541 5.40743 27.9837 5.89502C28.075 7.46377 27.9312 11.4825 24.5975 14.8175H24.5962ZM4.99999 14.2925L9.64374 14.94L14.5862 10H9.29499L4.99999 14.2925ZM11.415 16L16 20.585L23.1812 13.4038C24.149 12.4425 24.8998 11.2852 25.3832 10.0097C25.8666 8.7342 26.0714 7.36999 25.9837 6.00877C24.6232 5.9244 23.2604 6.13131 21.9862 6.61567C20.712 7.10003 19.5559 7.85069 18.595 8.81752L11.415 16ZM22 17.4138L17.0587 22.355L17.7087 27L22 22.705V17.4138Z"
                    fill="#0062FF"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">7+ ready-to-use agents</span>{" "}
                  (support, lead gen, booking, etc.)
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Plug & play</span> with Slack,
                  WhatsApp, CRMs, Email
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Customizable workflows</span>{" "}
                  & branding
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Fastest way to go live</span>{" "}
                  — zero from-scratch build
                </p>
              </div>
            </div>
          </div>

          {/* AI Consulting & Strategy Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-red-500 font-medium text-sm uppercase tracking-wider mb-2">
                  ESTIMATION, VALIDATION, FEASIBILITY
                </p>
                <h3 className="text-xl lg:text-2xl font-[500] text-slate-800">
                  AI Consulting & Strategy
                </h3>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M5.99997 8C5.99997 7.73478 6.10533 7.48043 6.29287 7.29289C6.4804 7.10536 6.73476 7 6.99997 7H8.99997V5C8.99997 4.73478 9.10533 4.48043 9.29287 4.29289C9.4804 4.10536 9.73476 4 9.99997 4C10.2652 4 10.5195 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5V7H13C13.2652 7 13.5195 7.10536 13.7071 7.29289C13.8946 7.48043 14 7.73478 14 8C14 8.26522 13.8946 8.51957 13.7071 8.70711C13.5195 8.89464 13.2652 9 13 9H11V11C11 11.2652 10.8946 11.5196 10.7071 11.7071C10.5195 11.8946 10.2652 12 9.99997 12C9.73476 12 9.4804 11.8946 9.29287 11.7071C9.10533 11.5196 8.99997 11.2652 8.99997 11V9H6.99997C6.73476 9 6.4804 8.89464 6.29287 8.70711C6.10533 8.51957 5.99997 8.26522 5.99997 8ZM23 24H22V23C22 22.7348 21.8946 22.4804 21.7071 22.2929C21.5195 22.1054 21.2652 22 21 22C20.7348 22 20.4804 22.1054 20.2929 22.2929C20.1053 22.4804 20 22.7348 20 23V24H19C18.7348 24 18.4804 24.1054 18.2929 24.2929C18.1053 24.4804 18 24.7348 18 25C18 25.2652 18.1053 25.5196 18.2929 25.7071C18.4804 25.8946 18.7348 26 19 26H20V27C20 27.2652 20.1053 27.5196 20.2929 27.7071C20.4804 27.8946 20.7348 28 21 28C21.2652 28 21.5195 27.8946 21.7071 27.7071C21.8946 27.5196 22 27.2652 22 27V26H23C23.2652 26 23.5195 25.8946 23.7071 25.7071C23.8946 25.5196 24 25.2652 24 25C24 24.7348 23.8946 24.4804 23.7071 24.2929C23.5195 24.1054 23.2652 24 23 24ZM30 18H28V16C28 15.7348 27.8946 15.4804 27.7071 15.2929C27.5195 15.1054 27.2652 15 27 15C26.7348 15 26.4804 15.1054 26.2929 15.2929C26.1053 15.4804 26 15.7348 26 16V18H24C23.7348 18 23.4804 18.1054 23.2929 18.2929C23.1053 18.4804 23 18.7348 23 19C23 19.2652 23.1053 19.5196 23.2929 19.7071C23.4804 19.8946 23.7348 20 24 20H26V22C26 22.2652 26.1053 22.5196 26.2929 22.7071C26.4804 22.8946 26.7348 23 27 23C27.2652 23 27.5195 22.8946 27.7071 22.7071C27.8946 22.5196 28 22.2652 28 22V20H30C30.2652 20 30.5195 19.8946 30.7071 19.7071C30.8946 19.5196 31 19.2652 31 19C31 18.7348 30.8946 18.4804 30.7071 18.2929C30.5195 18.1054 30.2652 18 30 18ZM27.4137 10L9.99997 27.4137C9.62494 27.7885 9.11643 27.9991 8.58622 27.9991C8.05602 27.9991 7.54751 27.7885 7.17247 27.4137L4.58497 24.8288C4.39921 24.643 4.25185 24.4225 4.15131 24.1798C4.05077 23.9372 3.99902 23.6771 3.99902 23.4144C3.99902 23.1517 4.05077 22.8916 4.15131 22.6489C4.25185 22.4062 4.39921 22.1857 4.58497 22L22 4.58625C22.1857 4.40048 22.4062 4.25312 22.6489 4.15259C22.8916 4.05205 23.1517 4.0003 23.4143 4.0003C23.677 4.0003 23.9371 4.05205 24.1798 4.15259C24.4225 4.25312 24.643 4.40048 24.8287 4.58625L27.4137 7.17125C27.5995 7.35697 27.7469 7.57747 27.8474 7.82015C27.9479 8.06283 27.9997 8.32294 27.9997 8.58562C27.9997 8.84831 27.9479 9.10842 27.8474 9.3511C27.7469 9.59378 27.5995 9.81428 27.4137 10ZM20.585 14L18 11.4137L5.99997 23.4137L8.58497 26L20.585 14ZM26 8.58625L23.4137 6L19.4137 10L22 12.5863L26 8.58625Z"
                    fill="#0062FF"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Identify</span> where AI saves
                  time & cost
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Review</span> your workflows &
                  stack
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Plan</span> the right agents
                  to build
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Roadmap to scale</span> from
                  pilot → production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
