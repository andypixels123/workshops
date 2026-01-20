// import React from "react";
import { useSearchParams } from "react-router";

function SortOrderForm() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (event) => {
        setSearchParams({ sort: event.target.value });
    };

    return (
        <form>
            <label htmlFor="dropdown">Sort by:</label>
            <select id="dropdown" value={searchParams.get("sort") || ""} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </form>
    );
}

export default SortOrderForm;