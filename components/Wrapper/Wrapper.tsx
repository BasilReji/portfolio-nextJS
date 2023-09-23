import GlossyNavBar from "../NavBar";

export function Wrapper(props: any) {
  return (
    <>
      <div
        style={{
          marginBottom: "100px",
        }}
      >
        {props.children}
      </div>
      <GlossyNavBar />
    </>
  );
}
