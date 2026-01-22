import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function InstrumentsData() {
    const supabase = await createClient();
    const { data: instruments, error } = await supabase
        .from("instruments")
        .select();

    if (error) {
        return (
            <div>
                <h2>Error loading instruments:</h2>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
        );
    }

    if (!instruments || instruments.length === 0) {
        return <div>No instruments found</div>;
    }

    return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}

export default function Instruments() {
    return (
        <Suspense fallback={<div>Loading instruments...</div>}>
            <InstrumentsData />
        </Suspense>
    );
}
