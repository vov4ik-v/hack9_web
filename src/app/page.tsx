import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/Partners/Partners";
import AboutHack from "@/components/AboutHack";
import Theme from "@/components/Theme";
import AboutBest from "@/components/AboutBest";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registation";
import CategoriesSection from "@/components/Categories";
import Feedbacks from "@/components/Feedbacks";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
            <Header/>
            <Hero/>
            <AboutHack/>
            <Theme/>
            <CategoriesSection/>
            <Registration/>
            <Feedbacks/>
            <AboutBest/>
            <Team/>
            <Gallery/>
            <PartnersSection/>
            <Contacts/>
            <Footer/>
        </main>
    );
}