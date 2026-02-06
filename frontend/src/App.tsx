import { useState/*,useEffect*/ } from "react";
import React from 'react';
import axios from 'axios';

export default function App() {
    const [logInErrorMsg, setLogInErrorMsg] = useState("");
    const [userLoggedInMsg,setUserLoggedInMsg] = useState("");
    const [emailValue,setEmailValue] = useState("");
    const [passwordValue,setPasswordValue] = useState("");
    const [isUserLoggedIn, logUserIn] = useState(false);
    
    function clearLoginForm(){
         setEmailValue("");
         setPasswordValue("");
    }
  
    function userLogIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const emailValue = formData.get("email")?.toString() || "";
        const passwordValue = formData.get("password")?.toString() || "";
        
        axios.post("/api/auth/login", {email:emailValue, password:passwordValue})
            .then(() => {
                setUserLoggedInMsg("Sėkmingai prisijungėte");
                setTimeout(() => {
                    logUserIn(true);
                    setTimeout(() => {
                        setUserLoggedInMsg("");
                        clearLoginForm();
                    }, 5000);
                }, 5000);
            }) 
            .catch(() => {
                setLogInErrorMsg("Prisijungimo klaida");
                setTimeout(() => {setLogInErrorMsg("");clearLoginForm()}, 5000);
           });
          
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">IAmJunior</h1>
            </header>

            {/* Hero */}
            <section className="bg-blue-50 px-6 py-8 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Pradėk karjerą IT srityje
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-3">
                    Praktiniai kursai pradedantiesiems, sukurti tam, kad išmoktum
                    realių įgūdžių ir pasiruoštum darbo rinkai.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 
                    rounded-lg font-semibold hover:bg-green-700 transition">
                    Peržiūrėti kursus
                </button>
            </section>

            {/* Main content */}
            <main className="flex flex-col md:flex-row gap-8 px-6 py-12 flex-1">
                {/* Login */}
                {!isUserLoggedIn && (
                <div className="w-full md:w-1/4 bg-white rounded-xl shadow p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">
                        Prisijungimas
                    </h3>
                    <form onSubmit={userLogIn} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                El. paštas
                            </label>
                            <input className="w-full px-4 py-2 border 
                                rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                id="email" name="email" value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Slaptažodis
                            </label>
                            <input
                                type="password" id="password" name="password" value={passwordValue}
                                onChange={(e) => setPasswordValue(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg
                                    focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 
                                rounded-lg font-semibold hover:bg-green-700 transition">
                                Prisijungti
                            </button>
                            <p className="login_form_error_msg text-red-600">{logInErrorMsg}</p>
                            <p className="user_login_msg text-green-600">{userLoggedInMsg}</p>
                        </div>
                    </form>
                </div>)}
                
                {/* Content */}
                <div className="flex-1 space-y-12">
                    {/* Courses */}
                    <section>
                        <h3 className="text-xl font-bold mb-6">
                            Populiariausi kursai
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow p-6">
                                <h4 className="text-lg font-semibold mb-2">
                                    Front-End pagrindai
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    HTML, CSS, JavaScript ir React pagrindai.
                                </p>
                                <span className="text-blue-600 font-semibold">
                                    12 savaičių
                                </span>
                            </div>

                            <div className="bg-white rounded-xl shadow p-6">
                                <h4 className="text-lg font-semibold mb-2">
                                    React + TypeScript
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Modernių SPA aplikacijų kūrimas.
                                </p>
                                <span className="text-blue-600 font-semibold">
                                    10 savaičių
                                </span>
                            </div>

                            <div className="bg-white rounded-xl shadow p-6">
                                <h4 className="text-lg font-semibold mb-2">
                                    UI / UX dizaino įvadas
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Dizaino principai ir praktika.
                                </p>
                                <span className="text-blue-600 font-semibold">
                                    8 savaitės
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Videos */}
                    <section>
                        <h3 className="text-xl font-bold mb-6">
                            Rekomenduojami vaizdo įrašai
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Video 1"
                                    allowFullScreen
                                />
                            </div>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/oHg5SJYRHA0"
                                    title="Video 2"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </section>

                    {/* Article */}
                    <article className="bg-white rounded-xl shadow p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            Kaip pradėti IT karjerą nuo nulio?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Pradėti IT karjerą gali atrodyti sudėtinga, tačiau su
                            tinkama kryptimi ir praktika tai tampa pasiekiama
                            kiekvienam.
                        </p>
                        <a 
                            href="#"
                            className="text-blue-600 font-semibold hover:text-green-700"
                        >
                            Skaityti daugiau →
                        </a>
                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t px-6 py-6 text-center text-sm text-gray-500">
                © 2026 IAmJunior. Visos teisės saugomos.
            </footer>
        </div>
    );
} 

