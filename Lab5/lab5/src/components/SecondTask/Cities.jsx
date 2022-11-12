
import {useFormContext} from "react-hook-form";

export default function Cities(props) {
    const {register, errors} = useFormContext();
    const {cities, type} = props;

    return(
        <div>
            <label htmlFor="city_from">{type === "from" ? "Місто відправлення" : "Місто прибуття"}</label>
            <select defaultValue="" id="city_from" {...register(type === "from" ? "city_from" : "city_to")}>
                <option value="" disabled hidden>Оберіть місто</option>
                {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </select>
            <span>{errors[type === "from" ? "city_from" : "city_to"]?.message}</span>
        </div>
    )
}