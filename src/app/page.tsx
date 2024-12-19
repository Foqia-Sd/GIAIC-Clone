import About from "@/components/About";
import AdvancedCourses from "@/components/AdvancedCourses";
import CoreCourses from "@/components/CoreCourses";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Images />
    <ImageSlider />
    <CoreCourses />
    <AdvancedCourses />
    </>
  );
}
