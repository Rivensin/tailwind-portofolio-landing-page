import React, { useEffect, useState } from 'react'

function Portofolio() {

  // const [post,setPost] = useState({x:0, y:0});
  // const [isHovered,setIsHovered] = useState(false)

  // const handleMouseMove = e => {
  //   if(!isHovered) return;

  //   const {left,top,width,height} = e.currentTarget.getBoundingClientRect();
  //   const x = ((e.clientX - left )/width)*100;
  //   const y = ((e.clientY - top )/width)*100;

  //   setPost({x,y})
  // }

  useEffect(() => {
    //Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    const toggleHamburger = () => {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    }

    hamburger.addEventListener('click',toggleHamburger);

    //Navbar  
    const header = document.querySelector('header');

    const handleScroll = () => {
      if(window.pageYOffset > 0){
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll',handleScroll);
    
    //Cleanup Function
    return () => {
      hamburger.removeEventListener('click',toggleHamburger);
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  return (
    <>    
    {/* Header Start */}
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className='font-bold text-lg text-primary block py-6'>Rivensin</a>
          </div>
          <div className="flex items-center justify-center px-4">
            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4 lg:hidden'>
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
            </button>
            <nav id='nav-menu' className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href="#home" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Beranda</a>
                </li>
                <li className='group'>
                  <a href="#about" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Tentang Saya</a>
                </li>
                <li className='group'>
                  <a href="#portofolio" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portofolio</a>
                </li>
                <li className='group'>
                  <a href="#clients" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Clients</a>
                </li>
                <li className='group'>
                  <a href="#blog" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Blog</a>
                </li>
                <li className='group'>
                  <a href="#contact" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </header>
    {/* Header End */}

    {/* Hero Section Start */}
    <section id='home' className='pt-28'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className='text-base font-semibold text-primary md:text-xl'>Halo Semua✌, saya 
              <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl '>Rivensin</span>
            </h1>
            <h2 className='text-secondary font-medium text-lg mb-5 lg:text-2xl'>
              Front End Developer
            </h2>
            <p className='font-medium text-secondary mb-10 leading-relaxed'>
              Selamat datang di latihan membuat portofolio saya dengan menggunakan Tailwind CSS
            </p>
            <a href="#" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi saya</a>
          </div>
          <div className='w-full self-end p-4 lg:w-1/2'>
            <div className="mt-10 relative lg:mt-0 lg:right-0">
              <img src="img/1725381035677.png" alt="creator" className='max-w-full mx-auto'/>
              <span className='absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
              <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14b8a6" d="M54.2,-22.6C58.7,-3.6,43.1,17.1,21.5,33.7C0,50.3,-27.4,62.9,-44.5,52.6C-61.5,42.2,-68.2,8.9,-59.1,-16.4C-49.9,-41.7,-25,-59,-0.1,-59C24.8,-59,49.6,-41.6,54.2,-22.6Z" transform="translate(100 100)"/>
              </svg>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>   
    {/* //Hero Section End */}

    {/* About Section Start */}
    <section id="about" className='pt-36 pb-32'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>
              Tentang Saya
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>
              Yuk, Belajar Programming bareng Saya!
            </h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>
              Saya senang berbagi ilmu seputar programming dan teknologi. Mari berkembang bersama! 🚀
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>
              Mari Berteman
            </h3>
            <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>
              Ayo terhubung dan berbagi ilmu seputar programming! 😊🚀
            </p> 
            <div className='flex items-center'>
            {/* Github */}
            <a href="https://github.com/Rivensin" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary group'>
              <svg role="img" width= '20' className='group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rivensin-6b8a2a232/" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-blue-600 group'>
              <svg role="img" width= '20' className='fill-current group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LINKEDIN</title><path d="M0 0v24h24V0H0zm3.873 3.6875c1.0359-.0008 1.8758.8391 1.875 1.875-.0003 1.035-.8399 1.8738-1.875 1.873C2.8387 7.4352 2.0003 6.5968 2 5.5625c-.0008-1.035.838-1.8747 1.873-1.875zm4.4903.5078h3.5312l6.7344 10.8125h.045V4.1953H22v16.1172h-3.5469l-6.7168-10.791h-.0468v10.791H8.3633V4.1953zm-6.123 4.7871s.013.0041 3.3886 0v11.2754H2.2402V8.9824z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/rivensin31/" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-red-600 group'>
              <svg role="img" width= '20' className='fill-current group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
            </a>
            
            {/* Facebook */}
            <a href="https://www.facebook.com/Rivensin" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-blue-700 group'>
              <svg role="img" width= '20' className='fill-current group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
            </a>
            
            </div>
          </div>
        </div>
      </div>

    </section>
    {/* About Section End */}
    
    {/* Portofolio Section Start */}
    <section id='portofolio' className='pt-36 pb-16 bg-slate-100'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>
              Portofolio
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Project Terbaru
            </h2>
            <p className='font-medium text-md text-secondary md:text-lg'>
            Lihat proyek terbaru saya dalam dunia programming dan web development! 🚀💻
            </p>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://rivensin.github.io/React-Blog-App/" alt='Blog-A'>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src="img/portofolio/blog-app.png" alt="blog-app" className='w-full'/>
                </div>
                <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                  Blog App
                </h3>
                <p className='font-medium text-base text-secondary'>
                The Blog App is a platform with user authentication, enabling registered users to log in, create and manage their own posts, and explore posts from other users.
                </p>
              </a>
            </div>       
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://rivensin.github.io/Youtube-Home/" target='_blank'>
                {/* <div className='w-[704px] h-[396px] overflow-hidden rounded-lg'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                      setIsHovered(false)
                      setPost({x:50, y:50})
                    }}
                    onMouseMove={handleMouseMove}>
                  <div className='w-full h-full transition duration-300'
                      style={{backgroundImage:"url('img/portofolio/youtube-project.png')", backgroundSize: isHovered ? '120%' : '100%', backgroundPosition:`${post.x}% ${post.y}%`,}}></div>
                </div> */}
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src="img/portofolio/youtube-project.png" alt="React" className='w-full'/>
                </div>
                <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                  Landing Page Youtube
                </h3>
                <p className='font-medium text-base text-slate-600'>
                A simple landing page built with HTML & CSS to practice utility classes, layouts, and responsiveness.
                </p>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://rivensin.github.io/amazon.com/">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src="img/portofolio/amazon.png" alt="appwrite" className='w-full'/>
                </div>
                <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                  Simple Amazon E-Commerce Web 
                </h3>
                <p className='font-medium text-base text-slate-600'>
                  A simple copy Of Amazon E-commerce Website built with HTML,CSS,JavaScript to practice JavaScript feature
                </p>
              </a>
            </div>              
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="img/portofolio/tailwindcss.jpg" alt="tailwind" className='w-full'/>
              </div>
              <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                Landing Page Riven - Tailwind
              </h3>
              <p className='font-medium text-base text-secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi dolore commodi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Portofolio Section End  */}

    {/* Client Section Start */}
    <section id='clients' className="pt-36 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>
              Clients
            </h4>
            <h2 className='font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Yang Pernah Bekerjasama
            </h2>
            <p className='font-medium text-md text-slate-300 md:text-lg'>
              Beberapa klien yang telah bekerja sama dengan saya dalam berbagai proyek. 🤝✨
            </p>
          </div>
        </div>
        <div className='w-full px-4 flex flex-wrap justify-center items-center'>
          <a href="" className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
            <img src="img/clients/xiaomi.svg" alt="xiaomi" className='w-[125px] h-[68.75px] object-contain'/>
          </a>
          <a href="" className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
            <img src="img/clients/bumn.svg" alt="bumn" className='w-[125px] h-[68.75px] object-contain'/>
          </a>
          <a href="" className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
            <img src="img/clients/gojek.svg" alt="gojek" className='w-[125px] h-[68.75px] object-contain'/>
          </a>
          <a href="" className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
            <img src="img/clients/telkom.svg" alt="telkom" className='w-[125px] h-[68.75px] object-contain'/>
          </a>
        </div>
      </div>
    </section>
    {/* Client Section End */}
    
    {/* Blog Section Start */}
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>
              Blog
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Tulisan Terkini
            </h2>
            <p className='font-medium text-md text-secondary md:text-lg'>
              Temukan berbagai artikel terbaru seputar programming dan teknologi. 🚀
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img src="img/blog/programming-languages.jpg" alt="programming" className='w-full h-60'/>
                <div className="py-8 px-8">
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate '>Tips Belajar Programming</a>
                  </h3>
                  <p className='font-medium text-secondary text-base mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!
                  </p>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img src="img/blog/figma.jpg" alt="figma" className='w-full h-60'/>
                <div className="py-8 px-8">
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate '>Design Menggunakan Figma</a>
                  </h3>
                  <p className='font-medium text-secondary text-base mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate odit velit quos.
                  </p>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img src="img/blog/vitest.jpg" alt="vitest" className='w-full h-60'/>
                <div className="py-8 px-8">
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate '>Vitest Crash Course</a>
                  </h3>
                  <p className='font-medium text-secondary text-base mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia vel tempore ea beatae quam.
                  </p>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
    {/* Blog Section Start */}

    {/* Contact Section Start */}
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className='font-semibold text-lg text-primary mb-2'>
                Contact
              </h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
                Hubungi Kami
              </h2>
              <p className='font-medium text-md text-secondary md:text-lg'>
                Ingin berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi kami! 📩
              </p>
            </div>
        </div>
        <form action="">
          <div className='w-full lg:w-2/3 lg:mx-auto'>
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className='text-base text-primary font-bold '>
                Nama
              </label>
              <input type="text" id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className='text-base text-primary font-bold'>
                Email
              </label>
              <input type="text" id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="pesan" className='text-base text-primary font-bold'>
                Pesan
              </label>
              <textarea type="text" id='pesan' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32'/>
            </div>
            <div className="w-full px-4 mb-8">
              <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 shadow-lg transition duration-500'>
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    {/* Contact Section End */}

    {/* Footer Section Start */}
    <footer className="bg-dark pt-12 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3 ">
            <h2 className='font-bold text-white text-4xl mb-5'>Riven</h2>
            <h3 className='font-bold text-2xl mb-2'>Hubungi Kami</h3>
            <p>Rivensinn@gmail.com</p>
            <p>Jl Riau</p>
            <p>Pekanbaru</p>
          </div>
           <div className="w-full px-4 mb-12 font-medium md:w-1/3">
            <h3 className='font-semibold text-xl text-white mb-5'>Kategori Tulisan</h3>
            <ul>
              <li>
                <a href="#" className='inline-block text-base hover:text-primary text-slate-300'>Programming</a>
              </li>
              <li>
                <a href="#" className='inline-block text-base hover:text-primary text-slate-300'>Design</a>
              </li>
              <li>
                <a href="#" className='inline-block text-base hover:text-primary text-slate-300'>Testing</a>
              </li>
            </ul>
          </div>
           <div className="w-full px-4 mb-12 font-medium md:w-1/3">
            <h3 className='font-semibold text-xl text-white mb-5'>Tautan</h3>
            <ul>
              <li>
                <a href="#home" className='inline-block text-base hover:text-primary text-slate-300'>Beranda</a>
              </li>
              <li>
                <a href="#about" className='inline-block text-base hover:text-primary text-slate-300'>Tentang Saya</a>
              </li>
              <li>
                <a href="#portofolio" className='inline-block text-base hover:text-primary text-slate-300'>Portofolio</a>
              </li>
              <li>
                <a href="#clients" className='inline-block text-base hover:text-primary text-slate-300'>Clients</a>
              </li>
              <li>
                <a href="#blog" className='inline-block text-base hover:text-primary text-slate-300'>Blog</a>
              </li>
              <li>
                <a href="#contact" className='inline-block text-base hover:text-primary text-slate-300'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div className='flex items-center justify-center mb-5'>
              {/* Github */}
              <a href="https://github.com/Rivensin" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary group'>
                <svg role="img" width= '20' className='group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/rivensin-6b8a2a232/" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-blue-600 group'>
                <svg role="img" width= '20' className='fill-current group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LINKEDIN</title><path d="M0 0v24h24V0H0zm3.873 3.6875c1.0359-.0008 1.8758.8391 1.875 1.875-.0003 1.035-.8399 1.8738-1.875 1.873C2.8387 7.4352 2.0003 6.5968 2 5.5625c-.0008-1.035.838-1.8747 1.873-1.875zm4.4903.5078h3.5312l6.7344 10.8125h.045V4.1953H22v16.1172h-3.5469l-6.7168-10.791h-.0468v10.791H8.3633V4.1953zm-6.123 4.7871s.013.0041 3.3886 0v11.2754H2.2402V8.9824z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/rivensin31/" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-red-600 group'>
                <svg role="img" width= '20' className='fill-current group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/Rivensin" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-blue-700 group'>
                <svg role="img" width= '20' className='fill-current group-hover:text-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
              </a>
              
          </div>
          <p className='font-medium text-xs text-slate-500 text-center'>
            Dibuat dengan <span className='text-pink-500'>❤</span> oleh <a href="https://www.linkedin.com/in/rivensin-6b8a2a232/" target="_blank" className='font-bold text-primary'>Rivensin</a>, menggunakan <a href="https://tailwindcss.com/" target="_blank" className='font-bold text-sky-500'>Tailwind CSS</a> 
          </p>
        </div>
      </div>
    </footer>
    {/* Footer Section End */}
    </>

    
    
  )
  
}

export default Portofolio