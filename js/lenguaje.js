let isSpanish = false; // Estado inicial: Inglés

function toggleLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionHome = document.getElementById('home');
    const sectionServices = document.getElementById('services');
    const sectionHubSpot = document.getElementById('hubspot');
    const sectionData = document.getElementById('Data');
    const sectionHowWeWork = document.querySelector('.section-how-we-work');
    const sectionContact = document.getElementById('contact');
    const sectionFastTrack = document.getElementById('fast-track');
    const sectionFooter = document.getElementById('footer');

    if (isSpanish) {
        // Cambiar a Inglés
        languageToggle.innerHTML = '<img src="../sources/icons/spain.svg" alt="Bandera de México" class="flag-icon">' + ' Es';
        navLinks.forEach(link => {
            switch (link.textContent.trim()) {
                case 'Inicio':
                    link.textContent = 'Home';
                    break;
                case 'Servicios':
                    link.textContent = 'Services';
                    break;
                case 'Contacto':
                    link.textContent = 'Contact';
                    break;
                case 'Agendar una Llamada':
                    link.textContent = 'Book A Call';
                    break;
            }
        });

        // Cambiar contenido de la sección Home a Inglés
        sectionHome.innerHTML = `
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div>
                            <h2 class="responsive-heading">Accelerate Your Project With Pixiu X</h2>
                            <p>Discover how Pixiu can elevate your business today</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="#contact" class="btn btn-custom-orange btn-lg btn-block">Contact us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="text-center">
                            <img src="sources/images/construction.webp" alt="Wireframe Example" class="img-fluid floating-image" style="max-width: 100%;">
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección Services a Inglés
        sectionServices.innerHTML = `
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-5 text-left">
                        <h2 style="margin-bottom: 1rem;">Custom Software Development</h2>
                        <p>We specialize in creating tailored software solutions that meet your specific business needs. Our team ensures high-quality, efficient, and scalable software that enhances your operations and drives growth.</p>
                        <img src="sources/images/Imagenes Pixiu/Programming-pana.png" alt="Custom Image" class="img-fluid mt-4 mb-4" style="width: 90%;">
                        <a href="#contact" class="btn btn-custom-orange btn-lg">Contact Us</a>
                    </div>
                    <div class="col-lg-7 mt-4 mt-lg-5">
                        <div class="row">
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/code.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Web Design</h5>
                                        <p class="card-text">Developing stunning one-of-a-kind digital designs that catch people’s eyes and bring your brand to life online. Our creative team crafts unique visual experiences that resonate with your audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/web.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Custom Web Development</h5>
                                        <p class="card-text">Our customized web development solutions provide high accuracy and technological competence. We deliver fully functional, highly interactive, and dynamic web applications that elevate your digital presence.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/mobile.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Mobile Applications</h5>
                                        <p class="card-text">We develop native, hybrid, and web applications. Our team assists clients in selecting the best technology for their project, ensuring a seamless and efficient development process.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/ecommerce.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">E-commerce Web Development</h5>
                                        <p class="card-text">We help you create and launch your own online store easily and quickly. Our solutions streamline the process, allowing you to start selling your products without hassle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección HubSpot a Inglés
        sectionHubSpot.innerHTML = `
            <div class="container-fluid">
                <h2 class="responsive-heading mb-4 text-center">HubSpot implementation and consulting</h2>
                <div class="row align-items-center">
                    <div class="col-md-6 text-left">
                        <img src="sources/images/hubspot.webp" alt="Wireframe Example" class="img-fluid mb-4">
                    </div>
                    <div class="col-md-6 d-flex align-items-end justify-content-center">
                        <div class="text-justify">
                            <p><strong>HubSpot Implementation: </strong>Maximize HubSpot's potential with tailored onboarding and training, seamlessly integrating it into your ecosystem.</p>
                            <p><strong>HubSpot Optimization: </strong>Address daily challenges, enhance performance with custom reporting, data management, custom objects, workflows, and automations.</p>
                            <p><strong>Personalized HubSpot Consulting: </strong>Certified experts offer one-on-one consultations to optimize infrastructure, resolve issues, and boost your company's use of HubSpot.</p>
                            <a href="#contact" class="btn btn-custom-orange btn-lg mt-4">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección Data a Inglés
        sectionData.innerHTML = `
            <div class="container-fluid">
                <h2 class="mb-4 text-center" style="font-size: 3rem;">Data Extraction</h2>
                <div class="row align-items-center">
                    <div class="col-md-6 d-flex align-items-end justify-content-center">
                        <div class="text-justify">
                            <p><strong>Website data extraction: </strong>Obtain precise web data promptly using APIs, scripts, and manual methods, organized into a database for easy retrieval.</p>
                            <p><strong>Prospect/Lead Data Extraction: </strong>Enhance sales and marketing by identifying and extracting customer lead information, providing tailored prospect lists.</p>
                            <p><strong>Social Media Data Extraction: </strong>Gather comprehensive data from LinkedIn, Facebook, X (formerly Twitter), and more, using diverse search criteria.</p>
                            <p><strong>Market Research Data Extraction: </strong>Accelerate research with accurate data on target audiences, market trends, competitive analysis, and customer insights.</p>
                            <a href="scrap.html" class="btn btn-custom-orange btn-lg mt-4">Learn More</a>
                        </div>
                    </div>
                    <div class="col-md-6 text-right">
                        <img src="sources/images/Data.webp" alt="Wireframe Example" class="img-fluid mb-4" style="width: 85%;">
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección How we work a Inglés
        sectionHowWeWork.innerHTML = `
                <div class="container-fluid">
                    <h2 style="margin-bottom: 1rem;">How we work</h2>
                    <div class="steps">
                        <div class="step" id="step1">
                            <div class="step-title">1st Step</div>
                            <div class="step-content">
                                <h3>Initial Consultation</h3>
                                <p>Our first interaction begins with understanding your requirements, industry, tech stacks, architecture, deadlines, and budget for custom software development, HubSpot consulting, or data scraping services.</p>
                            </div>
                        </div>
                        <div class="step" id="step2">
                            <div class="step-title">2nd Step</div>
                            <div class="step-content">
                                <h3>Requirement Analysis</h3>
                                <p>Next, you connect with our tech team to simplify your project and explore technical possibilities tailored to your needs.</p>
                            </div>
                        </div>
                        <div class="step" id="step3">
                            <div class="step-title">3rd Step</div>
                            <div class="step-content">
                                <h3>Final Project Estimation</h3>
                                <p>We’ll prepare an estimation with scope and objectives and share it with you for review. Once agreed, we can proceed with signing the NDA.</p>
                            </div>
                        </div>
                        <div class="step" id="step4">
                            <div class="step-title">4th Step</div>
                            <div class="step-content">
                                <h3>Project Kickoff</h3>
                                <p>After you sign off on the project, we will immediately begin. Our team will work closely with you, functioning as an extension of your in-house team.</p>
                            </div>
                        </div>
                    </div>
                    <div class="navigation">
                        <button id="prev" onclick="prevStep()">←</button>
                        <button id="next" onclick="nextStep()">→</button>
                    </div>
                </div>
            `;

        // Cambiar contenido de la sección Contact Us a Inglés
        sectionContact.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8 d-flex justify-content-center">
                    <form class="form">
                        <div class="flex">
                            <label>
                                <input required placeholder="First Name" type="text" class="input">
                            </label>

                            <label>
                                <input required placeholder="Last Name" type="text" class="input">
                            </label>
                        </div>

                        <label>
                            <input required placeholder="Email" type="email" class="input">
                        </label>

                        <label>
                            <select required class="input" id="service-select">
                                <option value="" selected disabled>Select a Service</option>
                                <option value="option1">Custom Software Development</option>
                                <option value="option2">HubSpot implementation and consulting</option>
                                <option value="option3">Data Extraction</option>
                            </select>
                        </label>

                        <!-- Segundo dropdown que se muestra cuando se selecciona "Custom Software Development" -->
                        <div class="custom-software-dropdown" style="display: none;">
                            <label>
                                <select class="input">
                                    <option value="" selected disabled>Select an Option</option>
                                    <option value="optionA">Web Design</option>
                                    <option value="optionB">Custom Web Development</option>
                                    <option value="optionC">Mobile Applications</option>
                                    <option value="optionC">E-Commerce Web Development</option>
                                </select>
                            </label>
                        </div>

                        <label>
                            <textarea required rows="3" placeholder="Hello, I am interested in hiring your services for....."
                                class="input01"></textarea>
                        </label>

                        <button type="submit" class="fancy">
                            <span class="top-key"></span>
                            <span class="text">Submit</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

        // Cambiar contenido de la sección Fast-Track Your Development Journey With Pixiu X a Inglés
        sectionFastTrack.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Fast-Track Your Development Journey With Pixiu X</h2>
                </div>
            </div>
        </div>
    `;

        // Cambiar contenido de la sección Footer a Inglés
        sectionFooter.innerHTML = `
            <div class="container-fluid">
            <div class="row">
                <!-- Columna 1: Logo, párrafo y redes sociales -->
                <div class="col-lg-4 col-md-4 mb-4 mb-lg-0">
                    <img src="sources/images/Logo.webp" alt="Logo" class="img-fluid mb- logo-footer">
                    <p>At Pixiu, we focus on excellent service and innovation, specializing in custom software development, HubSpot consulting, and data scraping services. We're on a mission to bridge the gap between Marketplace Businesses and custom solutions.
                        Contact us for inquiries on how we can improve your business.</p>
                    <div class="wrapper">
                        <a href="https://www.linkedin.com/company/pixiu-x" target="_blank">
                            <li class="icon linkedin">
                                <span class="tooltip">LinkedIn</span>
                                <svg fill="#fff" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                      fill-rule="evenodd"></path>
                  </g>
                </svg>
                            </li>
                        </a>
                        <a href="" target="_blank">
                            <li class="icon github">
                                <span class="tooltip">GitHub</span>
                                <svg width="32.5px" height="32.5px" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                      stroke="#FFFFFF" stroke-linejoin="round"></path>
                  </g>
                </svg>
                            </li>
                        </a>
                        <a href="" target="_blank">
                            <li class="icon Upwork">
                                <span class="tooltip">Upwork</span>
                                <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="m 10.2805,7.579 c -0.551,0 -1.0675,-0.2335 -1.537,-0.6135 l 0.114,-0.538 0.004,-0.021 c 0.1035,-0.5715 0.4245,-1.53 1.4195,-1.53 0.746,0 1.3515,0.606 1.3515,1.3515 -5e-4,0.7445 -0.606,1.351 -1.352,1.351 z m 0,-4.07 C 9.011,3.509 8.0255,4.3335 7.6255,5.692 7.0155,4.775 6.5515,3.674 6.282,2.746 l -1.368,0 0,3.556 C 4.913,7.005 4.3435,7.575 3.6405,7.576 2.938,7.575 2.369,7.0045 2.368,6.302 l 0,-3.556 -1.368,0 0,3.556 C 1,7.759 2.185,8.9535 3.6405,8.9535 5.097,8.9535 6.282,7.759 6.282,6.302 l 0,-0.595 c 0.2645,0.5535 0.591,1.1145 0.987,1.6105 l -0.8365,3.9365 1.3985,0 0.6065,-2.855 C 8.969,8.7385 9.58,8.9535 10.2805,8.9535 11.7805,8.9535 13,7.7275 13,6.2285 13,4.7285 11.7805,3.509 10.2805,3.509 Z">
                    </path>
                  </g>
                </svg>
                            </li>
                        </a>
                        <a href="" target="_blank">
                            <li class="icon Whatsapp">
                                <span class="tooltip">Whatsapp</span>
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                      fill="#ffffff"></path>
                  </g>
                </svg>
                            </li>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 mb-4 mb-lg-0">
                </div>
                <!-- Columna 2: Servicios -->
                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h5>Services</h5>
                    <ul class="list-unstyled">
                        <li><a href="#services">Custom Web Development</a></li>
                        <li><a href="#hubspot">HubSpot Consulting</a></li>
                        <li><a href="#Data">Data Extraction</a></li>
                    </ul>
                </div>
                <!-- Columna 3: Oficina en EE.UU. -->
                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h5>Office Locations</h5>
                    <ul class="list-unstyled">
                        <li>Miami Beach, FL, US</li>
                        <li>+1 (786) 798-8207</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li>Buenos Aires, Argentina</li>
                        <li>+54 9 11 3510-8922</li>
                    </ul>
                </div>
                <!-- Columna 5: Columna vacía para espacio -->
                <div class="col-lg-4 col-md-12">
                    <!-- Espacio en blanco -->
                </div>
            </div>
        </div>
        `;

    } else {
        // Cambiar a Español
        languageToggle.innerHTML = '<img src="../sources/icons/USA.svg" alt="Bandera de US" class="flag-icon">' + ' En';

        navLinks.forEach(link => {
            switch (link.textContent.trim()) {
                case 'Home':
                    link.textContent = 'Inicio';
                    break;
                case 'Services':
                    link.textContent = 'Servicios';
                    break;
                case 'Contact':
                    link.textContent = 'Contacto';
                    break;
                case 'Book A Call':
                    link.textContent = 'Agendar una Llamada';
                    break;
            }
        });

        // Cambiar contenido de la sección Home a Español
        sectionHome.innerHTML = `
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div>
                            <h2 style="font-size: 3.5rem;" class="responsive-heading">Impulsa tus Proyectos con Pixiu X</h2>
                            <p>Descubre cómo Pixiu puede elevar tu negocio hoy</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="#contact" class="btn btn-custom-orange btn-lg btn-block">Contáctanos</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="text-center">
                            <img src="sources/images/construction.webp" alt="Wireframe Example" class="img-fluid floating-image" style="max-width: 100%;">
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección Services a Español
        sectionServices.innerHTML = `
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-5 text-left">
                        <h2 style="margin-bottom: 1rem;">Desarrollo de Software Personalizado</h2>
                        <p>Nos especializamos en crear soluciones de software a medida que satisfacen las necesidades específicas de tu negocio. Nuestro equipo garantiza un software de alta calidad, eficiente y escalable que mejora tus operaciones e impulsa el crecimiento.</p>
                        <img src="sources/images/Imagenes Pixiu/Programming-pana.png" alt="Custom Image" class="img-fluid mt-4 mb-4" style="width: 90%;">
                        <a href="#contact" class="btn btn-custom-orange btn-lg">Contáctanos</a>
                    </div>
                    <div class="col-lg-7 mt-4 mt-lg-5">
                        <div class="row">
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/code.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Diseño Web</h5>
                                        <p class="card-text">Desarrollamos diseños digitales impresionantes y únicos que captan la atención y dan vida a tu marca en línea. Nuestro equipo creativo crea experiencias visuales que resuenan profundamente con tu audiencia.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/web.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Desarrollo Web Personalizado</h5>
                                        <p class="card-text">Nuestras soluciones de desarrollo web personalizadas ofrecen alta precisión y competencia tecnológica. Creamos aplicaciones web totalmente funcionales, altamente interactivas y dinámicas que elevan tu presencia digital.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/mobile.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Aplicaciones Móviles</h5>
                                        <p class="card-text">Desarrollamos aplicaciones nativas, híbridas y web. Nuestro equipo te ayuda a seleccionar la mejor tecnología para tu proyecto, garantizando un proceso de desarrollo fluido y eficiente.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="card">
                                    <div class="card-body text-left">
                                        <img src="sources/icons/ecommerce.svg" alt="Code Icon" class="icon-image">
                                        <h5 class="card-title">Desarrollo de Comercio Electrónico</h5>
                                        <p class="card-text">Te ayudamos a crear y lanzar tu propia tienda en línea de manera fácil y rápida. Nuestras soluciones simplifican el proceso, permitiéndote comenzar a vender tus productos sin complicaciones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección HubSpot a Español
        sectionHubSpot.innerHTML = `
            <div class="container-fluid">
                <h2 class="responsive-heading mb-4 text-center">Implementación y Consultoría de HubSpot</h2>
                <div class="row align-items-center">
                    <div class="col-md-6 text-left">
                        <img src="sources/images/hubspot.webp" alt="Ejemplo de Wireframe" class="img-fluid mb-4">
                    </div>
                    <div class="col-md-6 d-flex align-items-end justify-content-center">
                        <div class="text-justify">
                            <p><strong>Implementación de HubSpot: </strong>Maximiza el potencial de HubSpot con una Implementación y capacitación personalizadas, integrándose de manera perfecta en tu ecosistema empresarial.</p>
                            <p><strong>Optimización de HubSpot: </strong>Enfrenta los desafíos diarios y mejora el rendimiento de tu sistema con informes personalizados, gestión de datos, creación de objetos personalizados, flujos de trabajo y automatizaciones.</p>
                            <p><strong>Consultoría Personalizada de HubSpot: </strong>Nuestros expertos certificados ofrecen consultas individuales para optimizar la infraestructura de HubSpot, resolver problemas existentes y mejorar el uso de Hubspot en tu empresa.</p>
                            <a href="#contact" class="btn btn-custom-orange btn-lg mt-4">Contáctanos</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección Data a Español
        sectionData.innerHTML = `
            <div class="container-fluid">
                <h2 class="mb-4 text-center" style="font-size: 3rem;">Extracción de Datos (Data Scraping)</h2>
                <div class="row align-items-center">
                    <div class="col-md-6 d-flex align-items-end justify-content-center">
                        <div class="text-justify">
                            <p><strong>Extracción de datos del sitio web: </strong>Obtén datos web precisos de manera rápida mediante APIs, scripts y métodos manuales. Organizamos estos datos en una base de datos para facilitar su recuperación.</p>
                            <p><strong>Extracción de Datos de Prospectos/Leads: </strong>Mejora tus esfuerzos de ventas y marketing identificando y extrayendo información de leads de clientes, proporcionándote listas de prospectos personalizadas.</p>
                            <p><strong>Extracción de Datos de Redes Sociales: </strong>Recopila datos completos de LinkedIn, Facebook, X (anteriormente Twitter) y otras redes sociales utilizando diversos criterios de búsqueda.</p>
                            <p><strong>Investigación de Mercado y Extracción de Datos: </strong>Agiliza tu investigación con datos precisos sobre audiencias objetivo, tendencias de mercado, análisis competitivo e insights de clientes.</p>
                            <a href="scrap.html" class="btn btn-custom-orange btn-lg mt-4">Saber Mas</a>
                        </div>
                    </div>
                    <div class="col-md-6 text-right">
                        <img src="sources/images/Data.webp" alt="Ejemplo de Wireframe" class="img-fluid mb-4" style="width: 85%;">
                    </div>
                </div>
            </div>
        `;

        // Cambiar contenido de la sección How we work a Español
        sectionHowWeWork.innerHTML = `
                <div class="container-fluid">
                    <h2 style="margin-bottom: 1rem;">Nuestro Proceso de Trabajo</h2>
                    <div class="steps">
                        <div class="step" id="step1">
                            <div class="step-title">1er Paso</div>
                            <div class="step-content">
                                <h3>Consulta Inicial</h3>
                                <p>Nuestra primera interacción comienza con la comprensión de tus requisitos, industria, pilas tecnológicas, arquitectura, plazos y presupuesto para desarrollo de software personalizado, consultoría de HubSpot o servicios de extracción de datos.</p>
                            </div>
                        </div>
                        <div class="step" id="step2">
                            <div class="step-title">2do Paso</div>
                            <div class="step-content">
                                <h3>Análisis de Requisitos</h3>
                                <p>Luego, te conectarás con nuestro equipo técnico para simplificar tu proyecto y explorar posibilidades técnicas adaptadas a tus necesidades.</p>
                            </div>
                        </div>
                        <div class="step" id="step3">
                            <div class="step-title">3er Paso</div>
                            <div class="step-content">
                                <h3>Estimación Final del Proyecto</h3>
                                <p>Prepararemos una estimación detallada con el alcance y los objetivos del proyecto. Te la compartiremos para su revisión y, una vez acordada, procederemos con la firma del acuerdo de confidencialidad (NDA).</p>
                            </div>
                        </div>
                        <div class="step" id="step4">
                            <div class="step-title">4to Paso</div>
                            <div class="step-content">
                                <h3>Inicio del Proyecto</h3>
                                <p>Una vez aprobado el proyecto, comenzaremos de inmediato. Nuestro equipo trabajará estrechamente contigo, funcionando como una extensión de tu equipo interno para asegurar una colaboración fluida y exitosa.</p>
                            </div>
                        </div>
                    </div>
                    <div class="navigation">
                        <button id="prev" onclick="prevStep()">←</button>
                        <button id="next" onclick="nextStep()">→</button>
                    </div>
                </div>
            `;

        // Cambiar contenido de la sección Contact Us a Español
        sectionContact.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Contacto</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8 d-flex justify-content-center">
                    <form class="form">
                        <div class="flex">
                            <label>
                                <input required placeholder="Nombre" type="text" class="input">
                            </label>

                            <label>
                                <input required placeholder="Apellido" type="text" class="input">
                            </label>
                        </div>

                        <label>
                            <input required placeholder="Correo electrónico" type="email" class="input">
                        </label>

                        <label>
                            <select required class="input" id="service-select">
                                <option value="" selected disabled>Selecciona un Servicio</option>
                                <option value="option1">Desarrollo de Software Personalizado</option>
                                <option value="option2">Implementación y Consultoría de HubSpot</option>
                                <option value="option3">Extracción de Datos</option>
                            </select>
                        </label>

                        <!-- Segundo dropdown que se muestra cuando se selecciona "Custom Software Development" -->
                        <div class="custom-software-dropdown" style="display: none;">
                            <label>
                                <select class="input">
                                    <option value="" selected disabled>Selecciona una opción</option>
                                    <option value="optionA">Diseño Web</option>
                                    <option value="optionB">Desarrollo Web Personalizado</option>
                                    <option value="optionC">Aplicaciones Móviles</option>
                                    <option value="optionC">Desarrollo de Comercio Electrónico</option>
                                </select>
                            </label>
                        </div>

                        <label>
                            <textarea required rows="3" placeholder="Hola, estoy interesado en contratar sus servicios para....."
                                class="input01"></textarea>
                        </label>

                        <button type="submit" class="fancy">
                            <span class="top-key"></span>
                            <span class="text">Enviar</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

        // Cambiar contenido de la sección Fast-Track Your Development Journey With Pixiu X a Español
        sectionFastTrack.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Acelera el Éxito de tus Proyectos con Pixiu</h2>
                </div>
            </div>
        </div>
    `;

        // Cambiar contenido de la sección Footer a Español
        sectionFooter.innerHTML = `
            <div class="container-fluid">
            <div class="row">
                <!-- Columna 1: Logo, párrafo y redes sociales -->
                <div class="col-lg-4 col-md-4 mb-4 mb-lg-0">
                    <img src="sources/images/Logo.webp" alt="Logo" class="img-fluid mb- logo-footer">
            <p>En Pixiu nos dedicamos a proporcionar un servicio excelente e innovador, especializándonos en desarrollo de software personalizado, consultoría de HubSpot y servicios de extracción de datos. Nuestra misión es cerrar la brecha entre las empresas del mercado y las soluciones personalizadas. ¡Contáctanos para obtener más información sobre cómo podemos mejorar tu negocio!</p>
                    <div class="wrapper">
                        <a href="https://www.linkedin.com/company/pixiu-x" target="_blank">
                            <li class="icon linkedin">
                                <span class="tooltip">LinkedIn</span>
                                <svg fill="#fff" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                      fill-rule="evenodd"></path>
                  </g>
                </svg>
                            </li>
                        </a>
                        <a href="" target="_blank">
                            <li class="icon github">
                                <span class="tooltip">GitHub</span>
                                <svg width="32.5px" height="32.5px" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                      stroke="#FFFFFF" stroke-linejoin="round"></path>
                  </g>
                </svg>
                            </li>
                        </a>
                        <a href="" target="_blank">
                            <li class="icon Upwork">
                                <span class="tooltip">Upwork</span>
                                <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="m 10.2805,7.579 c -0.551,0 -1.0675,-0.2335 -1.537,-0.6135 l 0.114,-0.538 0.004,-0.021 c 0.1035,-0.5715 0.4245,-1.53 1.4195,-1.53 0.746,0 1.3515,0.606 1.3515,1.3515 -5e-4,0.7445 -0.606,1.351 -1.352,1.351 z m 0,-4.07 C 9.011,3.509 8.0255,4.3335 7.6255,5.692 7.0155,4.775 6.5515,3.674 6.282,2.746 l -1.368,0 0,3.556 C 4.913,7.005 4.3435,7.575 3.6405,7.576 2.938,7.575 2.369,7.0045 2.368,6.302 l 0,-3.556 -1.368,0 0,3.556 C 1,7.759 2.185,8.9535 3.6405,8.9535 5.097,8.9535 6.282,7.759 6.282,6.302 l 0,-0.595 c 0.2645,0.5535 0.591,1.1145 0.987,1.6105 l -0.8365,3.9365 1.3985,0 0.6065,-2.855 C 8.969,8.7385 9.58,8.9535 10.2805,8.9535 11.7805,8.9535 13,7.7275 13,6.2285 13,4.7285 11.7805,3.509 10.2805,3.509 Z">
                    </path>
                  </g>
                </svg>
                            </li>
                        </a>
                        <a href="" target="_blank">
                            <li class="icon Whatsapp">
                                <span class="tooltip">Whatsapp</span>
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                      fill="#ffffff"></path>
                  </g>
                </svg>
                            </li>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 mb-4 mb-lg-0">
                </div>
                <!-- Columna 2: Servicios -->
                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h5>Servicios</h5>
                    <ul class="list-unstyled">
                        <li><a href="#services">Desarrollo de Software Personalizado</a></li>
                        <li><a href="#hubspot">Consultoría de HubSpot</a></li>
                        <li><a href="#Data">Extracción de Datos</a></li>
                    </ul>
                </div>
                <!-- Columna 3: Oficina en EE.UU. -->
                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h5>Oficinas</h5>
                    <ul class="list-unstyled">
                        <li>Miami Beach, FL, US</li>
                        <li>+1 (786) 798-8207</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li>Buenos Aires, Argentina</li>
                        <li>+54 9 11 3510-8922</li>
                    </ul>
                </div>
                <!-- Columna 5: Columna vacía para espacio -->
                <div class="col-lg-4 col-md-12">
                    <!-- Espacio en blanco -->
                </div>
            </div>
        </div>
        `;

    }

    isSpanish = !isSpanish; // Alternar el estado
}