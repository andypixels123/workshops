import { FaTwitter } from "react-icons/fa";
import { Bs1CircleFill } from "react-icons/bs";
import { BsBadge4kFill } from "react-icons/bs";

// export function Hello() {
//   return <div>Hello</div>;
// }

// Component without types:
// export function Hello(props) {
//   return (
//     <div>
//       Hello {props.name} who is {props.age}
//     </div>
//   );
// }

// Component with inline prop types
// export function Hello(props: { name: string, age: number }) {
//   return (
//     <div>
//       Hello {props.name} who is {props.age}
//     </div>
//   );
// }

// Component with separate prop type:
// type HelloProps = {
//   name: string;
//   age: number;
// };

// export function Hello(props: HelloProps) {
//   return (
//     <div>
//       Hello {props.name} who is {props.age}
//     </div>
//   );
// }

// Component with deconstructed props:
type HelloProps = {
  name: string;
  age: number;
};

export function Hello({ name, age }: HelloProps) {
  return (
    <>
      <div>
        Hello {name} who is {age}
      </div>

      <div className="icon">
        <p>React Icon:&nbsp;</p>
        <FaTwitter size={50} />
      </div>

      <div className="icon">
        <p>React Icon:&nbsp;</p>
        <Bs1CircleFill size={50} />
      </div>

      <div className="icon">
        <p>React Icon:&nbsp;</p>
        <BsBadge4kFill size={50} />
      </div>
    </>
  );
}
