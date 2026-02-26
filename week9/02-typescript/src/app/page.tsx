import { Hello } from "@/components/Hello";
import MyComponent from "@/components/MyComponent";

export default function Home() {
  return (
    <div>
      <Hello name="World" age={23} />
      <MyComponent />
    </div>
  );
}
