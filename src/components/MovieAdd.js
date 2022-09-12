function MovieAdd ({ ratingValue, insertRecord}){
    return(
        <a href="#" className="addSes">
            <i
                onClick={(e) => {
                e.preventDefault();
                const titleNew = window.prompt("Enter title:");
                insertRecord({
                    id: "99999",
                    title: titleNew,
                    summary: "Summary not entered yet!",
                    ratings: [
                    {
                        Source:"Admin",
                        Value:`${ratingValue}`,
                    },
                    ],
                });
                }}
            >
                +
            </i>
        </a>
    );
}
export default MovieAdd;