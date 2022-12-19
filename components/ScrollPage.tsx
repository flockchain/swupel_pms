import { forwardRef } from "react";
import Greetings from "./Greetings";
import Problems from "./Problems";
import Solutions from "./Solutions";
import Demo from "./Demo";

export const DivSpinner = () => <div>Loading...</div>

export const DivContainer = forwardRef<HTMLInputElement>(({  }, ref) => (
    <>
    <div ref={ref} className="fixed top-0 left-0 outline-none"></div>
    <section className="grid items-center relative text-lg uppercase lg:pr-[600px] pt-[50px] md:pt-[100px] lg:pt-[50px] 2xl:pr-[400px] 2xl:pt-[100px] font-neue text-[#78ecb4]"  id='top'>
        <Greetings/>
    </section>
    <section className="grid items-center relative text-lg lg:pl-[600px] pt-[80px] md:pt-[140px] lg:pt-[140px] 2xl:pt-[300px] 2xl:pl-[250px] font-neue text-[#78ecb4]">
        <Problems/>
    </section>
    <section className='grid items-center relative text-lg lg:pr-[600px] pt-[80px] md:pt-[100px] lg:pt-[140px] 2xl:pt-[420px] 2xl:pl-[1600px] font-neue text-[#78ecb4]'>
        <Solutions/>
    </section>
    <section className='grid items-center relative text-lg uppercase pt-[80px] md:pt-[100px] lg:pt-[140px] 2xl:pt-[500px] font-neue text-[#78ecb4]' id='demo'>
        <Demo/>
    </section>
    <section className="grid items-center relative text-lg uppercase pt-[100px] font-neue text-[#ffeded]">
    </section>
    <br></br>
    </>
));

DivContainer.displayName = 'MyComponent';

const Loader = () => {
    return (
        <DivContainer/>
    )
}
export default Loader;