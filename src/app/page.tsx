import LandingTitle from "@/components/LandingTitle";
import TextWithPopups from "@/components/TextWithPopups";

export default function Home() {
  return (
    <section>
      <h1 className="[font-stretch:expanded] text-8xl leading-none font-[800] title-h1">
        JERESC
      </h1>

      <LandingTitle />

      <div className="mt-20 min-h-screen">a</div>
      <h2 className="text-5xl inline-block mx-auto">
        <TextWithPopups
          left="This is fine"
          text="New Stuff"
          right="Sample Text"
        />
      </h2>
    </section>
  );
}
