import "./style.scss";

interface Event {
  date: string;
  event: string;
}

interface TimeLineProps {
  events: Event[];
  title: string;
}

const getClassName = (index: number) => {
  return index % 2 === 0 ? " left" : " right";
};

export default function TimeLine(props: TimeLineProps) {
  return (
    <section className="section-timeline">
      <h3>{props.title}</h3>
      <div className="timeline">
        {props.events.map((item, index) => (
          <div className={"row" + getClassName(index)} key={index}>
            <div className="event">
              <h3>{item.date}</h3>
              <p>{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
