
export default function TriggerError() {
    throw new Error("I deliberately broke this page, because I'm a bad person");
    return (
        // the error always throws because we're deliberately causing a problem
        // maybe we didn't get a param and this page will not work without it
        <div>My page content</div>
    );
}