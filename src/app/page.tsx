import LandingTitle from "@/components/LandingTitle";
import TextWithPopups from "@/components/TextWithPopups";
import ThisIsFine from "@/assets/imgs/this-is-fine.gif";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="[font-stretch:expanded] text-8xl leading-none font-[800] title-h1">
        JERESC
      </h1>

      {/* <LandingTitle /> */}
      <h2 className="text-3xl leading-normal inline-block font-[400] font-merriweather">
        <TextWithPopups
          left={
            <Image
              width={200}
              height={200}
              src={ThisIsFine.src}
              alt="dev"
              className="w-full h-full object-cover"
            />
          }
          text="Junior"
          right="How 'about you?"
          variant="red-orange"
        />
        {" Front End Web "}
        <TextWithPopups
          left="New Stuff"
          text="Developer"
          right="Sample Text"
          variant="orange-yellow"
        />
      </h2>

      <Image
        width={200}
        height={200}
        src={ThisIsFine.src}
        alt="dev"
        className="w-full h-full object-cover"
      />
      <div className="mt-96 min-h-[200vh]">a</div>
    </section>
  );
}
