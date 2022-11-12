import {useFormContext} from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


export default function Space(props) {
    const {register, errors} = useFormContext();
    const {index, type, removeSpace, palettes, packages} = props;

    return(
        <div>
            {type === "palette" && (
                <>
                    <div>
                        <label htmlFor={`spaces[${index}].paletteType`}>Тип палети</label>
                        <select defaultValue="" id={`spaces[${index}].paletteType`} {...register(`spaces[${index}].paletteType`)}>
                            <option value="" disabled hidden>Оберіть тип палети</option>
                            {palettes.map(palette => <option key={palette.id.toString()}
                                                             value={palette.value}>{palette.label}</option>)}
                        </select>
                        <span>{errors[`spaces[${index}].paletteType`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spaces[${index}].count`}>Кількість палет</label>
                        <input type="number" id={`spaces[${index}].count`}
                               {...register(`spaces[${index}].count`)}/>
                        <span>{errors[`spaces[${index}].count`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spaces[${index}].cost`}>Оголошена вартість, грн</label>
                        <input id={`spaces[${index}].cost`}
                               {...register(`spaces[${index}].cost`)}/>
                        <span>{errors[`spaces[${index}].cost`]?.message}</span>
                    </div>


                </>
            )}

            {type === "cargo" && (
                <>
                    <div>
                        <label htmlFor={`spaces[${index}].count`}>Кількість</label>
                        <input type="number" id={`spaces[${index}].count`}
                               {...register(`spaces[${index}].count`)}/>
                        <span >{errors[`spaces[${index}].count`]?.message}</span>
                    </div>
                    <div>
                        <label htmlFor={`spaces[${index}].weight`}>Вага, кг</label>
                        <input id={`spaces[${index}].weight`}
                               {...register(`spaces[${index}].weight`)}/>
                        <span>{errors[`spaces[${index}].weight`]?.message}</span>
                    </div>
                    <div>
                        <label htmlFor={`spaces[${index}].cost`}>Оголошена вартість, грн</label>
                        <input id={`spaces[${index}].cost`} {...register(`spaces[${index}].cost`)}/>
                        <span>{errors[`spaces[${index}].cost`]?.message}</span>
                    </div>
                    <div>
                        <label htmlFor={`spaces[${index}].length`}>Довжина, см</label>
                        <input type="number" id={`spaces[${index}].length`}
                               {...register(`spaces[${index}].length`)}/>
                        <span>{errors[`spaces[${index}].length`]?.message}</span>
                    </div>
                    <div>
                        <label htmlFor={`spaces[${index}].width`}>Ширина, см</label>
                        <input type="number" id={`spaces[${index}].width`}
                               {...register(`spaces[${index}].width`)}/>
                        <span>{errors[`spaces[${index}].width`]?.message}</span>
                    </div>
                    <div>
                        <label htmlFor={`spaces[${index}].height`}>Висота, см</label>
                        <input type="number" id={`spaces[${index}].height`}
                               {...register(`spaces[${index}].height`)}/>
                        <span>{errors[`spaces[${index}].height`]?.message}</span>
                    </div>
                </>
            )}

            {index > 0 && (<FontAwesomeIcon icon={faTrashAlt} onClick={() => removeSpace(index)}/>)}
        </div>
    )
}