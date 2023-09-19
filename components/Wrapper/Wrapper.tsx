import GlossyNavBar from "../NavBar";

export function Wrapper(props: any) {
  return (
    <>
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
