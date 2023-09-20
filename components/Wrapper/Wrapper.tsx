import ScreenIdleAnimation from "@/hooks/idleHandler";
import GlossyNavBar from "../NavBar";

export function Wrapper(props: any) {
  return (
    <>
      {/* <ScreenIdleAnimation /> */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        {props.children}
      </div>
      <GlossyNavBar />
    </>
  );
}
