import GlossyNavBar from "../NavBar";

export function Wrapper(props: any) {
  return (
    <>
      <div>{props.children}</div>
      <GlossyNavBar />
    </>
  );
}
