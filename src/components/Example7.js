"use client";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

export default function Parent() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Dee" />
      <Greeting name="Charlie" />
    </div>
  );
}
