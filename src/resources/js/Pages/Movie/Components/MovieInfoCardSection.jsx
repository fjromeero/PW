import Label from "./Label";

export default function MovieInfoCardSection({type, value}){
    return (
        <div id='movie-genre' className="basis-full mb-1 flex">
            <Label>{type}</Label>
            <Label>{value}</Label>
        </div>
    );
}