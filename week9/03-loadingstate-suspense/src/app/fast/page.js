import { Suspense } from "react";
import { SlowComponent } from "@/components/SlowComponent";
import PopoverDemo from "@/components/PopoverDemo";
import { ReactIcon } from "@/components/ReactIcon";

// page and suspense fallback will load instantly, slow component will load when ready
// use fallback to display loading state animation
export default function FastPage() {
    return (
        <div>
            <h2>Fast page</h2>
            <Suspense fallback={<p>Loading...</p>}>
                <SlowComponent />
            </Suspense>
            <p>more page content</p>
            <p>yet more page content</p>
            <ReactIcon />
            <PopoverDemo />
        </div>
    );
}