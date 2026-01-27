import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import "./popoverStyles.module.css";

// const PopoverDemo = () => (
//     <Popover.Root>
//         <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
//         <Popover.Portal>
//             <Popover.Content className="PopoverContent" sideOffset={5}>
//                 Some more info…
//                 <Popover.Arrow className="PopoverArrow" />
//             </Popover.Content>
//         </Popover.Portal>
//     </Popover.Root>
// );
// export default PopoverDemo;

export default function PopoverDemo() {
    return (
        <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">More info popover</Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className="PopoverContent">
                    Some more info…
                    <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}


